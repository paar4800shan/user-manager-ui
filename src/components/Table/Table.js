import React from "react";
import { Table as TSTABLE } from "react-bootstrap";
import { formatDateFromDB } from "../../utils/helpers";

function Table({ shouldRender, data }) {
  if (shouldRender === true) {
    let tableData = [];

    for (let i = 0; i < data.length; i++)
      tableData = [
        ...tableData,
        <tr>
          <td>{data[i].transid}</td>
          <td>{formatDateFromDB(data[i].date)}</td>
          <td>{data[i].amount}</td>
        </tr>,
      ];

    return (
      <TSTABLE striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </TSTABLE>
    );
  }

  return "";
}

export default Table;
