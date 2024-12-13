function Card({ title, img, content, tags }) {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p>{tags.join(",")}</p>
      </div>
    </div>
  );
}

// esporto il main

export default Card;
