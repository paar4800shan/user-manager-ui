import React from "react";
import styles from "./FormField.module.css";
import { Col, Form, Stack } from "react-bootstrap";

function FormField({ type, fieldName, placeholder, name, value, setter }) {
  const renderFormField = () => {
    if (["text", "password", "date"].includes(type)) {
      return (
        <>
          <Form.Group className="mb-8">
            <Stack direction="horizontal" className={`justify-content-center`}>
              <Col xs={4}>
                <Form.Label>{fieldName}</Form.Label>
              </Col>
              <Col xs={6}>
                <Form.Control
                  type={type}
                  placeholder={placeholder}
                  value={value[name]}
                  onChange={(e) =>
                    setter({
                      key: name,
                      value: e.target.value,
                    })
                  }
                />
              </Col>
            </Stack>
          </Form.Group>
        </>
      );
    }
  };
  return <>{renderFormField()}</>;
}

export default FormField;
