import React from "react";
import { default as axios } from "axios";
import BookItem from "./BookItem";

const Books = ({ books, setBooks, searchValue }) => {
  const [genres, setGenres] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");

  React.useEffect(() => {
    if (books.length === 0) {
      axios
        .get("https://fakerapi.it/api/v1/books?_quantity=12")
        .then((response) => {
          setBooks(response.data.data);
          setGenres(
            response.data.data.map((item) => {
              return item.genre;
            })
          );
        });
    }
  }, []);

  React.useEffect(() => {
    setSearchText(searchValue);
  }, [searchValue]);

  return (
    <div className={"books"}>
      <div className="container">
        <div className="books-content">
          {books
            ? searchText !== ""
              ? books.map((item) => {
                  if (item.title.includes(searchText)) {
                    return (
                      <BookItem
                        key={item.id}
                        genre={item.genre}
                        title={item.title}
                        imgUrl={item.image}
                        id={item.id}
                        author={item.author}
                      />
                    );
                  }
                })
              : books.map((item) => {
                  return (
                    <BookItem
                      key={item.id}
                      genre={item.genre}
                      title={item.title}
                      imgUrl={item.image}
                      id={item.id}
                      author={item.author}
                    />
                  );
                })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Books;
