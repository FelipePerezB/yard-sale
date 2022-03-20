import React, {useRef, useContext} from 'react'
import Button from '@components/Button'
import Input from '@components/Input'
import LinkButton from '@components/LinkButton'
import Space from '@components/Space'
import Title from '@containers/Title'
import Main from "@containers/Main"
import AppContext from '@context/AppContext'
// import styles from "../styles/global.css"

function Login() {
  const { setUser, state } = useContext(AppContext)
  const form = useRef(null)

  const handleSubmit = (event) =>{
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    }
    setUser({
      email:data.email,
      password:data.password
    })
    console.log(state.user)
  }

  return (
    <>
      <Main>
        <Title />

        <form action='/yard-sale/' className={'form'} ref={form}>
          <Input type="email" name='email'>
            Email address
          </Input>
          <Input type="password" name='password'>
            Password
          </Input>

          <Button buttonClass="button"  buttonFunction={handleSubmit} type='submit' >
            Login
          </Button>
          <LinkButton href="/yard-sale/PasswordRecovery">
            Forgot my password
          </LinkButton>

          <Space/>
          <Button url='/yard-sale/CreateAccount' buttonClass='drop-button-white'>
            Sign up
          </Button>
          {/* <Button buttonFunction={()=>{useReedirect("/yard-sale/create-account")}} buttonClass='drop-button-white'>
            Sign up
          </Button> */}
        </form>

      </Main>
    </>    
  )
}

export default Login
