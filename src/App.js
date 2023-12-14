import './App.css';
import React from 'react';
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DormSelectionPage from './pages/dorm_selection_page';
import MyRequestsPage from './pages/my_requests_page';
import LoginPage from './pages/login_page';
import CreateRequestPage from './pages/create_request_page';
import RequestsBulletin from './pages/requests_bulletin';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />}></Route>
        <Route path="/dorm_selection" element={<DormSelectionPage />}></Route>
        <Route path="/my_requests" element={<MyRequestsPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/create_request" element={<CreateRequestPage />}></Route>
        <Route path="/requests_bulletin" element={<RequestsBulletin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
