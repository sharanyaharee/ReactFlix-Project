import React, { useState,useEffect } from "react";
import { useFetch } from "../Hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [data] = useFetch("search/movie", { query: query });
  const inputEl = useRef()

  useEffect(()=>{
    inputEl.current.focus()
  },[])
  return (
    <div className="searchBox">
      <input ref={inputEl}
        className="searchField no-outline"
        value={query}
        type="search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div className="resultBox">
        <ul>
          {data?.results?.map(({ backdrop_path, title, release_date, id }) => {
            return (             
                <li onClick={()=>navigate(`movie/${id}`)}   key={id}>
                <img src={`https://image.tmdb.org/t/p/w200${backdrop_path}`}  alt=""/>
                  <div>         
                  <h4>{title}</h4>
                  <p>{release_date.slice(0, 4)}</p>
                  </div>     
                </li>
              
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
