import { Text, Box, Flex, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { HeaderBar } from '../HeaderBar/HeaderBar'
import { NewForm } from './NewForm'
import { ContactMeForm } from './ContactMeForm'
import { ContextProvider } from './Context'
import { TextCard } from './TextCard'

// const FormContext = createContext({ submittedForm, setSubmittedForm })
// const {(items, setItems)} = useContext(Context)

// TODO : 1. edit alert message 2. edit contextnames 3. change fontsize on iPad
export const ContactMe = () => {
  return (
    <>
      <HeaderBar />
      <ContextProvider>
        <Flex
          bgColor={'#EDF9FE'}
          alignItems={'center'}
          justifyContent={'center'}
          height={('150vh', '100vh')}
          px={5}
          flexDir={'column'}
          gap={10}
        >
          <TextCard />
          <NewForm />
        </Flex>
      </ContextProvider>
    </>
  )
}
