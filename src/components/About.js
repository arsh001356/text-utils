import React, { useState } from 'react'



export default function About(props) {



  return (



    <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
      <h2 className='my-2' style={{ color: props.mode === "light" ? "black" : "white" }}>About Us</h2>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#042743" }}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#042743" }}>
              About Us
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{ color: props.mode === "light" ? "black" : "white" }}>
            <div className="accordion-body" style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#042743" }}>
              Welcome to TextUtils, your one-stop destination for all your text processing needs! We are a passionate team of developers and language enthusiasts dedicated to providing powerful, easy-to-use tools that help you manipulate and analyze text efficiently. <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#042743" }} >
              Our Mission
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#042743" }}>
              At TextUtils, our mission is to simplify the complexities of text processing for everyone. Whether you're a student, writer, researcher, or developer, our tools are designed to save you time and effort by offering a range of functionalities, from basic text transformations to advanced linguistic analysis. <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#042743" }}>
              What We Offer
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
            <div className="accordion-body" style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#042743" }}>

              Text Conversion Tools: Convert text to different cases (uppercase, lowercase, title case), remove extra spaces, and format text effortlessly.
              String Manipulation: Find and replace text, extract specific parts of a string, and more.
              Text Analysis: Analyze word frequency, character count, readability, and other linguistic metrics. <code>.accordion-body</code>, though the transition does limit overflow.

            </div>
          </div>
        </div>
      </div>



    </div>

  )
}
