import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra mật khẩu nhập lại
    if (password !== confirmPassword) {
      alert("Mật khẩu nhập lại không khớp!");
      return;
    }
    
    // Xử lý đăng ký ở đây
    console.log({ fullName, email, username, password });
    // Chuyển hướng đến trang đăng nhập nếu đăng ký thành công
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>ĐĂNG KÝ</h2>
        <div className="auth-logo">HT</div>
        
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Họ và tên</label>
            <input 
              type="text" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Tài khoản</label>
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
          
          <div className="form-group">
            <label>Xác nhận mật khẩu</label>
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          
          <button type="submit" className="auth-btn">ĐĂNG KÝ</button>
        </form>
        
        <div className="auth-link">
          Đã có tài khoản?
          <Link to="/login">Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;