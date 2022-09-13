import { Text, Flex } from '@chakra-ui/react'
import React from 'react'

export const WIPCard = () => {
  return (
    <Flex
      bgColor={'#EDF9FE'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'90vh'}
      width={'100vw'}
      p={5}
    >
      <Text
        color={'7F8DAA'}
        fontSize={['20px', '30px', '50px']}
        fontWeight={500}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
      >
        🛠️ Site under development.🛠️
        <br /> Something interesting is coming soon 😃
      </Text>
    </Flex>
  )
}
