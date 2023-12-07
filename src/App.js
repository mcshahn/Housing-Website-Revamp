import logo from './logo.svg';
import './App.css';

import React from 'react';
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dorm_Selection_Page from './pages/dorm_selection_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dorm_selection" element={<Dorm_Selection_Page/>}>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
