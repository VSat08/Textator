import React, { useState } from 'react'


export default function TextForm(props) {
    const clearText = () => {
        // console.log('Upper Case was clicked' + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared !",'success');
    }
    const copyText = () => {
        var temp = document.getElementById('mytext');
        temp.select();
        navigator.clipboard.writeText(temp.value);
        props.showAlert("Text Copied !",'success');
    }

    const toUpperCase = () => {
        // console.log('Upper Case was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case !",'warning');
    }
    const toLowerCase = () => {
        // console.log('Upper Case was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case !",'info');
        
    }
    const tosentenseCase = () => {
        // console.log('Upper Case was clicked' + text);
        let newText = text.charAt(0).toUpperCase() + text.substring(1, text.length);
        setText(newText);
        props.showAlert("Converted to Sentence Case !",'primary');
    }
    const invertCase = () => {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            result += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
            
        }
        setText(result);
        props.showAlert("Converted to Invert Case !",'danger');
    };


    const afterchange = (event) => {
        console.log('On Change');
        setText(event.target.value)
    }
    const [text, setText] = useState("");

    return (
        <>
            <div className='container'>
                <h1 className='display-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mytext" rows="8" value={text} onChange={afterchange} placeholder='Enter Text Here...'></textarea>
                </div>

                <button disabled={text.length === 0} className="btn btn-secondary " onClick={clearText}>Clear Text</button>

                <button disabled={text.length === 0} className="btn btn-warning mx-2 my-2" onClick={copyText}>Copy Text</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={toUpperCase}>Convert To UpperCase</button>

                <button disabled={text.length === 0} className="btn btn-success mx-2" onClick={toLowerCase}>Convert To LowerCase</button>

                <button disabled={text.length === 0} className="btn btn-warning mx-2 my-2" onClick={tosentenseCase}>Convert To Sentence Case</button>

                <button disabled={text.length === 0} className="btn btn-danger mx-2 my-2" onClick={invertCase}>Invert Case</button>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-8">
                        <h3 className='display-5'>Preview</h3>
                        <p className='lead'>{text}</p>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-4">
                        <div className="conatiner my-4">
                            <h1 className='display-5'>Your Text Summary</h1>
                            <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words, {text.length} characters</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
