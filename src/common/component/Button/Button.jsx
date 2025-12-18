import "./style.css";

export default function Button({btnName='', bgcolor= {}, color= {}, border= {}, children, onClick}) {
  return (
    <button className="btn" style={{backgroundColor: bgcolor, color: color, border: border}} onClick={onClick}>
            {btnName}
            {children}
    </button>
  );
}