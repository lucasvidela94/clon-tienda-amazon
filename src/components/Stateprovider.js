import React, { createContext, useContext, useReducer } from "react"

//Se prepara la capa de datos
export const StateContext = createContext()

//Contiene todos los datos y se provee la misma capa de datos
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

//Se extrae la informacion de la capa de daots
export const useStateValue = () => useContext(StateContext)
