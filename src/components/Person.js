import React, { useState } from "react";

var person1 = <h3>Person 1 from person component</h3>;
export default function Person(props) {
  const [name, setName] = useState(props.name);
  var updates = () => {
    setName("India");
    alert(props.name);
  };
  return (
    <div>
      {person1}
      <h4>
        Name: {name} and email: {props.email}
      </h4>
      <button onClick={updates}>Name update</button>
    </div>
  );
}

export function Rama() {
  return <h4>Name: Ramesh S</h4>;
}
