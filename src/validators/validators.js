export const validateEmptyData = (data) => {
  if (data.trim().length === 0) return false;
  return true;
};

export const validateContact = (data) => {
  let regex = /^\d{10}$/;
  return regex.test(data);
};

export const validatePassword = (data) => {
  if (data.trim().length < 8) return false;
  return true;
};
