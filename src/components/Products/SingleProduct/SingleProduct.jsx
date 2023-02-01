// import TagList from 
import Dropdown from "../../Dropdown/Test/Dropdown";
import Images from "../../Images/Images";
import accomodationsList from "../../../assets/accomodation.json";
import Rating from "../../Rating/Rating";
import "./SingleProduct.scss";
import TagList from "../../Tags/TagList";
import "../../../assets/font.scss";
import { Navigate } from "react-router-dom";

function SingleProduct(props) {

    let accomodation = accomodationsList.find(accomodation => accomodation.id === props.index)
    if(!accomodation){
        return <Navigate to="/404" />
    }
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
                <Dropdown name="Description" index={accomodation.id}/>
                <Dropdown name="Équipements" index={accomodation.id}/>
            </div>
        </section>
    )
}
export default SingleProduct;