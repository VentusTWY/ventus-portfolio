import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Text, Box, Flex, Image, Spacer, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export const SocialMedia = () => {
  const navigate = useNavigate()
  return (
    <>
      <Flex gap={5}>
        <IconButton
          icon={<FaGithub />}
          style={{
            color: '#181717',
            fontSize: '50px',
            cursor: 'pointer',
          }}
          onClick={() => {
            window.open(`https://github.com/VentusTWY`)
          }}
        />

        <FaLinkedinIn
          // borderRadius={'50%'}
          // border-color={'#red'}
          // border-width={'10px'}
          // bgColor={'#0077B5'}
          style={{
            color: '#0077B5',
            fontSize: '50px',
            cursor: 'pointer',
          }}
          onClick={() => {
            window.open(`https://www.linkedin.com/in/ventus-twy/`)
          }}
        />
        <SiGmail
          style={{
            color: '#D14836',
            fontSize: '50px',
            cursor: 'pointer',
          }}
          onClick={() => {
            window.open(`mailto:ventustwy21@gmail.com`)
          }}
        />
        <FaInstagram
          style={{
            color: '#E4405F',
            fontSize: '50px',
            cursor: 'pointer',
          }}
          onClick={() => {
            window.open(`https://www.instagram.com/ventustan/`)
          }}
        />

        <FaFacebookF
          style={{
            color: '#1877F2',
            fontSize: '50px',
            cursor: 'pointer',
          }}
          onClick={() => {
            window.open(`https://www.facebook.com/K39Ventus`)
          }}
        />
      </Flex>
    </>
  )
}
