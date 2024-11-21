import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]); // Initialize as an empty array
  
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data=> setData(data.posts))
    .catch(error=> console.log(error))
  }, [])
  

  return (
    <>
      {data.map((i) => {
        return (
          <div key={i.id} style={{ border: "1px solid red", marginBottom: "10px", padding: "10px" }}>
            <span><strong>UserId:</strong> {i.userId}</span><br />
            <span><strong>Title:</strong> {i.title}</span><br />
            <span><strong>Body:</strong> {i.body}</span><br />
            <span><strong>Tags:</strong> {i.tags.join(', ')}</span><br />
            <span><strong>Views:</strong> {i.view}</span>
          </div>
        );
      })}
    </>
  );
}

export default App;
