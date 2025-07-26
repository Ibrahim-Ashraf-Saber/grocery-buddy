import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <TiShoppingCart style={{ fontSize: "32px" }} />
        <p>Grocery Buddy</p>
      </div>
      <div className="header-date">
        <MdOutlineDateRange style={{ fontSize: "22px" }} />
        <p>{new Date().toDateString()}</p>
      </div>
    </header>
  );
}
