import React from 'react'
import {initialState,reducer} from '../reducer/appReducer'
import { createContext } from 'react';
import { useReducer } from 'react';

export const AppContext = createContext()
 
const AppContextWrapper = ({children}) => {
  const[state,dispatch] = useReducer(reducer,initialState)
 const contextValue= {state,dispatch}
  return (
   <AppContext.Provider value={contextValue}>
    {children}
   </AppContext.Provider>
  )
}

export default AppContextWrapper
