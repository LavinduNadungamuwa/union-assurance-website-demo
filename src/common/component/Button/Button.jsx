import "./style.css";

export default function Button({btnName='', bgcolor= {}, color= {}, children, onClick}) {
  return (
    <button className="btn" style={{backgroundColor: bgcolor, color: color}} onClick={onClick}>
            {btnName}
            {children}
    </button>
  );
}