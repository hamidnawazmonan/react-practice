import React, {useState} from 'react'

export default function
    TextForm(props) {

        const handleUPClick = ()=>{
            let newText = text.toUpperCase();
            setText(newText);

        }
        const handleLowerClick = ()=>{
            let newText=text.toLowerCase();
            setText(newText);
        }
       const handleOnChange = (event)=>{
        setText(event.target.value);

       }
       const [text, setText] = useState("Enter Text Here...");
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUPClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
        </div>
        <div className='container my-3'>
        <h5>Your text summary</h5>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h5>Preview</h5>
        <p>{text}</p>
        </div>
        </>
    )
}
