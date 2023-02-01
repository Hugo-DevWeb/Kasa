import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Dropdown from "../../components/Dropdown/Test/Dropdown";
import aboutContent from "../../assets/about.json"

function About() {
    return(
        <div>
            <Header />
            <Banner />
            {aboutContent.map((content, index) => (
               <Dropdown type="Large"  key={index} title={content.name} content={content.content} />
            ))}
        </div>
    )
}

export default About;