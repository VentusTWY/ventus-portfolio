import { Text, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { HeaderBar } from '../HeaderBar/HeaderBar'

export const ContactMe = () => {
  return (
    <>
      <HeaderBar />
      <Flex
        bgColor={'#EDF9FE'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'90vh'}
        width={'100vw'}
      >
        <Text color={'7F8DAA'} fontSize={'50px'} fontWeight={500}>
          Work In Progress.<br></br> Something interesting is coming soon 😃
        </Text>
      </Flex>
    </>
  )
}
