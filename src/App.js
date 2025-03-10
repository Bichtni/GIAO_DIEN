import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import TeacherDashboard from "./components/TeacherDashboard/TeacherDashboard";
import Login from "./components/TeacherDashboard/Login";
import Register from "./components/TeacherDashboard/Register";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teacher/*" element={<TeacherDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;