import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import HomePage from "../components/HomePage";
import ContactUsPage from "../components/ContactUsPage";
import PortfolioItemPage from "../components/PortfolioItemPage";
import PortfolioPage from "../components/PortfolioPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioItemPage} />
        <Route path="/contact" component={ContactUsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
