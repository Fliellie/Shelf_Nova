import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Home.css';

function Home() {
  const navigate = useNavigate();
  const [sideBarIsExtended, stateOfSideBar] = useState(true);
  
  const toggleSideBar = () => {
    stateOfSideBar(!sideBarIsExtended);
  }

  return (
    <div className='fullScreen'>
      <div className='sideBar' style={{ width: sideBarIsExtended ? '240px' : '70px' }}>

        {/* LOGO AREA */}
        <div onClick={toggleSideBar} className='logo'>
          <span style={{ fontSize: '24px' }}>
            <img src="https://cdn-icons-png.flaticon.com/128/10856/10856545.png" alt="logo" width="30" />
          </span>
          {sideBarIsExtended && <span className='fontOfLogo'>Shelf_nova</span>}
        </div>

        {/* MENU ITEMS WRAPPER */}
        {/* Mẹo nhỏ: Thêm style flex ở đây để có thể đẩy nút Back xuống dưới đáy Sidebar nhìn cho chuyên nghiệp */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
          
          {/* Nhóm các chức năng chính */}
          <div>
            <div className='choiceSideBar'>
              <span style={{ fontSize: '20px' }}>📊</span>
              {sideBarIsExtended && <span>Home</span>}
            </div>

            <div className='choiceSideBar'>
              <span style={{ fontSize: '20px' }}>👥</span>
              {sideBarIsExtended && <span>About us</span>}
            </div>

            <div className='choiceSideBar'>
              <span style={{ fontSize: '20px' }}>🌐</span>
              {sideBarIsExtended && <span>About the web</span>}
            </div>

            <div className='choiceSideBar'>
              <span style={{ fontSize: '20px' }}>📦</span>
              {sideBarIsExtended && <span>Pantry</span>}
            </div>

            <div className='choiceSideBar'>
              <span style={{ fontSize: '20px' }}>⚙️</span>
              {sideBarIsExtended && <span>Settings</span>}
            </div>
          </div>

          {/* 🔥 NÚT BACK VỀ LOGIN TẠM THỜI (Đặt ở đáy Sidebar) */}
          <div 
            className='choiceSideBar' 
            onClick={() => navigate('/Login')}
            style={{ 
              marginBottom: '16px',
              color: '#ef4444', /* Đổi màu chữ sang đỏ hồng nhẹ để phân biệt nút thoát */
              borderTop: sideBarIsExtended ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
              paddingTop: '16px'
            }}
          >
            <span style={{ fontSize: '20px' }}>🚪</span>
            {sideBarIsExtended && <span>Back to Login</span>}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;