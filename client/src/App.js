import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Save from "./pages/Save";
import Nav from "./components/Nav";
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Save} />
          <Route exact path="/saved/:id" component={Save} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
