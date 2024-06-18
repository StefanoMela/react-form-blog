import { useState } from "react";
import "/src/app.css";

import { MdDeleteForever } from "react-icons/md";

function App() {
  const [titles, setTitles] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitles((titlesArray) => [...titlesArray, newTitle]);
    setNewTitle("");
  };

  const deleteItem = (itemIndex) => {
    setTitles(titlesArray => titlesArray.filter((_, index) => index !== itemIndex));
  };

  return (
    <>
      <section className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <label htmlFor="title" className="title">
              Titolo Post
            </label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
            <button>Submit</button>
          </div>
        </form>
        <div className="title-container">
          I titoli sono:
          <ul className="list">
            {titles.map((title, index) => (
              <li key={index}>{title} <MdDeleteForever onClick={() => deleteItem(index)} /></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
