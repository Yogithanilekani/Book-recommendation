import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Self_help: [
    {
      name: "12 Rules For Life by Jordan Peterson",
      rating: "5/5"
    },
    {
      name: "Life's Amazing Secrets by Gaur Gopal Das",
      rating: "5/5"
    },
    {
      name: "Meditations by Marcus Aurelius",
      rating: "4.5/5"
    },
    {
      name: "Think And Grow Rich by Napoleon Hill",
      rating: "4.5/"
    },
    {
      name: "The Courage To Be Disliked by Ichiro Kishimi & Fumitake Koga",
      rating: "5/5"
    }
  ],
  Business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    }
  ],
  Fiction: [
    { name: "Lord of the Flies by William Golding", rating: "4/5" },
    {
      name: "Harry Potter and the Chamber of Secrets by J.K. Rowling",
      rating: "3.5/5"
    },
    {
      name: "Never Lie by Freida McFadden",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Self_help");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <body>
      <div style={{ backgroundColor: "gray" }} className="App">
        <h1> 📚 Goodbooks Recommendation</h1>
        <p style={{ fontSize: "smaller" }}>
          {" "}
          Checkout my favorite books. Select a genre to get started{" "}
        </p>

        <div>
          {Object.keys(bookDB).map((genre) => (
            <button
              onClick={() => genreClickHandler(genre)}
              style={{
                cursor: "pointer",
                background: "lawngreen",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem"
              }}
            >
              {genre}
            </button>
          ))}
        </div>
        <hr />
        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {bookDB[selectedGenre].map((book) => (
              <li
                key={book.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                {" "}
                <div style={{ fontSize: "larger" }}> {book.name} </div>
                <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </body>
  );
}
