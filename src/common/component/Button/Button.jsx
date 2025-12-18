import "./style.css";

export default function Button({btnName='', bgcolor= {}, color= {}, children}) {
  return (
    <button className="btn" style={{backgroundColor: bgcolor, color: color}}>
            {btnName}
            {children}
    </button>
  );
}