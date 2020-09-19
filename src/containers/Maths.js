import React, { Component } from "react";
import Menu from '../components/Menu'

class Sum extends Component {
  constructor(props) {
    super(props);
    this.state={
        a:props.a,
        b:props.b
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
        [e.target.name]:e.target.value
    })
    this.props.onValueChange(e.target.value,e.target.name);
  };
  render() {
    return (
      <div>
        <input
            name="a"
          type="number"
          value={this.props.a}
          onChange={this.handleChange}
        />
        <br />
        <input
        name="b"
          type="number"
          value={this.props.b}
          onChange={this.handleChange}
        />
        <br />
        <h4> Sum is : {this.props.a + this.props.b}</h4>
      </div>
    );
  }
}
class Diff extends Component {}
class Mult extends Component {}

class Maths extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 6,
      b: 4,
    };
  }
  handleChange=(val,name)=>{
      this.setState({
          name:val
      })
  }

  render() {
    return (
      <div>
        <Menu />
        <h3>Maths Example</h3>
        <Sum a={this.state.a} b={this.state.b} onValueChange={this.handleChange} />
      </div>
    );
  }
}

export default Maths;
