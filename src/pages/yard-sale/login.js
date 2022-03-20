import React, {useRef, useContext} from 'react'
import Button from '@components/Button'
import Input from '@components/Input'
import LinkButton from '@components/LinkButton'
import Space from '@components/Space'
import Title from '@containers/Title'
import Main from "@containers/Main"
import AppContext from '@context/AppContext'
import { useRouter } from 'next/router'
import Head from 'next/head'
// import styles from "../styles/global.css"

function Login() {
  const { state, setUser } = useContext(AppContext)
  const form = useRef(null)

  const router = useRouter()

  const login = (user) => {
    setUser({
      userName:user.userName,
      email:user.email,
      password:user.password,
    })    
    router.push("/yard-sale/") 
  }

  const error = (error) =>{
    const errorsParagraph = document.getElementById("errors-p")
    errorsParagraph.innerText= `-${error}.`

  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    }

    const userIndex=(state.users.findIndex((user)=>user.email===data.email))
    const user=state.users[userIndex]
    {
      (userIndex !== -1) 
        ? (user.password===data.password)
          ? login(user)
          : error("La contraseña es incorrecta")
        
        : error("No se ha encontrado el correo, para crear una cuenta presione 'Sign up'")
    }
  }

  return (
    <>
      <Head>
        <title>Log in | Yard Sale</title>
      </Head>
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
          <p id='errors-p'></p>

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
