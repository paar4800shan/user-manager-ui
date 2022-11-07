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

export const validateDropdown = (data, values) => {
  if (!values.includes(data)) return false;
  return true;
};

export const validateLoanAmount = (data, balance) => {
  console.log(data);
  console.log(balance);
  if(data > balance) return false;
  return true;
}
