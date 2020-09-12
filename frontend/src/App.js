import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home"
import Dashboard from "./components/pages/Dashboard/Dashboard"
import Income from "./components/pages/Dashboard/Income"
import Summary from "./components/pages/Dashboard/Summary"
import Profile from "./components/pages/Dashboard/Profile"

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/summary" component={Summary}/>
      <Route path="/dashboard/income" component={Income} />
      <Route path="/dashboard/profile" component={Profile} />
    </Router>
  );
}

export default App;