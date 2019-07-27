import React from "react";
import { NavLink } from "react-router-dom";

const PortfolioPage = () => (
  <div>
    <h1>My work</h1>
    <p>This is some fun thingd I did!!</p>
    <NavLink to="/portfolio/1">Item one</NavLink>
    <NavLink to="/portfolio/2">Item two</NavLink>
  </div>
);

export default PortfolioPage;
