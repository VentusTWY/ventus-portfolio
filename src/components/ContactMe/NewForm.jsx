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
        {/* style='display: flex; flex-direction: column;' */}
        {/* <div className='formitems'> */}
        <label style={{ mx: '-10px' }} htmlFor='name'>
          Name
        </label>
        {/* <div classname='input'> */}
        <input id='name' name='name' type='name' />
        <ValidationError prefix='name' field='name' errors={state.errors} />
        {/* </div> */}
        {/* </div> */}
        {/* <div className='formitems'> */}
        <label mt={'-10px'} htmlFor='email'>
          Email Address
        </label>
        {/* <div classname='input'> */}
        <input
          borderColor={'#001C55'}
          borderWidth={'medium'}
          id='email'
          type='email'
          name='email'
          mx='20px'
        />
        {/* </div> */}
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        {/* </div> */}
        {/* <div className='formitems'> */}
        <label style={{ mx: '-10px' }} htmlFor='message'>
          Message
        </label>
        <input id='message' name='message' type='message' />
        <ValidationError prefix='Message' field='message' errors={state.errors} />
        {/* </div> */}

        <div className='formbutton'>
          <button>Submit</button>
        </div>
      </form>
    </Flex>
  )
}
