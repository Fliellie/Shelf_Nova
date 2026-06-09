import React, { useState, useEffect } from 'react'; // Đã fix: Thêm useEffect vào đây
import TextBox from './components/TextBox';
import Btn from './components/Btn';
import { useNavigate } from 'react-router-dom';
import './css/Login.css'; 

function Login(){
  // --- STATE MANAGEMENT ---
  const [tempShopName, setTempShopName] = useState("");
  const [tempPass, setTempPass] = useState("");
  const [role, setRole] = useState("shop_owner"); 
  const [tempAdminPass, setTempAdminPass] = useState("");
  
  // Đã fix: Bổ sung State quản lý việc tick chọn checkbox bị thiếu
  const [rememberShop, setRememberShop] = useState(false);

  const [shopName, setShopName] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate(); 

  // 💡 1. KHI MỞ TRANG: Tự động lấy tên shop từ bộ nhớ client lên nếu có
  useEffect(() => {
    const savedShopName = localStorage.getItem('shelf_nova_remembered_shop');
    if (savedShopName) {
      console.log("Tìm thấy shop đã lưu:", savedShopName);
      setTempShopName(savedShopName);
      setRememberShop(true);
    }
  }, []);

  // 💡 2. XỬ LÝ CLICK CHECKBOX: Lưu hoặc xóa ngay lập tức khi client bấm tick
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setRememberShop(isChecked);

    if (isChecked) {
      localStorage.setItem('shelf_nova_remembered_shop', tempShopName);
    } else {
      localStorage.removeItem('shelf_nova_remembered_shop');
    }
  };

  // 💡 3. XỬ LÝ THAY ĐỔI TEXT REALTIME: Vừa gõ vừa lưu luôn nếu đang bật Remember
  const handleShopNameChange = (e) => {
    const value = e.target.value;
    setTempShopName(value);
    
    if (rememberShop) {
      localStorage.setItem('shelf_nova_remembered_shop', value);
    }
  };

  // 💡 4. XỬ LÝ ĐĂNG NHẬP
  const handleLogin = () => {
    if (role === 'admin' && tempAdminPass === "") {
      alert("Please enter the Admin Security Password!");
      return;
    }

    if(tempShopName !== "" && tempPass !== ""){
      setShopName(tempShopName);
      setPass(tempPass);
      
      console.log("Authenticating...");
      setTimeout(() => {
        console.log("Login successful!");
        navigate('/Home'); 
      }, 1000);
      
    } else {
      alert("Please enter your Shop Name and Password!");
    }
  };

  return (
    <div className='loginScreen'>
      {/* Vệt mờ background giữ nguyên phong cách Glassmorphism */}
      <div className="floating-object object1"></div>
      <div className="floating-object object2"></div>
      
      {/* CONTAINER CHÍNH CHIA ĐÔI MÀN HÌNH */}
      <div className="loginContainer">
        
        {/* CHÂN TRÁI (50% MÀN HÌNH): QUẢNG CÁO & THÔNG TIN CÔNG TY */}
        <div className="brandPanel">
          <div className="brandTag">Cloud-Based Solution</div>
          <h1 className="mainBrandTitle">Shelf_nova</h1>
          <p className="brandDesc">
            The next-generation smart retail and inventory management system. 
            Optimize your shelves, boost your store performance effortlessly.
          </p>
          
          <div className="companyFooter">
            <p className="companyName">Developed by <strong>NovaSoft Solutions Co.</strong></p>
            <p className="companyContact">Hotline: <span>+84 123 456 789</span> | Support: 24/7</p>
          </div>
        </div>

        {/* CHÂN PHẢI (50% MÀN HÌNH): TẤM KÍNH FORM ĐĂNG NHẬP */}
        <div className='loginCard'>
          <h2 className='loginTitle'>Sign In</h2>
          <h3 className='loginSubtitle'>Access your store management system</h3>
          
          {/* Ô Nhập Tên Shop */}
          <p className='inputLabel'>Shop Name</p>
          <input 
            type="text"
            className="loginShopInput" 
            placeholder="Enter your registered shop name" 
            value={tempShopName} 
            onChange={handleShopNameChange}
          />

          {/* Hộp chọn vai trò (ChoiceBox / Select) */}
          <p className='inputLabel'>Your Role</p>
          <select className="roleSelect" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="shop_owner">Shop Owner (Chủ cửa hàng)</option>
            <option value="staff">Store Staff (Nhân viên)</option>
            <option value="admin">System Administrator (Quản trị viên)</option>
          </select>

          {/* Logic ẩn hiện Admin Password */}
          {role === 'admin' && (
            <div className="animatedFadeIn">
              <p className='inputLabel' style={{color: '#ea580c'}}>Admin Security Key</p>
              <TextBox type="password" placeholder="Enter system admin password" onInputChange={(value) => setTempAdminPass(value)} />
            </div>
          )}
          
          {/* Ô Nhập Mật Khẩu */}
          <p className='inputLabel'>Password</p>
          <TextBox className="loginShopInput" type="password" placeholder="Enter your password" onInputChange={(value) => setTempPass(value)} />
          
          {/* Đã fix: Thêm lại giao diện ô Checkbox Remember Shop Name bị thiếu */}
          <div className="rememberContainer">
            <label className="rememberCheckboxLabel">
              <input 
                type="checkbox" 
                checked={rememberShop}
                onChange={handleCheckboxChange} 
                className="customCheckbox"
              />
              <span className="checkboxText">Remember Shop Name</span>
            </label>
          </div>

          {/* Nút đăng nhập đổi tông màu cam cháy */}
          <Btn text="Log In" bgColor='#ea580c' userClick={handleLogin}/>

          {/* Liên kết điều hướng sang trang Đăng Ký */}
          <div className="registerLink" onClick={() => navigate('/Register')}>
            Don't have an account? <span>Sign up</span>
          </div>
        </div>

      </div>

      {/* Box hiển thị kết quả test bên dưới */}
      {shopName && (
        <div className='resultBox'>
          Logged in Shop: <strong className='highlightText'>{shopName}</strong> as <strong className='highlightText'>{role}</strong>
        </div>
      )}
      
    </div>
  );
}

export default Login;