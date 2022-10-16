import React from "react";
import { Link } from "react-router-dom";

const BookItem = ({ id, title, imgUrl, author, genre }) => {

  return (
    <Link to={`/book?${id}`} className={"book"}>
      <div className="imgWrap">
        <img src={imgUrl} alt="" />
      </div>
      <div className="description">
        <p className="book-title">{title}</p>
        <p className="author">
          <span>Author: </span> {author}
        </p>
        <p className="genre">
          <span>Genre: </span>
          {genre}
        </p>
      </div>
    </Link>
  );
};

export default BookItem;
