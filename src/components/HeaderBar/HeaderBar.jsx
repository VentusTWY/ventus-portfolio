import { useNavigate, useLocation } from 'react-router-dom'
import { React, useState } from 'react'
import {
  Flex,
  Text,
  Spacer,
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  Image,
  AspectRatio,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { headerTitles } from './HeaderTitles'
import LogoVentus from '../../assets/img/logo3.png'

export const HeaderBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const navigate = useNavigate()
  const route = useLocation()
  return (
    <Flex
      bgColor={'#EDF9FE'}
      height={'60px'}
      p={'5'}
      color={'#001C55'}
      alignItems={'center'}
      fontWeight={550}
    >
      <Text
        onClick={() => {
          navigate('/')
        }}
        cursor='pointer'
        fontWeight={500}
        fontSize={'20px'}
      >
        𝓿𝓮𝓷𝓽𝓾𝓼 🍃
      </Text>
      {/* <AspectRatio width={['200px', '250px', '400px']} maxH={'620px'} ratio={16 / 9}>
        <Image src={LogoVentus} objectFit='cover' borderRadius={20} alt='logo' />{' '}
      </AspectRatio> */}
      <Spacer />
      <Flex gap={10} display={['none', 'none', 'inherit', 'inherit']}>
        {headerTitles.map(items => {
          const pathCheckArray = items.highlightPath
            .map(pathCheckArray => {
              if (route.pathname && route.pathname === pathCheckArray) {
                return true
              } else {
                return false
              } //TODO : refactor this part
            })
            .filter(x => x)

          let highlightedPath = pathCheckArray.length > 0 ? true : false
          return (
            <Text
              borderBottom={highlightedPath ? '3px solid' : {}}
              fontWeight={highlightedPath ? 700 : 450}
              cursor='pointer'
              fontSize={'20px'}
              onClick={() => {
                navigate(items.path)
              }}
            >
              {items.label}
            </Text>
          )
        })}
      </Flex>
      <IconButton
        variant={'ghost'}
        icon={<GiHamburgerMenu />}
        display={['inherit', 'inherit', 'none', 'none']}
        aria-label={'Toggle Sidebar'}
        onClick={() => {
          setNavbarOpen(true)
        }}
      />

      <Drawer //sidebar
        isOpen={navbarOpen}
        placement='right'
        onClose={() => {
          setNavbarOpen(!navbarOpen)
        }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex flexDirection={'column'} justifyContent={'flex-start'} gap={5} py={30} px={2}>
              {headerTitles.map(items => {
                const pathCheckArray = items.highlightPath
                  .map(pathCheckArray => {
                    if (route.pathname && route.pathname === pathCheckArray) {
                      return true
                    } else {
                      return false
                    }
                  })
                  .filter(x => x)
                let highlightedPath = pathCheckArray.length > 0 ? true : false
                return (
                  <Flex
                    borderRadius={'8px'}
                    fontWeight={highlightedPath ? 650 : 500}
                    color={'#001C55'}
                    gap={4}
                    px={5}
                    py={2}
                    alignItems={'center'}
                    flexDir={'row'}
                    _hover={{
                      color: 'white',
                      cursor: 'pointer',
                      boxShadow: 'xl',
                      bgGradient: 'linear(to-tl, blue.200, #2B528D)',
                    }}
                    onClick={() => {
                      navigate(items.path)
                    }}
                  >
                    {items.icon}
                    <Text cursor='pointer' fontSize={'20px'}>
                      {items.label}
                    </Text>
                  </Flex>
                )
              })}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
