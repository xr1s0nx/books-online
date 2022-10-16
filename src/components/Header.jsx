import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ searchText, changeSearchText }) => {
  const [nowPage, changePage] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    changePage(window.location.pathname);
  }, [location]);

  return (
    <header className={"header"}>
      <div className="container">
        <div className="header-content">
          <Link to={"/"} className={"logo"}>
            #12книг
          </Link>
          {nowPage !== "/book" ? (
            <input
              value={searchText}
              onChange={(e) => changeSearchText(e.target.value)}
              type="text"
              className="search"
              placeholder={"Поиск книг"}
            />
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
