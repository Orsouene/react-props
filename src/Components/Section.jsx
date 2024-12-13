// IMPORTATO IL ARRAY DI POSTS
import posts from "../Data/Post";

function Section() {
  // creo un nuovo array inizialmente vuoto
  let newArray = [];
  posts.map((element) => {
    element.tags.forEach((tag) => {
      if (!newArray.includes(tag)) {
        newArray.push(tag);
      }
    });
  });
  return (
    <div className="card">
      <div className="card-header"> La lista dei tag</div>
      <ul className="list-group list-group-flush">
        {newArray.map((element) => (
          <li className="list-group-item">
            {element.charAt(0).toUpperCase() + element.slice(1, element.length)}
          </li>
        ))}
      </ul>
    </div>
  );
}

// esporto la section
export default Section;
