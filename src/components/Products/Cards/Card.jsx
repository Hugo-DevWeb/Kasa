import "./Card.scss";
import { Link } from "react-router-dom";
import "../../../assets/font.scss";

function Card({item}) {
  const cardStyle = {
    backgroundImage: `url(${item.cover})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return (
    <div className="Card" style={cardStyle}>
      <Link to={`/logement/${item.id}`}>
      <h2 className="Card__title">{item.title}</h2>
      </Link>
    </div>
  );
}

export default Card;
