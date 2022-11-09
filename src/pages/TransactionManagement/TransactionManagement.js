import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Button from "../../components/Button/Button";
import FormField from "../../components/FormField/FormField";
import Heading from "../../components/Heading/Heading";
import { TRANSACTION_MANAGEMENT_FORM } from "../../data/TransactionManagementForm";
import {
  showErrorToastNotification,
  showSuccessToastNotification,
} from "../../components/ToastNotification";
import { validateTransactionManagementForm } from "../../validators/TransactionManagementValidator";
import styles from "./TransactionManagement.module.css";
import { apiTransaction } from "../../api/api";

const transactionManagementDataFormat = {
  userID: "C12345",
  transactionType: "",
  loanAmount: "",
};

function TransactionManagement() {
  const [transactionManagementData, settransactionManagementData] = useState(
    transactionManagementDataFormat
  );

  let navigate = useNavigate();

  useEffect(() => {
    changeTransactionManagementData({
      key: "userID",
      value: localStorage.getItem("userID"),
    });

    return () => {};
  }, []);

  const changeTransactionManagementData = (args) => {
    let prevState = transactionManagementData;
    prevState[args.key] = args.value;
    settransactionManagementData({ ...prevState });
  };

  const clickedTransactionManagement = async () => {
    // Validation
    let validation = validateTransactionManagementForm(
      transactionManagementData
    );

    if (!validation.status) {
      console.log(validation.message);
      showErrorToastNotification(validation.message);
      return;
    }
    console.log(transactionManagementData);

    let resp = await apiTransaction({
      amount: transactionManagementData.loanAmount,
      transactiontype: transactionManagementData.transactionType,
    });

    console.log(resp);

    if (resp === undefined) {
      showErrorToastNotification(<p>Please try again after sometime</p>);
    } else {
      if (resp.status === 200) {
        // Success
        showSuccessToastNotification("Transaction Success");
        navigate("/operations");
      } else if (resp.status >= 400 && resp.status < 500) {
        showErrorToastNotification(<p>{resp.data}</p>);
      } else if (resp.status >= 500 && resp.status < 600) {
        showErrorToastNotification(<p>{resp.data}</p>);
      }
    }
  };

  return (
    <Container className={`py-4`}>
      <Row>
        <Col>
          <Heading title={"Global Bank Transaction Management Page"} />
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
              value={transactionManagementData}
              setter={changeTransactionManagementData}
              isReadOnly={true}
            />
          </Col>

          {TRANSACTION_MANAGEMENT_FORM.map((field, index) => {
            return (
              <Col key={index} xs={12} md={8} lg={6}>
                <FormField
                  type={field.type}
                  fieldName={field.fieldName}
                  name={field.name}
                  value={transactionManagementData}
                  setter={changeTransactionManagementData}
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
              text={"Apply"}
              onClickMethod={clickedTransactionManagement}
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
}

export default TransactionManagement;
