import React, { useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormField from "../../components/FormField/FormField";
import Heading from "../../components/Heading/Heading";
import { showErrorToastNotification } from "../../components/ToastNotification";
import { VIEW_STATEMENT_FORM } from "../../data/ViewStatementForm";
import { validateViewStatementForm } from "../../validators/TransactionsValidator";
import styles from "./ViewStatement.module.css";
import Table from "../../components/Table/Table";
import { apiStatement } from "../../api/api";

const viewStatementDataFormat = {
  userID: "C12345",
  transactionType: "",
  fromDate: "",
  toDate: "",
};

// getTransactions(userID, date)
// const transactions = [
//   {
//     id: 0,
//     type: "Deposit",
//     amount: "1000",
//     date: "12/09/2022",
//   },
// ];

function ViewStatement() {
  let navigate = useNavigate();

  const [viewTable, setviewTable] = useState(false);
  const [transactionsData, settransactionsData] = useState([]);
  const [viewStatementData, setviewStatementData] = useState(
    viewStatementDataFormat
  );

  useEffect(() => {
    changeViewStatementData({
      key: "userID",
      value: localStorage.getItem("userID"),
    });

    return () => {};
  }, []);

  const changeViewStatementData = (args) => {
    let prevState = viewStatementData;
    prevState[args.key] = args.value;
    setviewStatementData({ ...prevState });
  };

  const clickedViewStatement = async () => {
    // Validation
    let validation = validateViewStatementForm(viewStatementData);

    if (!validation.status) {
      showErrorToastNotification(validation.message);
      return;
    }

    let resp = await apiStatement(viewStatementData);

    if (resp === undefined) {
      showErrorToastNotification(<p>Please try again after sometime</p>);
    } else {
      if (resp.status === 200) {
        // Success
        setviewTable(true);
        settransactionsData(resp.data);
      } else if (resp.status >= 400 && resp.status < 500) {
        showErrorToastNotification(resp.data);
      } else if (resp.status >= 500 && resp.status < 600) {
        showErrorToastNotification(resp.data);
      }
    }
  };
  if (!viewTable) {
    return (
      <Container className={`py-4`}>
        <Row>
          <Col>
            <Heading title={"Global Bank View Statement Page"} />
          </Col>
        </Row>

        <Row>
          <Stack gap={3} className={`align-items-center`}>
            {/* User ID */}
            <Col xs={12} md={8} lg={6}>
              <FormField
                type={"text"}
                fieldName={"User ID"}
                placeholder={"User ID"}
                name={"userID"}
                value={viewStatementData}
                setter={changeViewStatementData}
                isReadOnly={true}
              />
            </Col>

            {VIEW_STATEMENT_FORM.map((field, index) => {
              return (
                <Col key={index} xs={12} md={8} lg={6}>
                  <FormField
                    type={field.type}
                    fieldName={field.fieldName}
                    name={field.name}
                    value={viewStatementData}
                    setter={changeViewStatementData}
                    dropdownValues={
                      field.hasOwnProperty("dropdownValues") &&
                      field.dropdownValues
                    }
                  />
                </Col>
              );
            })}

            <Col xs={6}>
              <Button
                text={"View Statement"}
                onClickMethod={clickedViewStatement}
              />
            </Col>

            <Col xs={6}>
              <Button
                text={"Back to Operations"}
                onClickMethod={() => navigate("/operations")}
              />
            </Col>
          </Stack>
        </Row>
      </Container>
    );
  } else
    return (
      <Container>
        <Table shouldRender={viewTable} data={transactionsData}></Table>
        <Button text={"Back"} onClickMethod={() => setviewTable(false)} />
      </Container>
    );
}

export default ViewStatement;
