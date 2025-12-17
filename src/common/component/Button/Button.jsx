import "./style.css";

export default function Button({btnName='', bgcolor= {}, color= {}}) {
  return (
    <button className="btn" style={{backgroundColor: bgcolor, color: color}}>
            {btnName}
    </button>
  );
}