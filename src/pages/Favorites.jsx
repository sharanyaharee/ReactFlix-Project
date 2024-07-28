import React from 'react'
import { useContext } from 'react'
import Wrapper from '../components/Wrapper'
import { AppContext } from '../context/appContext'
import MovieCard from '../components/MovieCard'
const Favorites = () => {
  const {state} = useContext(AppContext)
  return (
    
      <Wrapper>
        <h2 className='sectionTitle'>Favorite Movies</h2>
        <div className="gallery">
            {state?.favorites.map(movie=>{
              return <MovieCard key={movie.id} movie={movie}/>
            })}
        </div>
      </Wrapper>
  
  )
}

export default Favorites
