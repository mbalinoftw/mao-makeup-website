import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Error404 from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
