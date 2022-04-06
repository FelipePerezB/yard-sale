import React, {useRef} from 'react'
import Button from '@components/Button'
import Input from '@components/Input'
import LinkButton from '@components/LinkButton'
import Title from '../containers/Title'
import Main from "../containers/Main"
import useReedirect from '../hooks/useReedirect'
import styles from "../styles/global.css"

function Login() {
  const form = useRef(null)

  const handleSubmit = (event) =>{
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    }
  }

  return (
    <>
      <Main>
        <Title />

        <form action='/yard-sale/' className={styles['form']} ref={form}>
          <Input type="email" name='email'>
            Email address
          </Input>
          <Input type="password" name='password'>
            Password
          </Input>

          <Button  buttonFunction={handleSubmit} type='submit' >
            Login
          </Button>
          <LinkButton href=" /password-recovery">
            Forgot my password
          </LinkButton>
          <Button buttonFunction={()=>{useReedirect(" /create-account")}} buttonClass='button-white drop-button' dropButton={true}>
            Sign up
          </Button>
        </form>

      </Main>
    </>    
  )
}

export default Login
