import Card from "../Cards/Card";
import accomodations from "../../../assets/accomodation.json";
import "./ProductsList.scss"
import "../../../assets/font.scss";

function ProductsList() {
  return (
    <section className="CardList">
      {accomodations.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  );
}

export default ProductsList;
