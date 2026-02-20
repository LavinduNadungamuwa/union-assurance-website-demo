import "./style.css";

export default function Button({btnName='', bgcolor= {}, color= {}, border= {}, children, onClick, disabled = false, className = ''}) {
  return (
    <button 
      className={`btn ${className}`}
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