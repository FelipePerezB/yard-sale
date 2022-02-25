import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Subtitle from '../components/Subtitle'
import Header from '../containers/Header'
import Main from '../containers/Main'
import Space from "../components/Space"

function MyAccount() {
  return (
    <>
      <Header/>
      <Main type='main-header'>
        <Subtitle>
          My account
        </Subtitle>
        <Input>
          Name
        </Input>
        <Input type="email">
          Email address
        </Input>
        <Input type="password">
          Password
        </Input>
        <Space/>
        <Button type='button drop-button'>
          Save
        </Button>
      </Main>
    </>
    
  )
}

export default MyAccount
