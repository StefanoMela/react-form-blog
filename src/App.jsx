import { useState } from "react";
import "/src/app.css";

import { MdDeleteForever } from "react-icons/md";

function App() {
  const [titles, setTitles] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [contentsArray, setContentsArray] = useState([]);
  const [newContent, setNewContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitles((titlesArray) => [...titlesArray, newTitle.trim()]);
    setNewTitle("");

    setContentsArray((contentsArray) => [...contentsArray, newContent.trim()]);
    setNewContent("");
  };

  const deleteItem = (itemIndex) => {
    setTitles((titlesArray) =>
      titlesArray.filter((_, index) => index !== itemIndex)
    );
    setContentsArray((contentsArray) =>
      contentsArray.filter((_, index) => index !== itemIndex)
    );
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
          </div>
          <div className="form-element content">
            <label htmlFor="content">Contenuto</label>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="title-container">
          <h3>I titoli sono:</h3>
          <div className="list">
            {titles.map((title, index) => (
              <div key={index} className="item-container">
                <h4>
                  {title} 
                  <MdDeleteForever onClick={() => deleteItem(index)} />
                </h4>
                <p>{contentsArray[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;