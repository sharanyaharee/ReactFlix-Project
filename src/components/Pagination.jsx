import React from 'react'
import { AppContext } from '../context/appContext'
import { useContext } from 'react'

const Pagination = ({totalPages}) => {

  const {state:{page},dispatch} = useContext(AppContext)
    const handleNextPage =()=>{
       // setPage((prev)=>prev+1);
dispatch(
  {type:"NEXT_PAGE"}
)
    }
    const handlePrevPage =()=>{
//setPage((prev)=>prev-1);
dispatch({type:"PREV_PAGE"})
    }
    
  return (
    <div className="pagination">
        <button disabled={page <= 1} onClick={handlePrevPage}>Prev</button>
        <p>Page {page} of {totalPages}</p>
        <button disabled ={page==37835} onClick={handleNextPage}>Next</button>
      
    </div>
  )
}

export default Pagination
