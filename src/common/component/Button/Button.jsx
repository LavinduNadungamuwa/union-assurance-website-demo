import "./style.css";

export default function Button({btnName='', bgcolor= {}, color= {}, border= {}, children, onClick, disabled = false}) {
  return (
    <button 
      className="btn" 
      style={{
        backgroundColor: bgcolor, 
        color: color, 
        border: border,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer'
      }} 
      onClick={onClick}
      disabled={disabled}
    >
            {btnName}
            {children}
    </button>
  );
}