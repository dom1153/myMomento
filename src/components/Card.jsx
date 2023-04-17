function Card({ image, selected, onClick }) {
  return (
    <div className="card">
      <div className={"selected"}>
        <img alt="" src={image} className="card-face" />
        <img
          alt=""
          className="card-back"
          src={"/assets/fireship.png"}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default Card;
