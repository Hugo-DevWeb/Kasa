// import TagList from 
import DropdownMedium from "../../Dropdown/Medium/DropdownMedium";
import Images from "../../Images/Images";
import accomodationsList from "../../../assets/accomodation.json";
import Rating from "../../Rating/Rating";
import "./SingleProduct.scss";
import TagList from "../../Tags/TagList";
import "../../../assets/font.scss";

function SingleProduct(props) {
    let accomodation = accomodationsList.find(accomodation => accomodation.id === props.index)
    return(
        <section>
            <Images index={accomodation.id}/>
            <div className="presentation__bloc">
                <div className="presentation">
                    <h2>{accomodation.title}</h2>
                    <h3>{accomodation.location}</h3>
                    <TagList index={accomodation.id} />
                    {/* <TagList /> */}
                </div>
                <div className="right_part">
                    <div className="host">
                        <h3>{accomodation.host.name}</h3>
                        <img className="host__picture" src={accomodation.host.picture} alt="profil"></img>
                    </div>
                    <div>
                        
                        <Rating index={accomodation.id}/>
                    </div>
                </div>
            </div>
            <div className="drop__group">
                <DropdownMedium name="Description" index={accomodation.id}/>
                <DropdownMedium name="Équipements" index={accomodation.id}/>
            </div>
        </section>
    )
}
export default SingleProduct;