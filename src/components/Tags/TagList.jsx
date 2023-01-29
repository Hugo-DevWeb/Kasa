import accomodations from "../../assets/accomodation.json";
import "./Tag.scss"
import "../../assets/font.scss";

function TagList(props) {
    let accomodation = accomodations.find(accomodation => accomodation.id === props.index )
    const tagList = accomodation.tags.map((tag) => 
        <li className="tags" key={tag}>{tag}</li>
    )

    return (
        <ul className="tagList">
          {tagList}  
        </ul>
    )
}

export default TagList;