import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Books from "./components/Books";
import BookPage from "./components/BookPage";
import Header from "./components/Header";
import React from "react";

function App() {
  const [books, setBooks] = React.useState([]);
  const [searchText, changeSearchText] = React.useState("");
  const [genres, setGenres] = React.useState([]);

  return (
    <div className={"App"}>
      <Header searchText={searchText} changeSearchText={changeSearchText} />
      <Routes>
        <Route
          path={"/"}
          element={
            <Books books={books} setBooks={setBooks} searchValue={searchText} genres={genres} setGenres={setGenres} />
          }
        />
        <Route path={"/book"} element={<BookPage books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
