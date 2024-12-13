// IMPORTATO IL ARRAY DI POSTS
import posts from "../Data/Post";
// IMPORTO LE CARDS
import Card from "./Card";

function Main() {
  return (
    <main className="container-fluid">
      <div className="box d-flex justify-content-center gap-3 flex-wrap">
        {posts.map(
          (post) =>
            post.published === true && (
              <div key={post.id}>
                <Card
                  title={post.title}
                  img={post.image}
                  content={post.content}
                  tags={post.tags}
                />
              </div>
            )
        )}
      </div>
    </main>
  );
}

export default Main;
