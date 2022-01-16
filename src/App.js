import "./App.css";
import { useState, useEffect } from "react";
import DataTable from "./DataTable";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      {/* <div>
        <button className="button1" onClick={() => setResourceType("posts")}>
          posts
        </button>
        <button className="button2" onClick={() => setResourceType("users")}>
          users
        </button>
        <button className="button3" onClick={() => setResourceType("comments")}>
          commments
        </button>
      </div>
      <h1>{resourceType}</h1> */}
      <h1>WEED DATA 🌿</h1>
      <DataTable />
      <h2>Created by Devin Dennis</h2>
      <span>
      <p><a href="https://github.com/Raccoonee">GitHub</a></p>
      <p><a href="https://www.youtube.com/channel/UCIwswzNBnEwyWFRNBZ_lbsw">Youtube</a></p>
      </span>
      
    </>
  );
}

export default App;
