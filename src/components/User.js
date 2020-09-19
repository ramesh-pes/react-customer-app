import React, { Component } from "react";

class User extends Component {
  name = "test";
  constructor(props) {
    super(props);
    // this.name = props.name;
    this.state = { name: props.name };
  }

  render() {
    return (
      <div>
        <h4>Name:{this.state.name}</h4>
          <button onClick={this.updateName}>Name update</button>
      </div>
    );
  }
  updateName = () => {
    this.setState({ name: "india" });
    alert(this.state.name);
  };
}

export default User;
