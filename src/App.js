import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes , HashRouter , HashRouter as Router } from "react-router-dom";
import Main from "./Components/Main/Main";
import Scale from './Scale';
import AddResume from "./Components/AddResume/AddResume";
import Experience from './Components/Experience/Experience';
function App() {
  return (
    <div className="App">
      <Scale>
        <HashRouter>
          <Routes>
            <Route path="/" element={<AddResume />} />
            <Route path="/Main" element={<Main />} />
            {/* <Route path="/Experience" element={<Experience />} /> */}
          </Routes>
        </HashRouter>
      </Scale>
    </div>
  );
}

export default App;

