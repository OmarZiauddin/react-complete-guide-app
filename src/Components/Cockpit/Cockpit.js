import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import "./Cockpit.css";

// This StyledButton is a component (Custom; either functional or class-based) made using styled-components library
// we will use StyledButton component instead of button HTML element
// as we have styled it using styled-component library

const StyledButton = styled.button`
  background-color: ${(props) => (props.check ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.check ? "salmon" : "lightgreen")};
    color: black;
  }
`;
//This StyledButton has become a custom component and we can use it as HTML Element (button)
// The advantage is that styled-component library allows to add javaScript with CSS (as above)
// which allows dynamic styling

const cockpit = (props) => {
  const toggleBtnref = useRef(null);

  useEffect(() => {
    //Http Requests...
    setTimeout(() => {
      alert("Saved Data to Cloud");
    }, 1000);
    toggleBtnref.current.click();
    return () => {
      console.log(" [cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log(" [cockpit.js]  cleanup work in 2nd useEffect");
    };
  });

  let classes = [];
  if (props.personArrayLength <= 2) {
    classes.push("red");
  }
  if (props.personArrayLength <= 1) {
    classes.push("bold");
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}> This is really working !!! </p>
      <StyledButton
        ref={toggleBtnref}
        check={props.showPerson}
        onClick={() => props.clicked()}
      >
        Toggle Person
      </StyledButton>
      <StyledButton onClick={props.login}>Log in</StyledButton>
    </div>
  );
};

export default React.memo(cockpit);
