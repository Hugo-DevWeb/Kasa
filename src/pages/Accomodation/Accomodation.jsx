import Header from "../../components/Header/Header";
import SingleProduct from "../../components/Products/SingleProduct/SingleProduct";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Accomodation() {
    let { id } = useParams();
    return(
        <section>
            <Header />
            <SingleProduct index={id}/>
            <Footer />
        </section>
    )
}

export default Accomodation;