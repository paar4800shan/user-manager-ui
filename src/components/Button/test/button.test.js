import React from "react";
import ReactDOM from "react-dom";
import Button from './../Button';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

it('renders without crashing', () => {
    const div = document.createElement("div");
    render(<Button></Button>,div)
})

it('renders button correctly', () => {
    const{getByTestId} = render(
    <Button id='button'
        text={"Test Text"}
      />)
      expect(getByTestId('button')).toHaveTextContent("Test Text")
})