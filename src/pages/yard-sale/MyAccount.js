import React, {useContext, useState} from 'react'
import Button from '@components/Button'
import Input from '@components/Input'
import Subtitle from '@components/Subtitle'
import Header from '@containers/Header'
import Main from '@containers/Main'
import Space from "@components/Space"
import AppContext from '@context/AppContext'
import Validation from '@hooks/validations/useValidation.mjs'
import Head from 'next/head'

function MyAccount() {
  const {setUser, state} = useContext(AppContext)
  const [inputState, setInputState] = useState(true)

  let buttonState = (inputState) ? "drop-button-white" : "drop-button"
  let buttonMessage = (inputState) ? "Edit" : "Save"

  let nameErrors=""
  let emailErrors=""
  let passwordErrors=""
  
  const setNameErrors = (error) => {
    nameErrors=error
  }
  const setPasswordErrors = (error) => {
    passwordErrors=error
  }
  const setEmailErrors = (error) => {
    emailErrors=error
  }

  const name = state.user.userName
  const email = state.user.email
  const password = state.user.password

  const inputStyle = "border:none; background: #f7f7f7"
  const labelStyle = "color:black"

  const inputErrorStyle = "border: 2px #dd7b7b solid; background: #fff9f9"
  const labelErrorStyle = "color:#dd7b7b"

  const activeInputError = (id, error, stateFunction, text) => {
    const input = document.getElementById(id)
    const label = document.getElementById(id+"-label")
    const errorsParagraph = document.getElementById("errors-p")

    stateFunction(`-${error}.\n`)

    errorsParagraph.innerText=`${nameErrors}${passwordErrors}${emailErrors}`
    input.style=inputErrorStyle
    label.style=labelErrorStyle

    return text
  }

  let correctInputs=0

  const desactiveError = (id, text, stateFunction) =>{
    const input = document.getElementById(id)
    const label = document.getElementById(id+"-label")

    stateFunction("")

    input.style=inputStyle
    label.style=labelStyle

    correctInputs++

    return text
  }
  
  function setInputs(){
    const inputsContent = document.getElementsByClassName("Input_input__h1kND")
    inputsContent[0].value =  (name) ? name : ""
    inputsContent[1].value = (email) ? email : ""
    inputsContent[2].value = (password) ? password : ""
  }

  function handleClick(){
    const inputsContent = document.getElementsByClassName("Input_input__h1kND")

    const validateName = Validation.validate({name:inputsContent[0].value})
    const validatePassword = Validation.validate({password:inputsContent[2].value})
    const validateEmail = Validation.validate({email:inputsContent[1].value})

    setUser({
      userName: (!validateName.problems) 
        ? desactiveError("Name", validateName.text, setNameErrors)
        : activeInputError("Name", validateName.problems, setNameErrors, name),

      email: (!validateEmail.problems ) 
        ? desactiveError("Email", validateEmail.text, setEmailErrors)
        : activeInputError("Email", validateEmail.problems, setEmailErrors, email),

      password: (!validatePassword.problems) 
        ? desactiveError("Password", validatePassword.text, setPasswordErrors)
        : activeInputError("Password", validatePassword.problems, setPasswordErrors, password),
    })

    if(correctInputs === 3 || inputState){
      const errorsParagraph = document.getElementById("errors-p")

      errorsParagraph.innerText=``
      setInputState(!inputState)    
    }
  }

  const inputs=[
    {
      type:"text",
      name:"Name",
      text:name
    },
    {
      type:"email",
      name:"Email",
      text:email
    },
    {
      type:"password",
      name:"Password",
      text:password
    },
  ]


  return (
    <div  onLoad={()=>setInputs()}>
      <Head>
        <title>My account | Yard Sale</title>
      </Head>
      <Header/>
      <Main type='main-header'>
        <Subtitle>
          My account
        </Subtitle>
        {
          inputs.map((input)=>
          <Input
            isReadOnly={inputState}
            type={input.type}
            key={input.name}
            id={input.name}
            // placeholder={input.text}
          >
            {input.name}
          </Input>
        )}
        <p id='errors-p'></p>
        {/* <Input isReadOnly={inputState} type={"text"} placeholder={state.user.name}>
          Name
        </Input>
        <Input isReadOnly={inputState} type="email" placeholder={state.user.email}>
          Email address
        </Input>
        <Input isReadOnly={inputState} type="password" placeholder={state.user.password}>
          Password
        </Input> */}
        <Space/>
        <Button buttonFunction={handleClick} buttonClass={buttonState}>
          {buttonMessage}
        </Button>
      </Main>
    </div>
    
  )
}

export default MyAccount
