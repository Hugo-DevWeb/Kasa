import "./Dropdown.scss";
import aboutContent from "../../../assets/about.json";
import accomodationsList from "../../../assets/accomodation.json";
import arrow from "../../../assets/images/arrow.svg";
import { useState } from "react";
import "../../../assets/font.scss";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
 
  // eslint-disable-next-line no-undef
  let content = props.type === "Large"  ? aboutContent.find(c => c.name === props.title) : accomodationsList.find(accomodation => accomodation.id === props.index);

  return (
    <div className={`${props.type === "Large" ? "drop__container" : "drop__container--medium"}`}>
      <div className={`${props.type === "Large" ? "dropdown__large" : "dropdown__medium"}`}>
        <div className={`${props.type === "Large" ? "dropdown__large--text" : "dropdown__medium--text"}`}>
          <button onClick={() => setIsOpen(!isOpen)}>
            <span>{props.title || props.name}</span>
            {isOpen ? <img src={arrow} alt="fleche" className="closedArrow"></img> : <img src={arrow} className="openArrow" alt="fleche" ></img>}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`${props.type === "Large" ? "dropdownXLContent" : props.name === "Description" ? "description__content" : "equipement__content"}`}>
          {props.type === "Large" ? <p>{content.content}</p> : props.name === "Description" ? <p>{content.description}</p> : (
            <ul>
    
              {content.equipments.map((equipment, i) => (
                <li key={i}>{equipment}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;