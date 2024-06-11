import { validateEmail, validateSurname, validateTelephone, validateName } from './validations.js';

export const validateField = (fieldId, value) => {
  switch (fieldId.id) {
    case 'inputName':
      return validateName(value);
    case 'inputSurname':
      return validateSurname(value);
    case 'inputEmail':
      return validateEmail(value);
    case 'inputTelephone':
      return validateTelephone(value);
    default:
      return value.trim() !== '';
  }
};

export const switchValidityClass = (input, isValid) => {
  if (isValid) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  } else {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
  }
};