/* I will be passing in several functions needed to handle when the user clicks a number,  
 * an operator, or submits the equation by pressing the "equals" button */

import React from "react";
import Button from "./Button.jsx";



function ButtonGrid({handleClick, handleOperation, handleSubmit, handleFunction}) {

return(
    <>
                <div className="row-lg-12">
                    <Button className="col-md-3 number-button" role="button" name={"7"} value={7} handleClick={handleClick} />
                    <Button className="col-md-3 number-button" role="button" name={"8"} value={8} handleClick={handleClick} />
                    <Button className="col-md-3 number-button" role="button" name={"9"} value={9} handleClick={handleClick} />
                    <Button 
                    className="col-md-3 function-buttons" 
                    role="button" 
                    name={"+"} 
                    value={"+"} 
                    handleClick={() => handleOperation("+")} 
                    />
                </div>
                <div className="row-lg-12">
                    <Button className="col-md-3 number-button" role="button" name={"4"} value={4} handleClick={handleClick} />
                    <Button className="col-md-3 number-button" role="button" name={"5"} value={5} handleClick={handleClick} />
                    <Button className="col-md-3 number-button" role="button" name={"6"} value={6} handleClick={handleClick} />
                    <Button 
                    className="col-md-3 function-buttons" 
                    role="button" 
                    name={"-"} 
                    value={"-"} 
                    handleClick={() => handleOperation("-")} 
                    />
                </div>
                <div className="row-lg-12">
                    <Button className="col-md-3 number-button" role="button" name={"1"} value={1} handleClick={handleClick} />
                    <Button className="col-md-3 number-button" role="button" name={"2"} value={2} handleClick={handleClick} />
                    <Button className="col-md-3 number-button" role="button" name={"3"} value={3} handleClick={handleClick} />
                    <Button 
                    className="col-md-3 function-buttons" 
                    role="button" 
                    name={"x"} 
                    value={"*"} 
                    handleClick={() => handleOperation("*")} 
                    />
                </div>  
                <div className="row-lg-12">
                    <Button className="col-md-3 function-buttons" role="button" name={"."} value={"."} handleClick={handleClick} />
                    <Button className="col-md-3 number-button" role="button" name={"0"} value={0} handleClick={handleClick} />
                    <Button className="col-md-3 function-buttons" 
                    role="button" 
                    name={"%"} 
                    value={"%"} 
                    handleClick={handleFunction} 
                    />
                    <Button 
                    className="col-md-3 function-buttons" 
                    role="button" 
                    name={"/"} 
                    value={"/"} 
                    handleClick={() => handleOperation("/")} 
                    />
                </div> 
                <div className="row-lg-12">
                    <Button 
                    className="col-md-3 function-buttons" 
                    role="button" 
                    name={"C"} 
                    value={"C"} 
                    handleClick={handleFunction} 
                    />
                    <Button 
                    className="col-md-3 function-buttons" 
                    role="button" 
                    name={"("} 
                    value={"("} 
                    handleClick={handleFunction} 
                    />
                    <Button className="col-md-3 function-buttons" 
                    role="button" 
                    name={")"} 
                    value={")"} 
                    handleClick={handleFunction} 
                    />
                    <Button 
                    className="col-md-3 function-buttons" 
                    role="button" 
                    name={"="} 
                    value={"="} 
                    handleClick={handleSubmit} 
                    />
                </div>
            </>
)

}

export default ButtonGrid;