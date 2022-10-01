import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, flexbox } from '@chakra-ui/react'
import { Text, Box, Flex, Input, Button } from '@chakra-ui/react'
import './Form.css'

export const NewForm = () => {
  const [state, handleSubmit] = useForm('mnqrpkla')
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <Flex borderColor={'#001C55'} borderWidth={'thick'} width={'80%'} p={10} borderRadius={8}>
      <form className='box' onSubmit={handleSubmit}>
        <label class='labels' htmlFor='name'>
          Name
        </label>
        <input id='name' name='name' type='shorttext' />
        <ValidationError prefix='name' field='name' errors={state.errors} />
        <label class='labels' htmlFor='email'>
          Email Address
        </label>
        <input
          borderColor={'#001C55'}
          borderWidth={'medium'}
          id='email'
          type='shorttext'
          name='email'
          mx='20px'
        />
        {/* </div> */}
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        {/* </div> */}
        {/* <div className='formitems'> */}
        <label class='labels' htmlFor='message'>
          Message
        </label>
        <textarea id='message' name='message' type='message' />
        <ValidationError prefix='Message' field='message' errors={state.errors} />
        {/* </div> */}

        {/* <div className='formbutton'> */}
        <button class='button'>Submit</button>
        {/* </div> */}
      </form>
    </Flex>
  )
}
