import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Layout } from './components/Layout/Layout'
import { More } from './components/More/More'
import { TechnologyExperience } from './components/TechnologyExperience/TechnologyExperience'
import { ContactMe } from './components/ContactMe/ContactMe'

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/more' element={<More />}></Route>
        <Route path='/tech' element={<TechnologyExperience />}></Route>
        <Route path='/contactme' element={<ContactMe />}></Route>
      </Routes>
    </ChakraProvider>
  )
}

export default App
