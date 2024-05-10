export const validationsNewPost = (input) => {
  const errors = {};

  // VALIDACION TITLE
  if (!input.title) errors.title = "Debe ingresar un título";
  else if (input.title.length < 5) {
    errors.title = "El título debe tener al menos 5 caracteres";
  } else if (input.title.length > 10) {
    errors.title = "El título debe tener un máximo de 10 caracteres";
  }

  // VALIDACION CATEGORY
  else if (!input.category) errors.category = "Debe ingresar una categoría";
  // VALIDACION DESCRIPTION
  else if (!input.description)
    errors.description = "Debe ingresar una descripción";
  else if (input.description.length < 10) {
    errors.description = "La descripción debe tener al menos 10 caracteres";
  } else if (input.description.length > 100) {
    errors.description =
      "La descripción debe tener un máximo de 100 caracteres";
  }

  // VALIDACION PAYMENT
  else if (!input.payment) {
    errors.payment = "Debe ingresar un valor";
  } else if (!/^\d+$/.test(input.payment)) {
    errors.payment = "El valor debe ser un número";
  }
  return errors;
};
