import React, { useState } from "react";
import "./style.css";
import { search } from "../../../utils/utilities";

const Navigation = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };
  const searchReult = async () => {
    const results = await search(searchValue);
    setSearchResults(results.results);
  };
  return (
    <div className="navigation">
      <nav className="navs">
        <div>
          <h1 className="movie">
            Moovie
          </h1>
        </div>
        <div className="search">
          <input value={searchValue} onChange={handleInput} type="text" placeholder="Search movies"/>
          <button onClick={searchReult}>Search</button>
        </div>
        <div className="links">
          <a href="Home"><li>Home</li></a>
          <li>List</li>
          <button>Sign in</button>
        </div>
      </nav>
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((movie) => (
            <div key={movie.id} className="search-result">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Navigation;