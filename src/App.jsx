import { useState } from "react";
import Title from "./components/Title";
import "/src/app.css";

export default function App() {
  const [titles, setTitles] = useState([]);
  const [contentsArray, setContentsArray] = useState([]);
  const defaultTitleData = {
    title: "",
    content: "",
  };
  const [titleData, setTitleData] = useState(defaultTitleData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitles((titlesArray) => [...titlesArray, titleData.title.trim()]);
    setContentsArray((contentsArray) => [...contentsArray, titleData.content.trim()]);
    setTitleData(defaultTitleData);
  };

  const removeTitle = (indexToRemove) => {
    setTitles((titlesArray) =>
      titlesArray.filter((_, i) => i !== indexToRemove)
    );
    setContentsArray((contentsArray) =>
      contentsArray.filter((_, i) => i !== indexToRemove)
    );
  };

  const updateTitle = (index, newTitle) => {
    setTitles((titlesArray) =>
      titlesArray.map((title, i) => (i === index ? newTitle : title))
    );
  };

  const changeTitleData = (key, newValue) => {
    setTitleData((data) => ({ ...data, [key]: newValue }));
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
              value={titleData.title}
              onChange={(e) => changeTitleData("title", e.target.value)}
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
              value={titleData.content}
              onChange={(e) => changeTitleData("content", e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="title-container">
          {titles.length > 0 && (
            <>
              <h2>I titoli sono:</h2>
              <section className="list">
                {titles.map((title, index) => (
                  <article key={`title${index}`} className="title-item">
                    <Title
                      title={title}
                      onUpdate={(newTitle) => updateTitle(index, newTitle)}
                      onDelete={() => removeTitle(index)}
                    />
                    <p>{contentsArray[index]}</p>
                  </article>
                ))}
              </section>
            </>
          )}
        </div>
      </section>
    </>
  );
}
