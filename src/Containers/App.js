import React, { Component } from "react";
//import Radium, { StyleRoot } from "radium";
import Cockpit from "../Components/Cockpit/Cockpit";
import "./App.css";
import Persons from "../Components/Persons/Persons";
import WithClass from "../hoc/WithClass";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
  }

  state = {
    personArray: [
      { id: "00asd", name: "Max", age: 28 },
      { id: "01affe", name: "Manu", age: 29 },
      { id: "02vevv", name: "Stephenie", age: 26 },
    ],
    showPerson: false,
    changeCounter: 0,
    isAuthenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  togglePersonHandler = () => {
    const setShowPerson = this.state.showPerson;
    this.setState({ showPerson: !setShowPerson });
  };

  deleteNameHandler = (personIndex) => {
    //const updatedPersonArray = this.state.personArray;
    const updatedPersonArray = [...this.state.personArray];
    updatedPersonArray.splice(personIndex, 1);
    this.setState({ personArray: updatedPersonArray });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.personArray.findIndex((p) => {
      return p.id === id;
    });
    const personObject = { ...this.state.personArray[personIndex] };
    personObject.name = event.target.value;
    const updatedPersonArray = [...this.state.personArray];
    updatedPersonArray[personIndex] = personObject;

    // Whenever we change the state depending upon previous state like incrementation
    // we use below defined setState syntax. Because React calls all setStates randomly so
    // this.state might be unexpected as state might get change by some other setState before
    // this setState
    this.setState((prevState, props) => {
      return {
        personArray: updatedPersonArray,
        //changeCounter: this.state.changeCounter + 1,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  loginHandler = () => {
    this.setState({ isAuthenticated: true });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <Persons
          personArray={this.state.personArray}
          clicked={this.deleteNameHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.isAuthenticated}
        />
      );
    }

    return (
      <WithClass classes="App">
        <Cockpit
          title={this.props.appTitle}
          personArrayLength={this.state.personArray.length}
          showPerson={this.state.showPerson}
          clicked={this.togglePersonHandler}
          login={() => this.loginHandler()}
        />
        {persons}
      </WithClass>
    );
  }
}

//export default Radium(App);
export default App;
