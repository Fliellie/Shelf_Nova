import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Home.css';


function Home() {
  const navigate = useNavigate();
  const [sideBarIsExtended,stateOfSideBar]=useState(true);
  const toggleSideBar=() => {
    stateOfSideBar(!sideBarIsExtended);
  }

  return (
    <div className='fullScreen'>
      <div className='sideBar' style={{width: sideBarIsExtended ? '240px' : '70px'}}>


        <div onClick={toggleSideBar} className='logo'>
          <span style={{fontSize:'24px'}}><img src="https://cdn-icons-png.flaticon.com/128/10856/10856545.png" alt="logo" width="30"/></span>
          {sideBarIsExtended && <span className='fontOfLogo'>Shop Management</span>}
        </div>




        <div>

          <div className='choiceSideBar'>
            <span style={{fontSize:'20px'}}>📊</span>
            {sideBarIsExtended && <span>Home</span>}
          </div>



          <div className='choiceSideBar'>
            <span style={{fontSize:'20px'}}>👤</span>
            {sideBarIsExtended && <span>About us</span>}
          </div>



          <div className='choiceSideBar'>
            <span style={{fontSize:'20px'}}>👤</span>
            {sideBarIsExtended && <span>About the web</span>}
          </div>



          <div className='choiceSideBar'>
            <span style={{fontSize:'20px'}}>👤</span>
            {sideBarIsExtended && <span>Pantry</span>}
          </div>



          <div className='choiceSideBar'>
            <span style={{fontSize:'20px'}}>👤</span>
            {sideBarIsExtended && <span>Settings</span>}
          </div>



        </div>

      </div>

    </div>

  );
}
export default Home;