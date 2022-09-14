import {
  Text,
  Box,
  Flex,
  Image,
  Spacer,
  Center,
  AspectRatio,
  ScaleFade,
  useDisclosure,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { HeaderBar } from '../HeaderBar/HeaderBar'
import { SocialMedia } from '../SocialMedia/SocialMedia'
import ProfilePic from '../../assets/img/profilepic.JPG'
import { Slide, Fade, Flip, LightSpeed, Zoom } from 'react-reveal'

import React from 'react'

export const Layout = () => {
  const navigate = useNavigate()
  const { isOpen, onToggle, onOpen } = useDisclosure()
  return (
    <>
      <HeaderBar />
      <Flex
        flexDir={['column', 'column', 'column', 'row-reverse', 'row-reverse']}
        bgColor={'#EDF9FE'}
        p={10}
        gap={3}
        alignItems={'center'}
        //TODO : fix vh and spacer
      >
        <Fade mirror delay={['0', '1000']}>
          <AspectRatio
            justifyContent={'center'}
            alignSelf={'center'}
            width={['200px', '250px', '400px']}
            maxH={'620px'}
            mr={['0px', '0px', '0px', '0px', '75px']}
            ratio={9 / 16}
          >
            <Image src={ProfilePic} borderRadius={20} objectFit='cover' alt='display-picture' />
          </AspectRatio>
        </Fade>
        <Spacer />

        <Flex
          flexDir={'column'}
          justifyContent={'center'}
          gap={5}
          width={['100%', '100%', '100%', '60%']}
        >
          <Slide left duration={800} cascade>
            <Text fontSize={['30px', '80px']} fontWeight={750}>
              Wei Yang (Ventus)
            </Text>
            <Text
              fontSize={['20px', '35px']}
              fontWeight={650}
              color={'#7F8DAA'}
              // borderColor={'white'}
              // borderWidth={'3px'}
              borderRadius={'8px'}
            >
              Hi, I am Ventus from Malaysia, currently in my penultimate year studying Aeronautical
              Engineering in Imperial College London.
            </Text>
          </Slide>
          <LightSpeed left duration={1500} delay={500}>
            <SocialMedia />
          </LightSpeed>
        </Flex>
      </Flex>
    </>
  )
}
