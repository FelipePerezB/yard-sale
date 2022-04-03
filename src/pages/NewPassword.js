import React from 'react';
import Button from '@components/Button';
import Information from '@containers/Information';
import Input from '@components/Input';
import Title from '@containers/Title';
import Main from '@containers/Main';

function NewPassword() {
  return (
    <Main>
      <Title />
      <Information title="Create a new password" text="Enter a new password for your account" />
      <Input>Password</Input>
      <Input>Re-enter password</Input>
      <Button>Confirm new password</Button>
    </Main>
  );
}

export default NewPassword;
