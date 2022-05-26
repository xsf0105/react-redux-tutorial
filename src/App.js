import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";

import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <nav
            style={{
              paddingBottom: "1rem",
            }}
          >
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>
        </nav>

        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<Invoices />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Routes>
      </header>


    </div>
  );
}

export default App;
