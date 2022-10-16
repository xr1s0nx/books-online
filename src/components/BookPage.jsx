import React from "react";
import { useNavigate } from "react-router-dom";

const BookPage = ({ books }) => {
  const [nowBook, setBook] = React.useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    const id = parseInt(window.location.search.substring(1));
    if (books.length === 0) {
      navigate("/");
    }
    setBook(
      books.find((book) => {
        return book.id === id;
      })
    );
  }, []);

  return (
      <div className={'bookItem'}>
        <div className="container">
          <div className="description-wrap">
              <img src={nowBook.image} alt=""/>
              <div className="description">
                  <p className="title">{nowBook.title}</p>
                  <p className={'description-text'}>{nowBook.description}</p>
                  <p className="author">
                      <span>Author: </span> {nowBook.author}
                  </p>
                  <p className="genre">
                      <span>Genre: </span>
                      {nowBook.genre}
                  </p>
              </div>
          </div>
        </div>
      </div>
  )
};

export default BookPage;
