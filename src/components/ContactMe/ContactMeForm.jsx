import { useForm, ValidationError } from '@formspree/react'
import { Text, Box, Flex, Input, Button } from '@chakra-ui/react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'

export const ContactMeForm = () => {
  const [state, handleSubmit] = useForm('mnqrpkla')

  if (state.succeeded) {
    console.log('hii')
    return <Text>Thank you for your message! You will receive a reply shortly!</Text>
  }

  return (
    <Flex borderColor={'#001C55'} borderWidth={'thick'} width={'80%'} p={20} borderRadius={8}>
      <FormControl onSubmit={handleSubmit} isRequired width={'66vw'} my={'-40px'}>
        <FormLabel mt={'-10px'}>Email address</FormLabel>
        <Input borderColor={'#001C55'} borderWidth={'medium'} type='email' id='email' />
        {/* <ValidationError prefix='Email' field='email' errors={state.errors} /> */}
        <FormHelperText my={'5px'}>
          Don't worry, your email will not be shared out :D
        </FormHelperText>

        <FormLabel my={'20px'}>Name</FormLabel>
        <Input borderColor={'#001C55'} borderWidth={'medium'} type='name' id='name' />

        <FormLabel my={'20px'}>Message</FormLabel>
        <Input borderColor={'#001C55'} borderWidth={'medium'} type='message' id='message' />

        <Button
          width={'100%'}
          mt={'20px'}
          bgColor={'#001C55'}
          color={'white'}
          type='submit'
          disabled={state.submitting}
          _hover={{
            color: 'white',
            cursor: 'pointer',
            bgGradient: 'linear(to-tl, blue.200, #2B528D)',
          }}
          // onClick={console.log('abc', handleSubmit)}
        >
          Submit
        </Button>
      </FormControl>
      {/* </form> */}
    </Flex>
  )
}
