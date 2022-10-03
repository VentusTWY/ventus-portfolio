import React, { useState } from 'react'

export const Context = React.createContext()
export const ContextProvider = ({ children }) => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return <Context.Provider value={{ formSubmitted, setFormSubmitted }}>{children}</Context.Provider>
}
