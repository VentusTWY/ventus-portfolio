// import { createContext, useState } from 'react'

// const [submittedForm, setSubmittedForm] = useState(undefined)

// FormContext = createContext({ submittedForm, setSubmittedForm })

// const FormContextProvider = ({ children }) => {
//   return (
//     <FormContext.Provider value={{ submittedForm, setSubmittedForm }}>
//       {...children}
//     </FormContext.Provider>
//   )
// }

// export { FormContext, FormContextProvider }

import React, { useState } from 'react'

export const Context = React.createContext()
export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState(true)

  return <Context.Provider value={{ items, setItems }}>{children}</Context.Provider>
}
