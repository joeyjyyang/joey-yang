import React, { Component } from "react";
import "./App.css";
import {} from "./App.slice";
import {} from "./components/index";
import {} from "antd";
import {} from "react-router-dom";
import { connect } from "react-redux";

class AppBase extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppBase);
export default App;
