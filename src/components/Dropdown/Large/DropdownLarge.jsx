import "./DropdownLarge.scss";
import aboutContent from "../../../assets/about.json";
import arrow from "../../../assets/images/arrow.svg";
import { useState } from "react";
import "../../../assets/font.scss";

function DropdownLarge(props) {
  return (
    <div>
      {aboutContent.map((content, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isOpen, setIsOpen] = useState(false);
        return (
          props.title === content.name ? (
            <div className="drop__container"key={index}>
              <div className="dropdown__large" key={content.name}>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <span>{content.name}</span>
                  {isOpen ? <img src={arrow} alt="fleche" className="closedArrow"></img> : <img src={arrow} className="openArrow" alt="fleche" ></img>}
                </button>
                </div>
                {isOpen && (
                  <div className="dropdownXLContent">
                    <p>{content.content}</p>
                  </div>
                )}
              
            </div>
          ) : null
        );
      })}
    </div>
  );
}


export default DropdownLarge;