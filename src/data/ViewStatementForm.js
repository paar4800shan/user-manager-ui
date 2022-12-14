export const TRANSACTION_TYPE_VALUES = [
  { id: "Withdraw", name: "Withdraw" },
  { id: "Deposit", name: "Deposit" },
];
export const VIEW_STATEMENT_FORM = [
  {
    type: "dropdown",
    fieldName: "Transaction Type",
    name: "transactionType",
    dropdownValues: TRANSACTION_TYPE_VALUES,
  },
  {
    type: "date",
    fieldName: "Transaction Period From",
    name: "fromDate",
  },
  {
    type: "date",
    fieldName: "Transaction Period To",
    name: "toDate",
  },
];
