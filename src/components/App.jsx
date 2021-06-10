import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Gallery from "./Gallery";
import NavBar from "./NavBar";
import Quote from "./Quote";

const App = () => (
  <Router>
    <NavBar />
    <main>
      <Switch>
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route path="/" component={Quote} exact />
      </Switch>
    </main>
    <Footer />
  </Router>
);

export default App;
