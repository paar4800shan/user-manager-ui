import { validateContact, validateEmptyData, validatePassword } from "./validators";

export const validateLoginForm = (data) => {
  if (data.userID.trim().length === 0) {
    return {
      status: false,
      message: "Invalid User ID",
    };
  }

  if (data.password.trim().length === 0) {
    return {
      status: false,
      message: "Enter Password",
    };
  }

  return {
    status: true,
  };
};

export const validateRegistrationForm = (data) => {
  if (!validateEmptyData(data.firstName)) {
    return {
      status: false,
      message: "Invalid First Name",
    };
  }

  if (!validateEmptyData(data.middleName)) {
    return {
      status: false,
      message: "Invalid Middle Name",
    };
  }

  if (!validateEmptyData(data.lastName)) {
    return {
      status: false,
      message: "Invalid Last Name",
    };
  }

  if (!validateEmptyData(data.city)) {
    return {
      status: false,
      message: "Invalid City",
    };
  }

  if (!validateContact(data.contact)) {
    return {
      status: false,
      message: "Invalid Contact",
    };
  }

  if (!validateEmptyData(data.occupation)) {
    return {
      status: false,
      message: "Invalid Occupation",
    };
  }

  if (!validateEmptyData(data.dob)) {
    return {
      status: false,
      message: "Invalid Date of Birth",
    };
  }

  if (!validatePassword(data.password)) {
    return {
      status: false,
      message: "Invalid Password (Minimum 8 characters)",
    };
  }

  if (data.password.trim() !== data.cpassword.trim()) {
    return {
      status: false,
      message: "Passwords not matching",
    };
  }

  return {
    status: true,
  };
};
