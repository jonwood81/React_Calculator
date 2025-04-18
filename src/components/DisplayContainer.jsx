import { useState } from "react";


function DisplayContainer({inputDisplay, compResult, deleteChar, solutionRequested }) {

    //let displayData = inputDisplay.join("");
    const [displaySolution, setDisplaySolution] = useState(false);

    function displaySolController(solutionRequested){
        (solutionRequested === true) && setDisplaySolution(true);
    }

    return (
            <div className="row g-0 m-1">
                {solutionRequested? 
                                    <div className="col-sm-6 col-md-9 border bg-light rounded display">
                                        {inputDisplay}<span className="solution">{compResult}</span>
                                    </div>
                                    :
                                    <div className="col-sm-6 col-md-9 border bg-light rounded display">
                                        {inputDisplay}
                                    </div>
                                    }
                <div className="col-2 col-md-3 p-1">
                    <button 
                    className="back-btn aligncontent"
                    onClick={deleteChar}
                    >
                        <i className="bi bi-backspace centercontent"></i>
                    </button>
                </div>
            </div>
    )
};

export default DisplayContainer;