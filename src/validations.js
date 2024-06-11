export const validateName = (value) => /^[а-яА-Я]{4,16}$/.test(value.trim());
export const validateSurname = (value) => /^[а-яА-Я]{4,16}$/.test(value.trim());
export const validateTelephone = (value) => /^\+7\d{10}$/.test(value.trim());
export const validateEmail = (value) => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/.test(value.trim());
