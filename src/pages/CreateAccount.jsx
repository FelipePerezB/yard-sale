import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Title from '../containers/Title'
import Main from "../containers/Main"
import useReedirect from '../hooks/useReedirect'

function CreateAccount() {
  return (
    <Main>
      <Title />
      <Input>
        Name
      </Input>
      <Input>
        Email address
      </Input>
      <Input>
        Password
      </Input>
      <Button buttonFunction={()=>{useReedirect("/")}} >
        Create account
      </Button>
    </Main>
  )
}

export default CreateAccount
