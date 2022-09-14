import React from 'react'
import { Text, Box, Flex, Image, Spacer, IconButton } from '@chakra-ui/react'
import HeadShake from 'react-reveal/HeadShake'
import { SocialMediaComponents } from './SocialMediaComponents'
import { Roll } from 'react-reveal'
import { useState } from 'react'

export const SocialMedia = () => {
  const [onHover, setOnHover] = useState(false)
  return (
    <>
      <Flex
        height={['33px', '50px']}
        gap={[3, 5]}
        textOverflow={'wordbreak'}
        overflowWrap={'break-word'}
      >
        {SocialMediaComponents.map(components => {
          return (
            <>
              <Flex
                _hover={{
                  color: 'red.500',
                  fontSize: ['28px', '53px'],
                }}
                width={['30px', '55px']}
                onMouseEnter={() => setOnHover(true)}
                onMouseLeave={() => setOnHover(false)}
                fontSize={['25px', '50px']}
                color={components.color}
                onClick={() => {
                  window.open(components.link)
                }}
                cursor='pointer'
              >
                {components.icon}
              </Flex>
            </>
          )
        })}
      </Flex>
    </>
  )
}
