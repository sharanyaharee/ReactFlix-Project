import React from 'react'
import {useContext} from 'react'
import {AppContext} from '../context/appContext'
import HeartFill from '../assets/heart-filled.svg'
import HeartLine from '../assets/heart-lined.svg'

const FavoriteButton = ({movie}) => {
  const {state,dispatch} = useContext(AppContext)

  const fav = state.favorites.some(item=>item.id=== movie.id)

const handleFavorite =()=>{

  fav ?dispatch({
    type:"REMOVE_FAVORITE",
    payload:movie.id}
    ):dispatch({
    type:"ADD_FAVORITE",
    payload:movie}
  )

}


  return (
    <div className="favButton" onClick={handleFavorite}>
      {
        fav? <img src={HeartFill} alt="" width={24}/>: <img src={HeartLine} alt="" width={24}/>
      }
     
     
    </div>
  )
}

export default FavoriteButton
