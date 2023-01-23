import React from "react";
import { BrowserRouter, Route, Routes, Switch, Redirect } from "react-router-dom";
import logo from '../public/logo192.png'

export default function Root(props) {

  console.log(props);
  return (<BrowserRouter>
    <Routes>
      <Route path="/app4" element={<PeoplePage {...props} />} />
    </Routes>
  </BrowserRouter>);
}


const PeoplePage = (props) => {
  console.log("People page render", props);
  return (<div style={{ textAlign: "center" }} >
    <h1>
      Hello from React
    </h1>
    <img src={logo} alt="logo" />
    <h4>{props.myProp}</h4>
  </div>);
}