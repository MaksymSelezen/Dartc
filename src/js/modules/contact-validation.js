import JustValidate from "just-validate";

const CONTACT_HINT_TEXT = "This is a hint text to help user.";
const FIELD_IDS = {
  name: "#contact-name",
  email: "#contact-email",
  message: "#contact-message",
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

const setHint = (field, text = CONTACT_HINT_TEXT) => {
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

  const updateFieldUi = (fieldName, isValid, text = CONTACT_HINT_TEXT) => {
    const field = fields[fieldName];

    if (!field) {
      return;
    }

    setFieldState(field, isValid ? "valid" : "invalid");
    setHint(field, text);
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
      { rule: "required", errorMessage: CONTACT_HINT_TEXT },
      { rule: "minLength", value: 2, errorMessage: CONTACT_HINT_TEXT },
    ])
    .addField(FIELD_IDS.email, [
      { rule: "required", errorMessage: CONTACT_HINT_TEXT },
      { rule: "email", errorMessage: CONTACT_HINT_TEXT },
    ])
    .addField(FIELD_IDS.message, [
      { rule: "required", errorMessage: CONTACT_HINT_TEXT },
      { rule: "minLength", value: 10, errorMessage: CONTACT_HINT_TEXT },
    ])
    .onSuccess((event) => {
      event.target.reset();

      Object.values(fields).forEach((field) => {
        setFieldState(field, "default");
        setHint(field);
      });
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
