import Card from "./Card";

const CardGrid = ({ items }) => {
  const cardItems = items.map((item) => {
    return <Card key={item.code} {...item} />;
  });

  return <div className="card-grid">{cardItems}</div>;
};

export default CardGrid;
