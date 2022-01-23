import React, { Component } from "react";
//import styled from "styled-components";
import Aux from "../../../hoc/Auxilliary";
//import Radium from "radium";
import PropTypes from "prop-types";
import "./Person.css";

//Another component syntax using styled-component library - here I'm making this component to style my Person component
// styled is object of styled-component library and all HTML Elements are methods of styled object
//which returns Custom component

// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #ccc;
//   box-shadow: 0 2px 3px #eee;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] Rendering...");
    return (
      //<div className="Person" style={style}>
      //<StyledDiv>
      <Aux>
        {this.props.isAuth ? <p> Authenticated!!!</p> : <p>Please Login :)</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and {this.props.age} years old!!!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          //ref={(inputEl) => (this.inputElement = inputEl)}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
      //</StyledDiv>
      //</div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func,
};

//export default Radium(Person);
export default Person;
