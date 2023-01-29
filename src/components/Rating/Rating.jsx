/* eslint-disable react/style-prop-object */
import accomodationsList from "../../assets/accomodation.json";
import activeStar from "../../assets/images/activeStar.svg";
import greyStar from "../../assets/images/greyStar.svg"





function Rating(props){
    const accomodation = accomodationsList.find(accomodation => accomodation.id === props.index);
    const value = accomodation.rating;
    const ratingValue = parseInt(value, 10);
    let imgs = [];
    for (let i = 0; i < 5; i++){
        if(i + 1 <= ratingValue){
            imgs.push(<img src={activeStar} alt='icone etoile' />)
        } else {
            imgs.push(<img src={greyStar} alt='icone etoile' />);
        }
    } 
    
    return <div className="rating">{imgs}</div>
}


export default Rating;