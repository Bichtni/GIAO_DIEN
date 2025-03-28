import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import CreateExam from './CreateExam';
import ManageExam from "./ManageExam";

function TeacherDashboard() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="header">
          Hệ thống chấm điểm tự động bài kiểm tra
        </div>
        
        <div className="user-profile">
          <div className="user-avatar">GV</div>
          <div className="user-name">Giáo viên</div>
        </div>
        
        <div className="menu">
          <Link 
            to="/teacher/manage-exams" 
            className={`menu-item ${path.includes('/manage-exams') ? 'active' : ''}`}
          >
            Quản lý bài kiểm tra
          </Link>
          <Link 
            to="/teacher/student-list" 
            className={`menu-item ${path.includes('/student-list') ? 'active' : ''}`}
          >
            Danh sách sinh viên
          </Link>
          <Link 
            to="/teacher/create-exam" 
            className={`menu-item ${path.includes('/create-exam') ? 'active' : ''}`}
          >
            Tạo bài kiểm tra
          </Link>
        </div>
      </div>
      
      {/* Main content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/teacher/manage-exams" />} />
          <Route path="/create-exam" element={<CreateExam />} />
          <Route path="/manage-exams" element={<ManageExam />} />
          <Route path="/student-list" element={<div className="card"><h2 className="card-title">Danh sách sinh viên</h2></div>} />
        </Routes>
      </div>
    </div>
  );
}

export default TeacherDashboard;