import React from 'react'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'
import {AppContext} from '../context/appContext'
import { useContext } from "react";
import SearchBox from './SearchBox'

function Header() {
  const {state} = useContext(AppContext)
  return (
    <header>
       <Wrapper>
            <div className="appHeader">
                <div className="headerLeft">
                  <Link to="/">
                    <h1>ReactFlix</h1>
                  </Link>
                  <Link to="/favorites">
                    <div className='favCount'>
                      <span className='count'> {state.favorites.length}</span>
                       Favorites
                    </div>
                    </Link>
                </div>
              <SearchBox/>
            </div>
     </Wrapper> 
      
    </header>
  )
}

export default Header
