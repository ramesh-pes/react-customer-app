// import React, { Component } from 'react';

// const withUser =WrappedComponent=>{
//     const user='RAMEHS S';
//     return props=> <WrappedComponent name={user}{...props}/>
// }
// class HocExample extends Component {
//     constructor(props) {
//         super(props);
//     }
    
//     render() {
//         return (
//             <div>
//                 <p>My name is {this.props.name}</p>
//             </div>
//         );
//     }
// }

// export default withUser(HocExample);



// ===========================================================================================================

// import React, { Component } from 'react';
// function FancyBorder(props) {
//   return (
//     <div style={{color: props.color, backgroundColor: 'grey'}} >
//       {props.children}
//     </div>
//   );
// }

// export default function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         Welcome
//       </h1>
//       <p className="Dialog-message">
//         Thank you for visiting our spacecraft!
//       </p>
//     </FancyBorder>
//   );
// }


// ===========================================================================================================

import React, { Component } from 'react';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

export default class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
  return (
    <div>
        
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <button>{this.context}</button>
  }
}