function Btn(props) {
  return (
    <button 
      style={{
        padding: '12px 24px', 
        color: 'white', 
        border: 'none', 
        borderRadius: '8px',
        cursor: 'pointer', 
        fontWeight: '600', 
        width: '100%',             // Cho nút dài bằng ô input nhìn cho cân đối
        marginTop: '16px',         // Tạo khoảng cách phía trên nút
        backgroundColor: props.bgColor,
        boxShadow: '0 4px 12px rgba(150, 179, 19, 0.2)', // Thêm đổ bóng nhẹ theo màu nút
        transition: 'all 0.2s ease-in-out',
        fontSize: '16px'
      }} 
      onClick={props.userClick}
    >
      {props.text}
    </button>
  );
}
export default Btn;