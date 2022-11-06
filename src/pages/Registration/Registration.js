import React, { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormField from "../../components/FormField/FormField";
import Heading from "../../components/Heading/Heading";
import { REGISTRATION_FORM } from "../../data/RegistrationForm";
import { validateRegistrationForm } from "../../validators/AuthValidator";
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
  let navigate = useNavigate();

  const [registrationData, setregistrationData] = useState(
    registrationCredentialsFormat
  );

  const changeRegistrationData = (args) => {
    let prevState = registrationData;
    prevState[args.key] = args.value;
    setregistrationData({ ...prevState });
  };

  const clickedRegister = () => {
    // Validation
    let validation = validateRegistrationForm(registrationData);

    if (!validation.status) {
      console.log(validation.message);
      return;
    }

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
              <Col key={index} xs={12} md={8} lg={6}>
                <FormField
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

          <Col xs={6}>
            <Button
              text={"Already have an account? Login"}
              onClickMethod={() => navigate("/login")}
            />
          </Col>
        </Stack>
      </Row>
    </Container>
  );
}

export default Registration;
