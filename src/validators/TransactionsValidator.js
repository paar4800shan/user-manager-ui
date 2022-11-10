import {
  TRANSACTION_TYPE_VALUES,
  VIEW_STATEMENT_FORM,
} from "../data/ViewStatementForm";
import { validateDropdown, validateEmptyData, validateTransactionDropdown } from "./validators";

export const validateViewStatementForm = (data) => {
  if (!validateTransactionDropdown(data.transactionType, TRANSACTION_TYPE_VALUES)) {
    return {
      status: false,
      message: "Invalid Transaction Type",
    };
  }

  if (!validateEmptyData(data.fromDate)) {
    return {
      status: false,
      message: "Invalid From Date",
    };
  }

  if (!validateEmptyData(data.toDate)) {
    return {
      status: false,
      message: "Invalid To Date",
    };
  }

  return {
    status: true,
  };
};
