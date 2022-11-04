import React, { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Button from "../../components/Button/Button";
import FormField from "../../components/FormField/FormField";
import Heading from "../../components/Heading/Heading";
import styles from "./Login.module.css";

const loginCredentialsFormat = {
  userID: "",
  password: "",
};

function Login() {
  const [loginCredentials, setloginCredentials] = useState(
    loginCredentialsFormat
  );

  const changeLoginCredentials = (args) => {
    let prevState = loginCredentials;
    prevState[args.key] = args.value;
    setloginCredentials({ ...prevState });
  };

  const clickedLogin = () => {
    console.log(loginCredentials);
  }

  return (
    <Container className={`py-4`}>
      <Row>
        <Col>
          <Heading title={"Global Bank User Login"} />
        </Col>
      </Row>

      <Row>
        <Stack gap={3} className={`align-items-center`}>
          {/* User ID */}
          <Col xs={6}>
            <FormField
              type={"text"}
              fieldName={"User ID"}
              placeholder={"User ID"}
              name={"userID"}
              value={loginCredentials}
              setter={changeLoginCredentials}
            />
          </Col>

          {/* Password */}
          <Col xs={6}>
            <FormField
              type={"password"}
              fieldName={"Password"}
              placeholder={"********"}
              name={"password"}
              value={loginCredentials}
              setter={changeLoginCredentials}
            />
          </Col>

          <Col xs={6}>
            <Button text={"Login"} onClickMethod={clickedLogin} />
          </Col>
        </Stack>
      </Row>
    </Container>
  );
}

export default Login;
