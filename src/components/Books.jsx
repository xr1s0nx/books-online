import React from "react";
import { default as axios } from "axios";
import BookItem from "./BookItem";

const Books = ({ books, setBooks, searchValue, genres, setGenres }) => {
  const [searchText, setSearchText] = React.useState("");
  const [nowFilter, changeFilter] = React.useState("All");
  const [modal, changeModal] = React.useState(true);

  React.useEffect(() => {
    if (books.length === 0) {
      axios
        .get("https://fakerapi.it/api/v1/books?_quantity=12")
        .then((response) => {
          setBooks(response.data.data);
          setGenres([
            'All',
            ...new Set(response.data.data.map((item) => {
              return item.genre;
            })),
          ]);
        });
    }
  }, []);

  React.useEffect(() => {
    setSearchText(searchValue);
  }, [searchValue]);

  React.useEffect(() => {
    console.log(genres);
  }, [genres]);

  return (
    <div className={"books"}>
      <div className="container">
        <div className="filter">
          <p className="nowFilter">Genres: </p>
          {modal ? (
            <div className="modal">
              {genres.map((item, i) => (
                <button
                  className={item === nowFilter ? "active" : null}
                  key={i}
                  onClick={() => changeFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className="books-content">
          {books
            ? searchText !== ""
              ? books.map((item) => {
                  if (item.title.includes(searchText)) {
                    return nowFilter !== "All" ? (
                      item.genre === nowFilter ? (
                        <BookItem
                          key={item.id}
                          genre={item.genre}
                          title={item.title}
                          imgUrl={item.image}
                          id={item.id}
                          author={item.author}
                        />
                      ) : null
                    ) : (
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
                  return nowFilter !== "All" ? (
                    item.genre === nowFilter ? (
                      <BookItem
                        key={item.id}
                        genre={item.genre}
                        title={item.title}
                        imgUrl={item.image}
                        id={item.id}
                        author={item.author}
                      />
                    ) : null
                  ) : (
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
