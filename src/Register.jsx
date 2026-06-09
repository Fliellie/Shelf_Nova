import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Register.css'; // Import chuẩn đường dẫn file CSS

function Register() {
  const navigate = useNavigate();

  // Khai báo đầy đủ State cho 7 trường thông tin theo yêu cầu
  const [email, setEmail] = useState('');
  const [sdt, setSdt] = useState('');
  const [tenShop, setTenShop] = useState('');
  const [matHang, setMatHang] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [diaChi, setDiaChi] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Validate nhanh mật khẩu trùng khớp
    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không trùng khớp bro ơi!");
      return;
    }

    // Kiểm tra xem đã điền đủ thông tin chưa
    if (email && sdt && tenShop && matHang && password && diaChi) {
      console.log("Đăng ký thành công tài khoản cho Shop:", tenShop);
      alert(`Chào mừng ${tenShop} gia nhập Shelf_nova!`);
      navigate('/Login'); // Đăng ký xong tự điều hướng về trang Login
    } else {
      alert("Hãy điền đầy đủ tất cả các trường thông tin nhé!");
    }
  };

  return (
    <div className="registerScreen">
      {/* Các vệt mờ nghệ thuật làm nền */}
      <div className="floating-object reg-obj1"></div>
      <div className="floating-object reg-obj2"></div>

      {/* Tấm kính mờ lớn chiếm 75% màn hình */}
      <div className="registerCard">
        <div className="brandName">Shelf_nova</div>
        <h1 className="registerTitle">Create Your Own Shop</h1>

        <form onSubmit={handleRegister} className="registerForm">
          
          {/* CỘT 1 */}
          <div className="inputGroup">
            <label className="inputLabel">Tên cửa hàng (Shop Name)</label>
            <input 
              type="text" 
              placeholder="Nhập tên shop của bạn" 
              value={tenShop}
              onChange={(e) => setTenShop(e.target.value)}
            />
          </div>

          {/* CỘT 2 */}
          <div className="inputGroup">
            <label className="inputLabel">Mặt hàng định bán</label>
            <input 
              type="text" 
              placeholder="Ví dụ: Quần áo, Điện tử, Mỹ phẩm..." 
              value={matHang}
              onChange={(e) => setMatHang(e.target.value)}
            />
          </div>

          {/* CỘT 1 */}
          <div className="inputGroup">
            <label className="inputLabel">Email</label>
            <input 
              type="email" 
              placeholder="example@gmail.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* CỘT 2 */}
          <div className="inputGroup">
            <label className="inputLabel">Số điện thoại</label>
            <input 
              type="tel" 
              placeholder="Nhập số điện thoại shop" 
              value={sdt}
              onChange={(e) => setSdt(e.target.value)}
            />
          </div>

          {/* CỘT 1 */}
          <div className="inputGroup">
            <label className="inputLabel">Mật khẩu</label>
            <input 
              type="password" 
              placeholder="Tối thiểu 6 ký tự" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* CỘT 2 */}
          <div className="inputGroup">
            <label className="inputLabel">Xác nhận mật khẩu</label>
            <input 
              type="password" 
              placeholder="Nhập lại mật khẩu" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Ô ĐỊA CHỈ: Trải dài full cả 2 cột vì text địa chỉ thường rất dài */}
          <div className="inputGroup fullWidthField">
            <label className="inputLabel">Địa chỉ của shop chính</label>
            <input 
              type="text" 
              placeholder="Số nhà, tên đường, quận/huyện, thành phố..." 
              value={diaChi}
              onChange={(e) => setDiaChi(e.target.value)}
            />
          </div>

          {/* KHU VỰC NÚT BẤM */}
          <div className="actionArea">
            <button type="submit" className="signUpBtn">
              Sign Up
            </button>
            
            <div className="backToLoginLink" onClick={() => navigate('/Login ')}>
              Already have an account? <span>Back to Login</span>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Register;