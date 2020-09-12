import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home"
import Dashboard from "./components/pages/Dashboard/Dashboard"

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;