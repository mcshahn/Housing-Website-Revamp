import logo from './logo.svg';
import './App.css';

import React from 'react';
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DormSelectionPage from './pages/dorm_selection_page';
import MyRequestsPage from './pages/my_requests_page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dorm_selection" element={<DormSelectionPage />}></Route>
        <Route path="/my_requests" element={<MyRequestsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
