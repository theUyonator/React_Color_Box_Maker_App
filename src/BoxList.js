import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";


const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const remove = (id) => {
      setBoxes(boxes.filter(box => box.id !== id));
  };

  const renderBoxes = () => {
    return (
        <>
        {boxes.map(box => (
          <div key={box.id}>
            <Box width={box.width} height={box.height} backgroundColor={box.backgroundColor} remove={evt => remove(box.id)} />
          </div>
        ))}
        </>
    
    );
  };
  // end renderBoxes

  /** Add new box object to cart. */
  const addBox = box => {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  };
  // end addBox

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
};
// end

export default BoxList;
