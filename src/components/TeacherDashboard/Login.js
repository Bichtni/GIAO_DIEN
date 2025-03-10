import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây
    console.log({ username, password });
    // Chuyển hướng đến trang chủ giáo viên nếu đăng nhập thành công
    navigate("/teacher");
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>ĐĂNG NHẬP</h2>
        <div className="auth-logo">HT</div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tài khoản / Email</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Mật khẩu</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          
          <button type="submit" className="auth-btn">ĐĂNG NHẬP</button>
        </form>
        
        <div className="auth-link">
          Chưa có tài khoản?
          <Link to="/register">Đăng ký</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;