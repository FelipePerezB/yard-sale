import React from 'react'
import Button from '../components/Button'
import EmailImage from '../components/EmailImage'
import ResendMessage from '../components/ResendMessage'
import Information from '../containers/Information'
import Title from '../containers/Title'

function EmailSent() {
  return (
    <>
      <Title/>
      <Information
        title="¡Email has been sent!"
        text="Please check your inbox for instruccions on how to reset the password"
      />
      <EmailImage/>
      <Button>
        Login
      </Button>
      <ResendMessage
        spanText="Didn't recive the email?"
        aText="Resend"
      />

    </>
  )
}

export default EmailSent
