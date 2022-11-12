import React, { useState } from "react";

export default function InputBox(props) {
    const handleOnClickToUp = () => {
        if (text.length !== 0) {
            setText(text.toUpperCase());
            props.showAlert('Your text has been converted to uppercase', 'success')

        }
        else {
            props.showAlert('Please enter something in the input section!', 'warning')
        }
    }
    const handleOnClickToLo = () => {
        if (text.length !== 0) {
            props.showAlert('Your text has been converted to lowercase', 'success')
            return setText(text.toLowerCase());
        }
        else {
            props.showAlert('Please enter something in the input section!', 'warning')
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleOnClickClear = () => {
        if (text.length !== 0) {
            props.showAlert('Your text has been cleared.', 'success')
            return setText('')
        }
        else {
            props.showAlert('There is no any word to clear!!', 'warning')
        }
    }
    // copy text function 
    const handleOnCopyText = () => {
        if (text.length > 0) {
            let textBox = document.querySelector('#textBox');
            textBox.select();
            navigator.clipboard.writeText(textBox.value)
            props.showAlert('Your text has beed copied to clipboard', 'success')
        }
        else {
            props.showAlert('Enter your paragraph to copy!!', 'warning')
        }
    }


    function wordCount() {
        if (text.length !== 0) {
            return (text.split(" ").length);
        }
        else {
            return 0;
        }
    }
    function textPreview() {
        if (text.length !== 0) {
            return <p className="text-secondary">{text}</p>
        }
        else {
            return <p className="text-secondary">Text preview here...</p>
        }
    }
    const [text, setText] = useState("");
    return (

        <>
            <div className="container">
                <div className="container text-center mt-2" ><h2 style={{ color: props.mode === 'light' ? '#006d77' : 'white' }}>Welcome To The TextUtils!</h2></div>
                <div className="mb-3">
                    <label htmlFor="textBox" className="form-label mx-2 text-success">{props.textAreaHeading}</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="6" placeholder="Start typing, or copy and paste your text here.." style={{ backgroundColor: props.mode === 'light' ? 'white' : '#3b4154b8', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <div >
                    <button className="btn btn-primary mx-2" onClick={handleOnClickToUp}>UpperCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleOnClickToLo}>LowerCase</button>
                    <button className="btn btn-warning mx-2" onClick={handleOnClickClear}>Clear All Text</button>
                    <button className="btn btn-secondary mx-2" onClick={handleOnCopyText}>Copy Text</button>
                </div>
            </div>
            <div className="container my-3">
                <h5 className="text-secondary"><span className="text-primary">{wordCount()}</span> words and <span className="text-primary">{text.length}</span> characters</h5 >
                <p className="text-secondary">Read this paragraph in <span className="text-primary">{(0.003 * text.length).toFixed(2)} minutes</span></p>
            </div>
            <div className="container">
                <h2>Text Preview :</h2>
                {textPreview()}
            </div>


        </>
    )
}
