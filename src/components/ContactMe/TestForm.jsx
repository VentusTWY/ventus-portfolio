// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, flexbox } from '@chakra-ui/react'
import { Text, Box, Flex, Input, Button } from '@chakra-ui/react'

export const TestForm = () => {
  const [state, handleSubmit] = useForm('mnqrpkla')
  if (state.succeeded) {
    console.log('abcccc')
    return <p>Thanks for joining!</p>
  }
  return (
    <FormControl onSubmit={handleSubmit}>
      <FormLabel htmlFor='email'>Email Address</FormLabel>
      <Input type='email' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <FormLabel htmlFor='message'>Message</FormLabel>
      <Input type='message' />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <Button type='submit' disabled={state.submitting}>
        Submit
      </Button>
    </FormControl>
  )
}
