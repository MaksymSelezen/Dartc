import JustValidate from "just-validate";

const FIELD_IDS = {
  name: "#contact-name",
  email: "#contact-email",
  message: "#contact-message",
};

const FIELD_HINTS = {
  name: {
    default: "Enter your full name.",
    invalid: "Please enter a valid name (at least 2 characters).",
    valid: "Name looks good.",
  },
  email: {
    default: "Enter your email address.",
    invalid: "Please enter a valid email address.",
    valid: "Email address looks good.",
  },
  message: {
    default:
      "Please fill in all fields marked with an asterisk (*)! Please note our Privacy policy.",
    invalid:
      "Please fill in all fields marked with an asterisk (*)! Please note our Privacy policy.",
    valid:
      "Please fill in all fields marked with an asterisk (*)! Please note our Privacy policy.",
  },
};

const setFieldState = (field, state) => {
  if (!field) {
    return;
  }

  field.classList.remove("is-invalid", "is-valid");

  if (state === "invalid") {
    field.classList.add("is-invalid");
  }

  if (state === "valid") {
    field.classList.add("is-valid");
  }
};

const getFieldHint = (fieldName, state) =>
  FIELD_HINTS[fieldName]?.[state] ?? "";

const setHint = (field, text) => {
  const hint = field?.querySelector(".contact__hint");

  if (hint) {
    hint.textContent = text;
  }
};

const validateContactForm = () => {
  const form = document.querySelector(".contact__form");

  if (!form) {
    return;
  }

  const fields = {
    name: form.querySelector(FIELD_IDS.name)?.closest(".contact__field"),
    email: form.querySelector(FIELD_IDS.email)?.closest(".contact__field"),
    message: form.querySelector(FIELD_IDS.message)?.closest(".contact__field"),
  };

  const updateFieldUi = (fieldName, isValid) => {
    const field = fields[fieldName];

    if (!field) {
      return;
    }

    const state = isValid ? "valid" : "invalid";

    setFieldState(field, state);
    setHint(field, getFieldHint(fieldName, state));
  };

  const setFieldDefaultUi = (fieldName) => {
    const field = fields[fieldName];

    if (!field) {
      return;
    }

    setFieldState(field, "default");
    setHint(field, getFieldHint(fieldName, "default"));
  };

  const validator = new JustValidate(form, {
    errorFieldCssClass: "",
    successFieldCssClass: "",
    errorLabelCssClass: "contact__validation-label",
    successLabelCssClass: "contact__validation-label",
    errorsContainer: null,
  });

  validator
    .addField(FIELD_IDS.name, [
      { rule: "required", errorMessage: FIELD_HINTS.name.invalid },
      { rule: "minLength", value: 2, errorMessage: FIELD_HINTS.name.invalid },
    ])
    .addField(FIELD_IDS.email, [
      { rule: "required", errorMessage: FIELD_HINTS.email.invalid },
      { rule: "email", errorMessage: FIELD_HINTS.email.invalid },
    ])
    .addField(FIELD_IDS.message, [
      { rule: "required", errorMessage: FIELD_HINTS.message.invalid },
      {
        rule: "minLength",
        value: 10,
        errorMessage: FIELD_HINTS.message.invalid,
      },
    ])
    .onSuccess((event) => {
      event.target.reset();

      Object.keys(fields).forEach(setFieldDefaultUi);
    });

  Object.entries(FIELD_IDS).forEach(([fieldName, selector]) => {
    const input = form.querySelector(selector);

    if (!input || input.disabled) {
      return;
    }

    input.addEventListener("blur", async () => {
      const isValid = await validator.revalidateField(selector);
      updateFieldUi(fieldName, isValid);
    });

    input.addEventListener("input", async () => {
      const field = fields[fieldName];

      if (
        !field ||
        (!field.classList.contains("is-invalid") &&
          !field.classList.contains("is-valid"))
      ) {
        return;
      }

      const isValid = await validator.revalidateField(selector);
      updateFieldUi(fieldName, isValid);
    });
  });

  form.addEventListener("submit", async () => {
    const result = await validator.revalidate();

    Object.entries(result).forEach(([key, value]) => {
      updateFieldUi(key, value.isValid);
    });
  });
};

validateContactForm();
