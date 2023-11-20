import { Text, Box, Flex, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { HeaderBar } from '../HeaderBar/HeaderBar'
import { NewForm } from './NewForm'
import { ContextProvider } from './Context'
import { TextCard } from './TextCard'

export const ContactMe = () => {
  return (
    <>
      <HeaderBar />
      <ContextProvider>
        {/* <LightSpeed> */}
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
        {/* </LightSpeed> */}
      </ContextProvider>
    </>
  )
}
