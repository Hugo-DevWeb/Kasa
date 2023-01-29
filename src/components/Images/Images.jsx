import accomodationsList from "../../assets/accomodation.json";
import "./Images.scss";
import arrow from "../../assets/images/arrow.svg";
import { useState } from "react";
import "../../assets/font.scss";

function Images(props) {
  let accomodation = accomodationsList.find(accomodation => accomodation.id === props.index);
  if (!accomodation) return null;
  const images = accomodation.pictures;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }
  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }
  if(images.length > 1 ){
  return (
    <div id="diaporama__container">
      <img id="arrow-preview" src={arrow} alt="fleche" onClick={handlePrevious}/>
      <div className="diaporama">
        <img src={images[currentIndex]} alt={accomodation.title} className="diaporama-img" />
      </div>
      <img id="arrow-after" src={arrow} alt="fleche" onClick={handleNext}/>
      <div className="counter">{currentIndex + 1}/{images.length}</div>
    </div>
  )
 } else {
  return (
    <div id="diaporama__container">
    <div className="diaporama">
      <img src={images[currentIndex]} alt={accomodation.title} className="diaporama-img" />
    </div>
    </div>
  )
 }
}



export default Images;