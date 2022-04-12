import React from "react";
// import PropTypes from "prop-types";

export default function About(props) {

  let myStyle = {
    color: props.mode === "dark"?"white":"black",
    backgroundColor: props.mode === "dark"?"#373e44":"white"
  }

  return (
    <div
      className="container"
      style={myStyle}
    >
      <h2>About Us</h2>
      <div
        className="accordion"
        id="accordionExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <code>
                <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa provident, repellat delectus molestiae magnam atque, velit optio at quia obcaecati doloremque autem voluptatum repellendus minima soluta. Assumenda quam amet aut similique asperiores dolores nam et maiores dignissimos labore nobis vitae obcaecati alias id ipsa, veritatis ut, quod facilis. Autem architecto consectetur hic voluptatum ipsa vero iusto minus alias! Tempore, quam! {" "}
              </code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free to Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <code>
                <strong>Lorem ipsum, dolor sit amet consectetur adipisicing.</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus voluptatem obcaecati illum voluptate quisquam, soluta voluptatibus aut at, quo fugit temporibus aliquid a quis ducimus ipsam nostrum numquam? Nam eos sed libero quisquam iusto harum quas, a illum corporis? Asperiores, quae quidem! Repellendus magnam facere hic dolore. Molestias libero, atque fugiat consectetur odit corporis doloremque dolorem hic provident praesentium at.
              </code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Browser-Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <code>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                .accordion-body, though the transition does limit overflow.
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
