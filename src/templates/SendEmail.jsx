import React from 'react'
import Button from '@components/Button'
import EmailImage from '@components/EmailImage'
import ResendMessage from '@components/ResendMessage'
import Information from '../containers/Information'
import Main from '../containers/Main'
import Title from '../containers/Title'
import useReedirect from '../hooks/useReedirect'

function SendEmail() {
  return (
    <Main>
      <Title/>
      <Information
        title="¡Email has been sent!"
        text="Please check your inbox for instruccions on how to reset the password"
      />
      <EmailImage/>
      <Button buttonFunction={()=>{useReedirect(" /login")}} >
        Login
      </Button>
      <ResendMessage
        spanText="Didn't recive the email?"
        aText="Resend"
      />

    </Main>
  )
}

export default SendEmail
