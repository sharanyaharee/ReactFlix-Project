import React from "react";
import MovieCard from "./MovieCard";
import { useState,useEffect } from "react";
import Wrapper from "./Wrapper";
//import { popularMovies } from "../utils/data";
import axios from "axios";
import Pagination from "./Pagination";

function Main() {
  
  const [popMovies, setPopMovies] =useState([]);
  const [page,setPage]= useState(1);
  const [totalPages,setTotalPages] = useState(null);

useEffect(()=>{axios( {method:"get",
url:  "https://api.themoviedb.org/3/movie/popular",
params:{
api_key : "e3ef60114f3455d412ea55db83f798b2",
page:page
},
}).then(({data}) => {setPopMovies(data.results); 
setTotalPages(data.total_pages)})},[page]);
   console.log("jnwhgugWV",totalPages)
  


  return (
    <main>
      <div className="movieSlider">
        <p style={{ textAlign: "center" }}>Movie Slider Goes Here</p>
        <Wrapper>
          <h2 className="sectionTitle">Popular Movies </h2>
          <div className="gallery">
           {popMovies.map(movie =>  <MovieCard key={movie.id}  movie={movie} />)}
          </div>
          <Pagination page={page} setPage={setPage} totalPages={totalPages}  />
        </Wrapper>
      </div>
    </main>
  );
}



export default Main;
