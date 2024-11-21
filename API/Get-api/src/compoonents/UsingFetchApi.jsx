import { useEffect } from "react";
import "../App";
import { useState } from "react";

function UsingFetchAPI() {
  const [posts, setPost] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const urlPath = "https://dummyjson.com/posts";
  useEffect(() => {
    setLoader(true);
    setError(false);
    fetch(urlPath)
      .then((response) => response.json())
      .then((data) => {
        setPost(data.posts);
        setLoader(false);
      })
      .catch((error) => {
      
        setError(true);
      }).finally(()=>  setLoader(false))
  }, []);
  return (
    <>
      {loader && <h1>Loading...</h1>}
      {error && <h1>Something went wrong...</h1>}
      {posts &&
        posts.map((post) => {
          return (
            <div className="product-card" key={post.id}>
              <div className="product-header">
                <h2 className="product-title">{post.title}</h2>
                <span className="product-id">{post.id}</span>
              </div>
              <p className="product-description">{post.body}</p>
              <div className="product-reactions">
                <span className="likes">👍{post.reactions.likes}</span>
                <span className="dislikes">👎{post.reactions.dislikes}</span>
              </div>
              <div className="product-tags">
                {post.tags.map((tag) => (
                  <span className="tag">{tag}</span>
                ))}
              </div>
              <div className="product-footer">
                <span className="user-id">{post.userId}</span>
                <span className="views">{post.views}</span>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default  UsingFetchAPI;