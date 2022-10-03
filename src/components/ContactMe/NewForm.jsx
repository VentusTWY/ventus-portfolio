import './Form.css'
import React from 'react'
import {
  Text,
  Box,
  Flex,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { useForm, ValidationError } from '@formspree/react'
import { useContext } from 'react'
import { Context } from './Context'
import { Fade } from 'react-reveal'

export const NewForm = () => {
  const [state, handleSubmit] = useForm('mnqrpkla')

  const { formSubmitted, setFormSubmitted } = useContext(Context)

  // TODO : add effects
  if (state.succeeded) {
    setFormSubmitted(true)
    return (
      // <Fade top>
      <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='35%'
        width={['100%', '80%', '80%', '80%']}
        borderRadius={8}
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize={['15px', '20px']}>
          Your message has been sent!
        </AlertTitle>
        <AlertDescription
          justifyContent={'center'}
          my={1}
          fontSize={['12px', '18px']}
          maxWidth={['55%', '55%', '100%']}
        >
          Thank you for your message. Ventus will get back to you soon! 🙏💛
        </AlertDescription>
      </Alert>
      // </Fade>
    )
  }

  return (
    <Flex
      borderColor={'#001C55'}
      borderWidth={'thick'}
      width={'80%'}
      p={[5, 10]}
      borderRadius={8}
      height={'70%'}
    >
      <form className='box' onSubmit={handleSubmit}>
        <label class='labels' htmlFor='name'>
          Name
        </label>
        <input id='name' name='name' type='name' required />
        <ValidationError prefix='name' field='name' errors={state.errors} />

        <label class='labels' htmlFor='email'>
          Email Address
        </label>
        <input
          borderColor={'#001C55'}
          borderWidth={'medium'}
          id='email'
          type='email'
          name='email'
          mx='20px'
          required
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />

        <label class='labels' htmlFor='message'>
          Message
        </label>
        <textarea id='message' name='message' type='message' required />
        <ValidationError prefix='Message' field='message' errors={state.errors} />

        <button class='button'>Submit</button>
      </form>
    </Flex>
  )
}
