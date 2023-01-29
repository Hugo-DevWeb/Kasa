import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import DropdownLarge from "../../components/Dropdown/Large/DropdownLarge";

function About() {
    return(
        <div>
            <Header />
            <Banner />
            <DropdownLarge title="Fiabilité"/>
            <DropdownLarge title="Respect" />
            <DropdownLarge title="Service" />
            <DropdownLarge title="Sécurité" />
        </div>
    )
}

export default About;