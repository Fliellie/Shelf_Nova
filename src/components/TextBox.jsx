


function TextBox(props){
  return(
    <div style={{ margin: '12px 0 20px 0', textAlign: 'left' }}>
      <input 
        type={props.type || "text"} // Hỗ trợ ẩn mật khẩu nếu truyền type="password"
        placeholder={props.placeholder} // Đã sửa lỗi dấu nháy đơn
        onChange={(e) => props.onInputChange(e.target.value)}
        style={{
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #4a4a5a',
          backgroundColor: '#1e1e24', // Màu nền ô input tối hơn nền card để tạo chiều sâu
          color: '#fff',
          fontSize: '15px',
          width: '100%',              // Cho full chiều rộng của container
          boxSizing: 'border-box',    // Giữ ô input không bị tràn viền
          outline: 'none',
          transition: 'border-color 0.2s'
        }}
      />
    </div>
  );
}

export default TextBox;