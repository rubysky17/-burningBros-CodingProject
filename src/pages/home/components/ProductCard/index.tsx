import "./styles.css";

function ProductCard(props: any) {
  const { card } = props;

  return (
    <div className="card-wrapper">
      <div className="card-wrapper__info">
        <img
          src={card.thumbnail}
          className="card-wrapper__info-thumb"
          alt={`hình ảnh ${card.title}`}
        />
        <p className="card-wrapper__info-title">{card.title}</p>

        <p className="card-wrapper__info-description">{card.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
