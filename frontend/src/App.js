import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home"
import Dashboard from "./components/pages/Dashboard/Dashboard"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#2eb85c',
      main: '#2eb85c',
      
    }
  }
});

function App() {
  return (
    <Router>
       <MuiThemeProvider theme={theme}>
       <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        </MuiThemeProvider>
    </Router>
  );
}

export default App;