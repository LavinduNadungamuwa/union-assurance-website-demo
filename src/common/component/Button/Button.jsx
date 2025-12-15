import "./style.css";

export default function Button({btnName=''}) {
  return (
    <button className="btn">
            {btnName}
    </button>
  );
}