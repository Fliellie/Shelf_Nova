import React, { useState } from 'react';
import TextBox from './components/TextBox';
import Btn from './components/Btn';
import { useNavigate } from 'react-router-dom';
import './css/Login.css'; // Đã import chuẩn file CSS mới

function Login(){
  const [tempEmail, setTempEmail] = useState("");
  const [tempPass, setTempPass] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate(); 

  const handleLogin = () => {
    setEmail(tempEmail);
    setPass(tempPass);
    
    if(tempEmail !== "" && tempPass !== ""){
      console.log("Bắt đầu đợi 1 giây...");
      
      setTimeout(() => {
        console.log("waiting 1 sec done");
        // Hãy chắc chắn đường dẫn này khớp với App.jsx của ông
        navigate('/Home'); 
      }, 1000);
      
    } else {
      alert("type something bro!");
    }
  };

  return (
    <div className='loginScreen'>
      
      {/* 5. CÁC ĐỐI TƯỢNG 3D BAY BỔNG ( Thêm vào đây, bên trong screen nhưng ngoài card ) */}
      {/* Các đối tượng phía sau card */}
      <div className="floating-object object1"></div>
      <div className="floating-object object2"></div>
      <div className="floating-object object3"></div>
      <div className="floating-object object4"></div>
      
      {/* Hình vòng nằm phía sau */}
      <div className="object-torus"></div>
      
      
      {/* TẤM KÍNH MỜ (CARD LOGIN) */}
      <div className='loginCard'>
          
        {/* Đối tượng đặc biệt nằm ngay trên tấm kính */}
        <div className="object-on-card"></div>
        
        <h1 className='loginTitle'>Login</h1>
        <h3 className='loginSubtitle'>Welcome to my website</h3>
        
        <p className='inputLabel'>Email</p>
        <TextBox placeholder="input your email here" onInputChange={(value) => setTempEmail(value)} />
        
        <p className='inputLabel'>Password</p>
        <TextBox type="password" placeholder="your password" onInputChange={(value) => setTempPass(value)} />
        
        <Btn text="Login" bgColor='#96b313' userClick={handleLogin}/>
      </div>

      {email && (
        <div className='resultBox'>
          You just logged in with account: <strong className='highlightText'>{email}</strong> <br />
          and password is: <strong className='highlightText'>{pass}</strong>
        </div>
      )}
      
    </div>
  );
}

export default Login;