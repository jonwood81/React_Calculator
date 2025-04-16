/* I will be passing in several functions needed to handle when the user clicks a number,  
 * an operator, or submits the equation by pressing the "equals" button */

import React from "react";
import Button from "./Button.jsx";


function ButtonGrid({handleEvent, handleOperation, handleSubmit, handleFunction}) {

return(
    <>
                <div className="row-lg-12">
                    <Button className="col-md-3 number-button" role="button" name={"7"} value={7} handleClick={handleEvent} />
                    <Button className="col-md-3 number-button" role="button" name={"8"} value={8} handleClick={handleEvent} />
                    <Button className="col-md-3 number-button" role="button" name={"9"} value={9} handleClick={handleEvent} />
                    <Button 
                    className="col-md-3 function-buttons" 
                    role="button" 
                    name={"+"} 
                    value={"+"} 
                    handleClick={handleOperation} 
                    />
                </div>
                <div className="row-lg-12">
                    <Button className="col-md-3 number-button" role="button" name={"4"} value={4} handleClick={handleEvent} />
                    <Button className="col-md-3 number-button" role="button" name={"5"} value={5} handleClick={handleEvent} />
                    <Button className="col-md-3 number-button" role="button" name={"6"} value={6} handleClick={handleEvent} />
                    <Button 
                    className="col-md-3 function-buttons" 
                    role="button" 
                    name={"-"} 
                    value={"-"} 
                    handleClick={handleOperation} 
                    />
                </div>
                <div className="row-lg-12">
                    <Button className="col-md-3 number-button" role="button" name={"1"} value={1} handleClick={handleEvent} />
                    <Button className="col-md-3 number-button" role="button" name={"2"} value={2} handleClick={handleEvent} />
                    <Button className="col-md-3 number-button" role="button" name={"3"} value={3} handleClick={handleEvent} />
                    <Button 
                    className="col-md-3 function-buttons" 
                    role="button" 
                    name={"x"} 
                    value={"*"} 
                    handleClick={handleEvent} 
                    />
                </div>  
                <div className="row-lg-12">
                    <Button className="col-md-3 function-buttons" role="button" name={"C"} value={"C"} handleClick={handleEvent} />
                    <Button className="col-md-3 number-button" role="button" name={"0"} value={0} handleClick={handleEvent} />
                    <Button className="col-md-3 function-buttons" role="button" name={"="} value={"="} handleClick={handleSubmit} />
                    <Button 
                    className="col-md-3 function-buttons" 
                    role="button" 
                    name={"/"} 
                    value={"/"} 
                    handleClick={handleEvent} 
                    />
                </div> 
                <div className="row-lg-12">
                    <Button className="col-md-3 function-buttons" 
                    role="button" 
                    name={"("} 
                    value={"("} 
                    handleClick={handleFunction} />
                    <Button 
                    className="col-md-3 function-buttons" 
                    role="button" 
                    name={")"} 
                    value={")"} 
                    handleClick={handleFunction} />
                    <Button className="col-md-3 function-buttons" 
                    role="button" 
                    name={"%"} 
                    value={"%"} 
                    handleClick={handleFunction} 
                    />
                    <Button 
                    className="col-md-3 number-button" 
                    role="button" 
                    name={"."} 
                    value={"."} 
                    handleClick={handleEvent} 
                    />
                </div>
            </>
)

}

export default ButtonGrid;