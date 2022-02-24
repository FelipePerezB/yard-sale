import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import LinkButton from '../components/LinkButton'
import Title from '../containers/Title'

function Login() {
  return (
    <>
      <Title />
      <Input>
        Email address
      </Input>
      <Input>
        Password
      </Input>
      <Button>
        Login
      </Button>
      <LinkButton>
        Forgot my password
      </LinkButton>
    </>    
  )
}

export default Login
