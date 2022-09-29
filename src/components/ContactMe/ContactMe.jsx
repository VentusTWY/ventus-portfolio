import { Text, Box, Flex, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { HeaderBar } from '../HeaderBar/HeaderBar'
import { WIPCard } from '../WIPCard'
import { NewForm } from './NewForm'
import { ContactMeForm } from './ContactMeForm'
import { TestForm } from './TestForm'

export const ContactMe = () => {
  return (
    <>
      <HeaderBar />
      <Flex
        bgColor={'#EDF9FE'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'100vh'}
        p={5}
        flexDir={'column'}
        gap={10}
      >
        <Text color={'black'}>
          Feel free to reach out if you have any questions or just want a chat!
        </Text>
        <TestForm />
        {/* <NewForm /> */}
        {/* <ContactMeForm /> */}
      </Flex>
      {/* <WIPCard /> */}
    </>
  )
}
