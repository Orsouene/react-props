// importato css module
import style from "./tag.module.css";
function Card({ title, img, content, tags }) {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p>
          {/*Faccio un'iterazione sull'array di tags e assegno un colore a ciascun elemento  */}
          {tags.map((element, index) => (
            <span
              key={index}
              className={`badge rounded-pill p-2 m-2 ${
                element.toLowerCase() === "html"
                  ? style.htmlTag
                  : element.toLowerCase() === "css"
                  ? style.cssTag
                  : element.toLowerCase() === "php"
                  ? style.phpTag
                  : style.jsTag
              }`}
            >
              {element}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

// esporto il main

export default Card;
