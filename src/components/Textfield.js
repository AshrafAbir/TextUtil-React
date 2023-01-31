import React, { useState } from 'react'

export default function Textfield(props) {
    // taking text as a state variable
    const [text, setText] = useState("");


    // Function needed to hndle any text area 
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // Function for Convert To Lower Case 
    const handleLoClick = () => {
        const nText = text.toLocaleLowerCase();
        setText(nText);
        props.showAlert1("Sucessfully converted to Lower Case " , "success");
    }

    // Function for Convert To Upper Case
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert1("Sucessfully converted to Upper Case " , "success");
    }
     
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value); 
        props.showAlert1("Sucessfully cpied " , "success");

    }
    const handleExtraSpace = ()=>{

        const extraSpace = text.split(/[ ]+/);
        setText(extraSpace.join(" "));   
        props.showAlert1("Sucessfully removed extra space " , "success");

    }
    return (
        <>
            <div className='container1' style ={{color: props.mode1 === 'dark' ? 'white' : '#042743'}}  >
                {/* Using props from App.js by jsx */}
                <h1> {props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style ={{color: props.mode1 === 'dark' ? 'white' : '#042743' ,
                     backgroundColor : props.mode1 === 'dark' ? 'grey' : 'white' }} id="myBox" rows="5"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={handleUpClick}>ConvertToUpperCase</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleLoClick}>ConvertToLowerCase</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>


            </div>

            <div className="Container2" style ={{color: props.mode1 === 'dark' ? 'white' : '#042743'  }} >
                <br />
                <h1>Your Text Summary</h1>
                <h4>You have {text.split(" ").length} words and {text.length} charecters</h4>
                <h4>Need {0.008 * text.length} time to finish </h4>
                <h1>Preview</h1>
                <p>{text.length > 0 ? text : "Write in the Text filed" }</p>

            </div>
        </>
    )
}
