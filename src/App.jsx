import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login'; // Nhớ tạo file Dashboard.jsx đơn giản nhé
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Đường dẫn mặc định "/" sẽ hiện trang Login (Home) */}
        <Route path="/Login" element={<Login/>} />
        
        {/* Đường dẫn "/dashboard" sẽ hiện trang sau khi login */}
        <Route path="/Home" element={<Home/>} />
        {/* Đường dẫn "/dashboard" sẽ hiện trang sau khi login */}
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;