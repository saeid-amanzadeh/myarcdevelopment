import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/ui/Header";
import theme from "./ui/Theme";

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={ theme } >
            <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={ () =>  <div> Home </div> } />
                <Route exact path="/services" component={ () =>  <div> Services </div> } />
                <Route exact path="/customsoftware" component={ () =>  <div> Custom Software </div> } />
                <Route exact path="/revolution" component={ () =>  <div> The Revolution </div> } />
                <Route exact path="/about" component={ () =>  <div> About Us </div> } />
                <Route exact path="/contact" component={ () =>  <div> Contact Us </div> } />
            </Switch>
            </BrowserRouter>
        </ThemeProvider>
    </div>
  );
}

export default App;
