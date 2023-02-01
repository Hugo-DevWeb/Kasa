import accomodationsList from "../../../assets/accomodation.json";
import "./DropdownMedium.scss";
import arrow from "../../../assets/images/arrow.svg";
import { useState } from "react";
import "../../../assets/font.scss";


function DropdownMedium({name, index}) {
  const [isOpen, setIsOpen] = useState(false);
  let accomodation = accomodationsList.find(accomodation => accomodation.id === index);
  
  return (
    <>
      { name === "Description" ? (
      <div className="drop__bloc">
        <div className="dropdown__medium">
          <div className="dropdown__medium--text">
            <button onClick={() => setIsOpen(!isOpen)}>
                    <span>{name}</span>
                    {isOpen ? <img src={arrow} alt="fleche" className="closedArrow"></img> : <img src={arrow} className="openArrow" alt="fleche" ></img>}
            </button>
          </div>
        </div>
          {isOpen && (
            <div className="description__content">
              <p>{accomodation.description}</p>
            </div>
          )}
      </div>  
      ) : (
      <div className="drop__bloc">  
        <div className="dropdown__medium">
          <div className="dropdown__medium--text">
            <button onClick={() => setIsOpen(!isOpen)}>
                      <span>{name}</span>
                      {isOpen ? <img src={arrow} alt="fleche" className="closedArrow"></img> : <img src={arrow} className="openArrow" alt="fleche" ></img>}
              </button>
          </div>
        </div> 
          {isOpen && (
            <div className="equipement__content"> 
              <ul>
                {accomodation.equipments.map((equipments, i) => {
                  return <li key={i}>{equipments}</li>
                })}
              </ul>  
            </div>
          )}
          
        </div>
      )}
    </>
  );
}
  
export default DropdownMedium;