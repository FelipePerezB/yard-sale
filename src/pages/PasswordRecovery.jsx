import React from 'react'
import Button from '../components/Button'
import Information from '../containers/Information'
import Input from '../components/Input'
import LinkButton from '../components/LinkButton'
import Title from '../containers/Title'
import InformationTitle from '../components/InformationTitle'
import InformationText from '../components/InformationText'

function PasswordRecovery() {
  return (
    <>
      <Title />
      <Information>
        <>
          <InformationTitle>
            Password recovery
          </InformationTitle>
          <InformationText>
            Inform the email address used to create your account
          </InformationText>
        </>
      </Information>
      <Input>
        Email address
      </Input>
      <Button>
        Submit
      </Button>
      <LinkButton>
        Back to login
      </LinkButton>
    </>
    
  )
}

export default PasswordRecovery
