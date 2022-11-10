import { TRANSACTION_TYPE_VALUES } from "../data/ViewStatementForm";
import {
  validateDropdown,
  validateEmptyData,
  validateTransactionAmount,
  validateNegativeAmount,
  validateTransactionDropdown,
} from "./validators";

export const validateTransactionManagementForm = (data) => {
  if (
    !validateTransactionDropdown(data.transactionType, TRANSACTION_TYPE_VALUES)
  ) {
    return {
      status: false,
      message: "Invalid Transaction Type",
    };
  }

  if (!validateNegativeAmount(data.loanAmount)) {
    return {
      status: false,
      message: "Enter an amount greater than 0",
    };
  }

  if (!validateEmptyData(data.loanAmount)) {
    return {
      status: false,
      message: "Invalid Amount",
    };
  }

  return {
    status: true,
  };
};
