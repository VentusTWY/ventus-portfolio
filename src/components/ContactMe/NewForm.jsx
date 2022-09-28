import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import { Text, Box, Flex, Input, Button } from '@chakra-ui/react'
// {
/* <html>
<head>
<style>
.flex-container {
display: flex;
background-color: DodgerBlue;
}

.flex-container > div {
background-color: #f1f1f1;
margin: 10px;
padding: 20px;
font-size: 30px;
}
</style>
</head>
</html> */
// }

export const NewForm = () => {
  const [state, handleSubmit] = useForm('mnqrpkla')
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <Flex borderColor={'#001C55'} borderWidth={'thick'} width={'80%'} p={20} borderRadius={8}>
      <form class='form-inline' onSubmit={handleSubmit}>
        <label style={{ color: 'red' }} mt={'-10px'} htmlFor='email'>
          Email Address
        </label>
        <input
          borderColor={'#001C55'}
          borderWidth={'medium'}
          id='email'
          type='email'
          name='email'
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <label mx={'-10px'} htmlFor='message'>
          Message{' '}
        </label>
        <input id='message' name='message' type='message' />
        <ValidationError prefix='Message' field='message' errors={state.errors} />

        <button>Submit</button>
      </form>
    </Flex>
  )
}
