/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import Header from "../../components/Header/Header";
// eslint-disable-next-line no-unused-vars
import Banner from "../../components/Banner/Banner";
import ProductsList from "../../components/Products/ProductsList/ProductsList";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <ProductsList />
      <Footer />
    </div>
  );
}

export default Home;
