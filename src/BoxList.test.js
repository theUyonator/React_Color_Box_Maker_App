import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

describe("<BoxList /> rendering", () => {

it("renders correctly without crashing", () => {
    render(<BoxList />)
});

it("matches snapshot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

});

describe("Adds a new box and can remove a specific box", () => {
    it("can add a new box", function() {
        const { getByLabelText, queryByText } = render(<BoxList />);
      
        // no boxes yet
        expect(queryByText("X")).not.toBeInTheDocument();
      
        const widthInput = getByLabelText("Width:");
        const heightInput = getByLabelText("Height:");
        const backgroundcolorInput = getByLabelText("Background Color:");
        const submitBtn = queryByText("Add a new box!")
      
        // fill out the form
        fireEvent.change(widthInput, { target: { value: 6 }});
        fireEvent.change(heightInput, { target: { value: 6 }});
        fireEvent.change(backgroundcolorInput, { target: { value: "lilac" }});
        fireEvent.click(submitBtn);
      
        // box exists!
        // expect to see a box
        const removeButton = queryByText("X");
        expect(removeButton).toBeInTheDocument();
        expect(removeButton.previousSibling).toHaveStyle(`
        width: 6em;
        height: 6em;
        background-color: lilac;
      `);
      });

    it("can remove a box", function(){

        const { getByLabelText, queryByText } = render(<BoxList />);
      
        const widthInput = getByLabelText("Width:");
        const heightInput = getByLabelText("Height:");
        const backgroundcolorInput = getByLabelText("Background Color:");
        const submitBtn = queryByText("Add a new box!")
      
        // fill out the form
        fireEvent.change(widthInput, { target: { value: 6 }});
        fireEvent.change(heightInput, { target: { value: 6 }});
        fireEvent.change(backgroundcolorInput, { target: { value: "lilac" }});
        fireEvent.click(submitBtn);

        // expect to see a box
        const removeButton = queryByText("X");
        expect(removeButton).toBeInTheDocument();

        // Click the remove btn and expect it not to be in the document anymore
        fireEvent.click(removeButton);
        expect(removeButton).not.toBeInTheDocument();

    })
    
});

