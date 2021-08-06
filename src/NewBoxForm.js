import React, { useState } from "react";
import "./NewBoxForm.css";

/** Form for creating a new box to add to the box list.
 *
 * Has state for the width, height and background color  of the box; on submission,
 * sends {width, height, backgroundColro} to fn rec'd from parent.
 *
 */

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { width: 0, height: 0, backgroundColor: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {width, height, backgroundColor} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  /** render form */

  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <label className="NewBoxForm-label" htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        className="NewBoxForm-input"
        onChange={handleChange}
      />

      <label className="NewBoxForm-label" htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        className="NewBoxForm-input"
        onChange={handleChange}
      />

    <label className="NewBoxForm-label" htmlFor="backgroundColor">Background Color:</label>
      <input
        type="text"
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        className="NewBoxForm-input"
        onChange={handleChange}
      />

      <button id="newBoxBtn" className="NewBoxForm-btn">Add a new box!</button>
    </form>
  );
};

export default NewBoxForm;