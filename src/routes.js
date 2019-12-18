import React from "react";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import { Home, ServicePage, ContactPage, BlogPage, SingleBlogPage, PenTest, RedTeam, CyberDef } from "./pages";
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
          <Route exact path="/blog/:blog_name" component={SingleBlogPage} />
          <Route exact path="/pentest" component={PenTest} />
          <Route exact path="/redteam" component={RedTeam} />
          <Route exact path="/cyber" component={CyberDef} />
        </Switch>
      <Footer />
    </Router>
  </div>
);
