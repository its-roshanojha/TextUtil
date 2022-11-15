import React, {useState} from 'react';

export default function TextForm(props) {
    const handleLowClick = () => {
        // console.log('uppercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleUpClick = () => {
        // console.log('uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");

    }
    const handleOnChange = (event) => {
        // console.log('onChange');
        setText(event.target.value);
    }
    const handleClearText = () => {
        // console.log('uppercase was clicked' + text);
        let newText = "";
        setText(newText);
        props.showAlert("Your Text is cleared!","success");

    }

    const handleCopyText = () => {
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("your Text has been copied!","success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed!","success");

    }

    
    const [text, setText] = useState('enter text here');
    // wrong way to set the state
    // text = 'new text';  
    // // correct way to set the state
    // setText('new Text');


    return (
        <>
        <div className='container'style={{backgroundColor:props.mode === 'dark'?'#272c30':'white'}}>
        <h1 style={{color:props.mode === 'dark'?'white':'#272c30'}}>{props.heading }</h1>
        <div className = "mb-3">
            <textarea className = "form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#272c30':'white', color:props.mode === 'dark'?'white':'#272c30' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Conver to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>



        </div>
        <div className="container my-4" style={{backgroundColor:props.mode === 'dark'?'#272c30':'white',color:props.mode === 'dark'?'white':'#272c30'}}>
            <h1> Your Text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the text box above to Preview it here!'}</p>
        </div>
        </>
    )
}