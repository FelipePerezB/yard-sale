import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import LinkButton from '../components/LinkButton'
import Space from '../components/Space'
import Title from '../containers/Title'
import Main from "../containers/Main"


function Login() {
  return (
    <>
      <Main>
        <Title />
        <Input type="email">
          Email address
        </Input>
        <Input type="password">
          Password
        </Input>
        <Button>
          Login
        </Button>
        <LinkButton href="/password-recovery">
          Forgot my password
        </LinkButton>
        <Space/>
        <Button type='button-white drop-button'>
          Sign up
        </Button>
      </Main>
    </>    
  )
}

export default Login
