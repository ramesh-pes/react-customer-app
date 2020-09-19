import React, { useContext, createContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomerApp from "./containers/CustomerApp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import About from "./containers/About";
import Customer from "./containers/Customer";
import CustomerAdd from "./containers/CustomerADD";
import CustomerEdit from "./containers/CustomerEdit";
import Calculator from "./containers/Temperature";
import Maths from "./containers/Maths";
import HocExample from "./containers/HocExample";



function App() {
  return (
    <ProvideAuth>q
    <Router>
      <div style={{ marginLeft: 30 }}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute  exact path="/home">
            <Home/>
          </PrivateRoute>
          
          <PrivateRoute exact path="/about" component={About} ><About/></PrivateRoute>
          <PrivateRoute exact path="/customer-app" component={CustomerApp} />
          <PrivateRoute exact path="/customer" component={Customer} />
          <PrivateRoute exact path="/customer/add" component={CustomerAdd} />
          <PrivateRoute exact path="/customer/edit/:id" component={CustomerEdit} />
          <Route exact path="/temperature" component={Calculator} />
          <Route exact path="/maths" component={Maths} />
          <Route exact path="/hocexample" component={HocExample} />
        </Switch>
      </div>
    </Router>
    </ProvideAuth>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState('user');
  useEffect(()=>{
     console.log("first Call");
     setUser(localStorage.getItem('user'));
  })
  const signin = cb => {
    return fakeAuth.signin(() => {
       console.log("signin");
      setUser("user");
      localStorage.setItem('user','admin@yara.com');
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      localStorage.removeItem('user');
      setUser(null);
      cb();
    });
  };
  //setUser(localStorage.getItem('user'));
 // var loginUser = localStorage.getItem('user');
  return {
    user,
    signin,
    signout
  };
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();
//   let auth = useAuth();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     auth.signin(() => {
//       history.replace(from);
//     });
//   };
//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }
export default App;


// export default function App() {
//   return (
//     <ProvideAuth>
//       <Router>
//         <div>
//           <AuthButton />

//           <ul>
//             <li>
//               <Link to="/public">Public Page</Link>
//             </li>
//             <li>
//               <Link to="/protected">Protected Page</Link>
//             </li>
//           </ul>

//           <Switch>
//             <Route path="/public">
//               <PublicPage />
//             </Route>
//             <Route path="/login">
//               <LoginPage />
//             </Route>
//             <PrivateRoute path="/protected">
//               <ProtectedPage />
//             </PrivateRoute>
//           </Switch>
//         </div>
//       </Router>
//     </ProvideAuth>
//   );
// }

// const fakeAuth = {
//   isAuthenticated: false,
//   signin(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// /** For more details on
//  * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
//  * refer to: https://usehooks.com/useAuth/
//  */
// const authContext = createContext();

// function ProvideAuth({ children }) {
//   const auth = useProvideAuth();
//   return (
//     <authContext.Provider value={auth}>
//       {children}
//     </authContext.Provider>
//   );
// }

// function useAuth() {
//   return useContext(authContext);
// }

// function useProvideAuth() {
//   const [user, setUser] = useState('user');
//   useEffect(()=>{
//      console.log("first Call");
//      setUser(localStorage.getItem('user'));
//   })
//   const signin = cb => {
//     return fakeAuth.signin(() => {
//        console.log("signin");
//       setUser("user");
//       localStorage.setItem('user','admin@yara.com');
//       cb();
//     });
//   };

//   const signout = cb => {
//     return fakeAuth.signout(() => {
//       localStorage.removeItem('user');
//       setUser(null);
//       cb();
//     });
//   };
//   //setUser(localStorage.getItem('user'));
//  // var loginUser = localStorage.getItem('user');
//   return {
//     user,
//     signin,
//     signout
//   };
// }

// function AuthButton() {
//   let history = useHistory();
//   let auth = useAuth();

//   return auth.user ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           auth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }) {
//   let auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.user ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// function PublicPage() {
//   return <h3>Public</h3>;
// }

// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();
//   let auth = useAuth();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     auth.signin(() => {
//       history.replace(from);
//     });
//   };
//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }

// /*
// function App() {
//   return (
//     <Router>
//     <div style={{marginLeft:'20px',marginRight:'20px',}}>
//        <Switch>
//           <Route exact path='/' component={Login} />
//           <Route exact path='/login' component={Login} />
//           <Route exact path='/customer' component={Customer} />
//           <Route exact path='/customer/add' component={CustomerAdd} />
//           <Route exact path='/customer/edit/:id' component={CustomerAdd} />
//           <Route exact path='/temperature' component={Temperature} />
//           <Route exact path='/customer-app' component={CustomerApp} />
//           <Route exact path='/home' component={Home} />
//           <Route exact path='/about' component={About} />
//        </Switch>
//     </div>
//  </Router>
//   );
// }
// */
