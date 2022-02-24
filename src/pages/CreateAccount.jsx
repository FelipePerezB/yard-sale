import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Title from '../containers/Title'

function CreateAccount() {
  return (
    <>
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
    </>
  )
}

export default CreateAccount
