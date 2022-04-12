import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    // console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
  };

  const handleUpChange = (event) => {
    // console.log("Change is happening");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("The text has been copied to your Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleUpChange}
            placeholder="Enter your text here"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
          <button disabled={text.length===0} style={{cursor:(text.length===0)?"not-allowed":"default"}}className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0} style={{cursor:(text.length===0)?"not-allowed":"default"}}className="btn btn-primary mx-1" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button disabled={text.length===0} style={{cursor:(text.length===0)?"not-allowed":"default"}}className="btn btn-primary mx-1" onClick={handleClear}>
            Clear Text
          </button>
          <button disabled={text.length===0} style={{cursor:(text.length===0)?"not-allowed":"default"}}className="btn btn-primary mx-1" onClick={handleCopy}>
            {" "}
            Copy Text
          </button>
          <button disabled={text.length===0} style={{cursor:(text.length===0)?"not-allowed":"default"}}className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
            Remove extra spaces
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h6>Your text summary</h6>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}{" "}
          characters
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
