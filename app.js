import { validateField, switchValidityClass } from "./src/utils.js";

const inputName = document.getElementById('inputName');
const inputSurname = document.getElementById('inputSurname');
const inputEmail = document.getElementById('inputEmail');
const inputTelephone = document.getElementById('inputTelephone');

inputName.addEventListener('input', handleInputChange);
inputSurname.addEventListener('input', handleInputChange);
inputEmail.addEventListener('input', handleInputChange);
inputTelephone.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  const input = event.target;
  const value = input.value;

  const isValid = validateField(input, value);
  switchValidityClass(input, isValid);

  const isFormValid = validateForm();

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = !isFormValid;
}

const form = document.getElementById('registration-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  const formData = new FormData(form);

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Отправляемые данные:', formData);
      alert('Данные отрпавленны');
      form.reset();
      resetFormFields();

      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.disabled = true;
    } else {
      alert('Произошла ошибка при отправке данных');
    }
  } catch (error) {
    alert('Произошла ошибка при отправке данных');
    console.error(error);
  }
});

const validateForm = () => {
  let isValid = true;

  if (!validateField(inputName, inputName.value)) {
    isValid = false;
  } else {
    switchValidityClass(inputName, true);
  }
  if (!validateField(inputSurname, inputSurname.value)) {
    isValid = false;
  } else {
    switchValidityClass(inputSurname, true);
  }

  if (!validateField(inputEmail, inputEmail.value)) {
    isValid = false;
  } else {
    switchValidityClass(inputEmail, true);
  }

  if (!validateField(inputTelephone, inputTelephone.value)) {
    isValid = false;
  } else {
    switchValidityClass(inputTelephone, true);
  }

  return isValid;
}

const resetFormFields = () => {
  const formFields = [inputName, inputSurname, inputEmail, inputTelephone];
  formFields.forEach(field => {
    switchValidityClass(field, true);
    field.classList.remove('is-valid');
  });
}

