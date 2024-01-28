import React from "react";
import { Routes, Route } from "react-router-dom";
import Editor from "./components/Editor";

const App = () => (
  <Routes>
    <Route path="beans/*" element={<Editor />} />
  </Routes>
);

export default App;
