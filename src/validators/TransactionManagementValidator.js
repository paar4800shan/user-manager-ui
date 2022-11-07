import {
    TRANSACTION_TYPE_VALUES,
  } from "../data/ViewStatementForm";
  import { validateDropdown, validateEmptyData, validateLoanAmount } from "./validators";

export const validateTransactionManagementForm = (data) => {
    if (!validateDropdown(data.transactionType, TRANSACTION_TYPE_VALUES)) {
      return {
        status: false,
        message: "Invalid Transaction Type",
      };
    }
  
  
    if (!validateLoanAmount(data.loanAmount, data.balance)) {
      return {
        status: false,
        message: "Invalid Amount",
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