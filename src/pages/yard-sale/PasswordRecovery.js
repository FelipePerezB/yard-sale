import React from 'react'
import Button from '@components/Button'
import Information from '@containers/Information'
import Input from '@components/Input'
import LinkButton from '@components/LinkButton'
import Title from '@containers/Title'
import Main from '@containers/Main'
import useReedirect from '@hooks/useReedirect'
import Head from 'next/head'

function PasswordRecovery() {
  return (
    <>
      <Head>
        <title>Password recovery | Yard Sale</title>
      </Head>

      <Main>
        <Title />
        <Information
        title="Password recovery" 
        text="Inform the email address used to create your account"
        />
        <Input type="email">
          Email address
        </Input>
        <Button buttonClass="button" url="SendEmail">
          Submit
        </Button>
        <LinkButton href="/yard-sale/login">
          Back to login
        </LinkButton>
      </Main>
    </>
    
  )
}

export default PasswordRecovery
