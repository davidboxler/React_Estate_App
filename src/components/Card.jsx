import { Link } from "react-router-dom";
import bath from "../assets/images/bath.png";
import bed from "../assets/images/bed.png";
import chat from "../assets/images/chat.png";
import pin from "../assets/images/pin.png";
import save from "../assets/images/save.png";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="img-apartment" />
      </Link>
      <div className="textContainer">
        <h2>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src={pin} alt="img-pin" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={bed} alt="img-bed" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src={bath} alt="img-bath" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src={save} alt="img-save" />
            </div>
            <div className="icon">
              <img src={chat} alt="img-chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
