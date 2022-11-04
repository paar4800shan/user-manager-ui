import React, { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Button from "../../components/Button/Button";
import FormField from "../../components/FormField/FormField";
import Heading from "../../components/Heading/Heading";
import { REGISTRATION_FORM } from "../../data/RegistrationForm";
import styles from "./Registration.module.css";

const registrationCredentialsFormat = {
  firstName: "",
  middleName: "",
  lastName: "",
  city: "",
  contact: "",
  occupation: "",
  dob: "",
  password: "",
  cpassword: "",
};

function Registration() {
  const [registrationData, setregistrationData] = useState(
    registrationCredentialsFormat
  );

  const changeRegistrationData = (args) => {
    let prevState = registrationData;
    prevState[args.key] = args.value;
    setregistrationData({ ...prevState });
  };

  const clickedRegister = () => {
    console.log(registrationData);
  };

  return (
    <Container className={`py-4`}>
      <Row>
        <Col>
          <Heading title={"Global Bank Branch Details Opening Page"} />
        </Col>
      </Row>

      <Row>
        <Stack gap={3} className={`align-items-center`}>
          {REGISTRATION_FORM.map((field, index) => {
            return (
              <Col xs={6}>
                <FormField
                  key={index}
                  type={field.type}
                  fieldName={field.fieldName}
                  name={field.name}
                  value={registrationData}
                  setter={changeRegistrationData}
                />
              </Col>
            );
          })}

          <Col xs={6}>
            <Button text={"Register"} onClickMethod={clickedRegister} />
          </Col>
        </Stack>
      </Row>
    </Container>
  );
}

export default Registration;
