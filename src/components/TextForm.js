import React, {useState} from 'react';

export default function TextForm(props) {
    const handleLowClick = () => {
        // console.log('uppercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleUpClick = () => {
        // console.log('uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log('onChange');
        setText(event.target.value);
    }
    const handleClearText = () => {
        // console.log('uppercase was clicked' + text);
        let newText = "";
        setText(newText);
    }

    
    const [text, setText] = useState('enter text here');
    // wrong way to set the state
    // text = 'new text';  
    // // correct way to set the state
    // setText('new Text');


    return (
        <>
        <div className='container'>
        <h1>{props.heading }</h1>
        <div className = "mb-3">
            <textarea className = "form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Conver to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>


        </div>
        <div className="container my-4">
            <h1> Your Text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}