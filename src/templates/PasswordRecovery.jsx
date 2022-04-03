import React from 'react'
import Button from '@components/Button'
import Information from '../containers/Information'
import Input from '@components/Input'
import LinkButton from '@components/LinkButton'
import Title from '../containers/Title'
import Main from '../containers/Main'
import useReedirect from '../hooks/useReedirect'

function PasswordRecovery() {
  return (
    <Main>
      <Title />
      <Information
       title="Password recovery" 
       text="Inform the email address used to create your account"
      />
      <Input type="email">
        Email address
      </Input>
      <Button buttonFunction={()=>{useReedirect(" /send-email")}} >
        Submit
      </Button>
      <LinkButton href="/login">
        Back to login
      </LinkButton>
    </Main>
    
  )
}

export default PasswordRecovery
