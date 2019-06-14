import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute.js";
import NavBar from './components/NavBar.js'
import Login from './components/Login.js';
import Register from './components/Register.js';
import JokeList from './components/JokeList.js';
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute exact path="/" component={JokeList} />
      </div>
    );
  }
}

export default App;
