import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import Scale from './Scale';
import AddResume from "./Components/AddResume/AddResume";
function App() {
  return (
    <div className="App">
      <Scale>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<AddResume />} />
            <Route path="/Main" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </Scale>
    </div>
  );
}

export default App;

