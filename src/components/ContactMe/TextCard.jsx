import { Text, Box, Flex, Input, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { Context } from './Context'

export const TextCard = () => {
  const { items, setItems } = useContext(Context)
  return (
    <>
      {items && (
        <Text
          mt={'-5%'}
          width={'90%'}
          fontSize={['20px', '25px', '25px', '25px']}
          fontWeight={550}
          px={10}
          color={'black'}
          justifyContent={'center'}
          alignItems={'center'}
          textAlign={'center'}
        >
          Feel free to reach out if you have any questions or just want a chat!
        </Text>
      )}
    </>
  )
}
