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
  Skeleton,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { HeaderBar } from '../HeaderBar/HeaderBar'
import { SocialMedia } from '../SocialMedia/SocialMedia'
import ProfilePic from '../../assets/img/profilepic.JPG'
import { Slide, Fade, LightSpeed } from 'react-reveal'

import React from 'react'

export const Home = ({ isLoading }) => {
  const navigate = useNavigate()
  const { isOpen, onToggle, onOpen } = useDisclosure()
  return (
    <>
      <HeaderBar position='relative' />
      <Flex
        flexDir={['column', 'column', 'column', 'row-reverse', 'row-reverse']}
        bgColor={'#EDF9FE'}
        p={10}
        gap={['10', '20']}
        alignItems={'center'}
        minH={['100vh', '110vh', '110vh', '120vh', '105vh']}
        mt={['0', '0', '0', '-18', '-10']}
      >
        <Skeleton isLoaded={!isLoading}>
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
        </Skeleton>
        {/* <Spacer /> */}

        <Flex
          flexDir={'column'}
          justifyContent={'center'}
          gap={5}
          width={['100%', '100%', '100%', '60%']}
        >
          <Slide left duration={800} cascade>
            <Text fontSize={['28px', '30px', '55px', '80px']} fontWeight={750}>
              Wei Yang (Ventus)
            </Text>
            <Text
              fontSize={['20px', '25px', '35px']}
              fontWeight={650}
              color={'#7F8DAA'}
              borderRadius={'8px'}
            >
              Hi! I am a penultimate year studying Aeronautical Engineering in Imperial College
              London. I like to build cool stuffs and play music! 😀👨‍💻🎵
            </Text>
          </Slide>
          <LightSpeed left duration={1500} delay={500}>
            <SocialMedia />
          </LightSpeed>
        </Flex>
      </Flex>
      <Flex p={8} bgColor={'#EDF9FE'}>
        <Text as='i' fontSize={['15px', '20px', '22px', '25px']} fontWeight={550}>
          This website was built using React!
        </Text>
      </Flex>
    </>
  )
}
