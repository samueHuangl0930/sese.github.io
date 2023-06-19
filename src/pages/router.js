import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GloballLayout from "../Layout/GloballLauout"

import Home from "./home/index";



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GloballLayout />}>
          <Route path="/" element={<Home />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
