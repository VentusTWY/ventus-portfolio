import { Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Home } from './components/Home/Home'
import { More } from './components/More/More'
import { TechnologyExperience } from './components/TechnologyExperience/TechnologyExperience'
import { ContactMe } from './components/ContactMe/ContactMe'

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/more' element={<More />}></Route>
        <Route path='/tech' element={<TechnologyExperience />}></Route>
        <Route path='/contactme' element={<ContactMe />}></Route>
      </Routes>
    </ChakraProvider>
  )
}

export default App
