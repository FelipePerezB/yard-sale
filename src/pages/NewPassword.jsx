import React from 'react'
import Button from '../components/Button'
import Information from '../containers/Information'
import Input from '../components/Input'
import Title from '../containers/Title'
import InformationTitle from '../components/InformationTitle'
import InformationText from '../components/InformationText'

function NewPassword() {
  return (
    <>
      <Title/>
      <Information>
        <>
          <InformationTitle>
            Create a new password
          </InformationTitle>
          <InformationText>
            Enter a new password for your account
          </InformationText>
        </>
      </Information>
      <Input>
        Password
      </Input>
      <Input>
        Re-enter password
      </Input>
      <Button>
        Confirm new password
      </Button>
    </>    
  )
}

export default NewPassword
