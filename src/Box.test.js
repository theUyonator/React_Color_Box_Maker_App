import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

describe("<Box /> rendering", () => {

it("renders correctly without crashing", () => {
    render(<Box />)
});

it("matches snapshot", () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});

});



