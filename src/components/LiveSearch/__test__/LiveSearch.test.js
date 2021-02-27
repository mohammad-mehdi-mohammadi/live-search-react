import React from 'react';
import ReactDOM from 'react-dom';
import LiveSearch from "../LiveSearch";
import {render, fireEvent, cleanup} from "@testing-library/react";

afterEach(cleanup)
it("renders with redux", () => {
    const {getByTestId, getByText} = render(<LiveSearch/>)
})
