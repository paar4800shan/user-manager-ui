import React from "react";
import styles from "./FormField.module.css";
import { Form } from "react-bootstrap";

function FormField({ type, fieldName, placeholder, name, value, setter }) {
  const renderFormField = () => {
    if (["text", "password"].includes(type)) {
      return (
        <>
          <Form.Group className="mb-8">
            <Form.Label>{fieldName}</Form.Label>
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
          </Form.Group>
        </>
      );
    }
  };
  return <>{renderFormField()}</>;
}

export default FormField;
