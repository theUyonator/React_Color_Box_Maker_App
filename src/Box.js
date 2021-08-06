import React from "react";
import "./Box.css"

const Box = ({ id, width, height, backgroundColor, remove }) => {
   return ( 
            <>
                <div 
                    className="Box" 
                    style={{
                        width: `${width}em`,
                        height: `${height}em`,
                        backgroundColor: backgroundColor
                    }}>
                    
                 </div>
                <button 
                    className="Box-btn" 
                    onClick={remove}>X</button>
            </>
   )
}

Box.defaultProps = {
    backgroundColor: "yellow",
    width: 10,
    height: 10
};

export default Box;