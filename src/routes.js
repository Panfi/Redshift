import React from "react";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import{ Home, ServicePage, ContactPage, BlogPage } from "./pages";
import Footer from "./components/footerComponent";
import Header from './components/headerComponent';

export default (
  <div>
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/service" component={ServicePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/blog" component={BlogPage} />
        </Switch>
      <Footer />
    </Router>
  </div>
);
