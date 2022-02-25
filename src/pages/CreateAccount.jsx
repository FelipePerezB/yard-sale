import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Title from '../containers/Title'
import Main from "../containers/Main"

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
      <Button>
        Create account
      </Button>
    </Main>
  )
}

export default CreateAccount
