import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    if (
      nextProps.personArray !== this.props.personArray ||
      nextProps.isAuthenticated !== this.props.isAuthenticated
    ) {
      return true;
    } else {
      return false;
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js getSnapshotBeforeUpdate");
    return { message: "SnapShot!!!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentdidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    return this.props.personArray.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
          isAuth={this.props.isAuthenticated}
        />
      );
    });
  }
}

export default Persons;
