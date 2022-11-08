import React, { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormField from "../../components/FormField/FormField";
import Heading from "../../components/Heading/Heading";
import { showErrorToastNotification } from "../../components/ToastNotification";
import { LOAN_APPLICATION_FORM } from "../../data/LoanApplicationForm";
import {
  validateLoanInfo,
  validateBranchName,
} from "../../validators/AuthValidator";
import styles from "./LoanApplication.module.css";

const loanInfoFormat = {
  userID: "C123",
  branch: "",
  loanAmount: "",
};

function LoanApplication() {
  let navigate = useNavigate();

  const [loanInfo, setloanInfo] = useState(loanInfoFormat);

  const changeLoanInfo = (args) => {
    let prevState = loanInfo;
    prevState[args.key] = args.value;
    setloanInfo({ ...prevState });
  };

  const clickedSubmit = () => {
    // Validation
    let dropdownvalidation = validateBranchName(loanInfo);

    if (!dropdownvalidation.status) {
      showErrorToastNotification(dropdownvalidation.message);
      return;
    }

    let validation = validateLoanInfo(loanInfo);

    if (!validation.status) {
      showErrorToastNotification(validation.message);
      return;
    }

    console.log(loanInfo);
  };

  return (
    <Container className={`py-4`}>
      <Row>
        <Col>
          <Heading title={"Global Bank User Loan Application Page"} />
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
              value={loanInfo}
              setter={changeLoanInfo}
              isReadOnly={true}
            />
          </Col>

          {LOAN_APPLICATION_FORM.map((field, index) => {
            return (
              <Col key={index} xs={12} md={8} lg={6}>
                <FormField
                  type={field.type}
                  fieldName={field.fieldName}
                  name={field.name}
                  value={loanInfo}
                  setter={changeLoanInfo}
                  dropdownValues={
                    field.hasOwnProperty("dropdownValues") &&
                    field.dropdownValues
                  }
                />
              </Col>
            );
          })}

          <Col xs={6}>
            <Button text={"Submit"} onClickMethod={clickedSubmit} />
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

export default LoanApplication;
