import React, { useRef, useContext } from 'react';
import Button from '@components/Button';
import Input from '@components/Input';
import Title from '@containers/Title';
import Main from '@containers/Main';
import AppContext from '@context/AppContext';
import { useRouter } from 'next/router';
import Validation from '@hooks/validations/useValidation.mjs';

function CreateAccount() {
  const { state, setUser } = useContext(AppContext);

  let nameErrors = '';
  let emailErrors = '';
  let passwordErrors = '';

  const setNameErrors = (error) => {
    nameErrors = error;
  };
  const setPasswordErrors = (error) => {
    passwordErrors = error;
  };
  const setEmailErrors = (error) => {
    emailErrors = error;
  };

  const formSignup = useRef(null);

  const router = useRouter();

  const inputStyle = 'border:none; background: #f7f7f7';
  const labelStyle = 'color:black';

  const inputErrorStyle = 'border: 2px #dd7b7b solid; background: #fff9f9';
  const labelErrorStyle = 'color:#dd7b7b';

  // let errors = []

  const activeInputError = (id, error, stateFunction) => {
    const input = document.getElementById(id);
    const label = document.getElementById(id + '-label');
    const errorsParagraph = document.getElementById('errors-p');

    stateFunction(`-${error}.\n`);

    errorsParagraph.innerText = `${nameErrors}${passwordErrors}${emailErrors}`;
    input.style = inputErrorStyle;
    label.style = labelErrorStyle;

    return undefined;
  };

  let correctInputs = 0;

  const desactiveError = (id, text, stateFunction) => {
    const input = document.getElementById(id);
    const label = document.getElementById(id + '-label');

    stateFunction('');

    input.style = inputStyle;
    label.style = labelStyle;

    correctInputs++;

    return text;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formSignup.current);
    const data = {
      name: formData.get('Name'),
      email: formData.get('Email'),
      password: formData.get('Password'),
    };
    const validateName = Validation.validate({ name: data.name });
    const validatePassword = Validation.validate({ password: data.password });
    const validateEmail = Validation.validate({ email: data.email }, state.newUsers);

    setUser({
      userName: !validateName.problems ? desactiveError('Name', validateName.text, setNameErrors) : activeInputError('Name', validateName.problems, setNameErrors),

      email: !validateEmail.problems ? desactiveError('Email', validateEmail.text, setEmailErrors) : activeInputError('Email', validateEmail.problems, setEmailErrors),

      password: !validatePassword.problems ? desactiveError('Password', validatePassword.text, setPasswordErrors) : activeInputError('Password', validatePassword.problems, setPasswordErrors),
    });

    if (correctInputs === 3) {
      const errorsParagraph = document.getElementById('errors-p');
      errorsParagraph.innerText = ``;
      setUser(
        {
          userName: data.name,
          email: data.email,
          password: data.password,
        },
        true
      );
      router.push(' /');
    }
  };
  const inputs = [
    {
      type: 'text',
      name: 'Name',
    },
    {
      type: 'email',
      name: 'Email',
    },
    {
      type: 'password',
      name: 'Password',
    },
  ];
  return (
    <Main>
      <Title />
      <form action=" /" className={'form'} ref={formSignup}>
        {inputs.map((input) => (
          <Input type={input.type} name={input.name} key={input.name} id={input.name}>
            {input.name}
          </Input>
        ))}
        <p id="errors-p"></p>
        <Button buttonClass="button" buttonFunction={handleSubmit} type={'submit'} url=" /">
          Create account
        </Button>
        {/* <Button buttonClass="button"  buttonFunction={handleSubmit} type={"submit"} url=" /" >
          Create account
        </Button> */}
      </form>
    </Main>
  );
}

export default CreateAccount;
