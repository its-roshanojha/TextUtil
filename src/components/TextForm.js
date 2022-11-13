import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log('onChange');
        setText(event.target.value);
    }
    const [text, setText] = useState('enter text here');
    // wrong way to set the state
    // text = 'new text';  
    // // correct way to set the state
    // setText('new Text');

    return (
        <div>
        <div className = "mb-3">
            <h1>{props.heading }</h1>
            <textarea className = "form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Conver to upper case</button>
        </div>
    )
}