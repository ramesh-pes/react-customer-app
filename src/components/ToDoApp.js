import React from 'react';

export default class TodoApp extends React.Component {
  state = { items: [], text: '' ,sum:0};
  constructor(_props) {
    super(_props);  
    //Another approach to handle this 
    // this.handleChange = this.handleChange.bind(this); // line handles this pointer
    this.handleSubmit = this.handleSubmit.bind(this); // line handles this pointer
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
    <h4>Sum is {this.state.sum}</h4>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input type="number" 
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    
    
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      sum:this.state.sum+Number(newItem.text),
      text: ''

    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
