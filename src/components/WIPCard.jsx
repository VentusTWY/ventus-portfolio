import { Text, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Slide, Fade, Flip, LightSpeed, Zoom } from 'react-reveal'

export const WIPCard = () => {
  const { isOpen, onToggle, onOpen } = useDisclosure()
  return (
    <Flex
      bgColor={'#EDF9FE'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100vh'}
      p={5}
    >
      <Fade top>
        <Text
          color={'7F8DAA'}
          fontSize={['20px', '25px', '30px', '40px', '50px']}
          fontWeight={500}
          justifyContent={'center'}
          alignItems={'center'}
          textAlign={'center'}
          // width={'90vw'}
        >
          🛠️ Site under development 🛠️
          <br /> Something interesting is coming soon 😃
        </Text>
      </Fade>
    </Flex>
  )
}
