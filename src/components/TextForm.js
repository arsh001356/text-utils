import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("button clicked" + text)
    let newText = text.toUpperCase();

    setText(newText)
  }
  const handleOnChange = (event) => {
    // console.log("onChange")
    setText(event.target.value)

  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText)
  }

  const [text, setText] = useState("enter text here!");
  return (
    <>
      <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1 >{props.heading}</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#042743" }}></textarea>



        <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button type="button" className="btn btn-success mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
        <button type="button" className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-2" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> This takes {0.008 * text.split(" ").length} minutes to read </p>
        <p>{text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length} sentences</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text to preview"}</p>

      </div>
    </>
  )
}
