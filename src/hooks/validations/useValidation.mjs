// const value={
//   text:"",
//   problems:[]
// }
class Validation{
  static validate({name, email, password, usersList, checkEmail}){
    const value = {
      text:"",
      problems:[]
    }
    // 
    if(name){
      value.text = this.nameValidation({name:name, value:value})
      value.problems=this.problemDescription({type:"El nombre", value:value})
    } else if(email){
      value.text = this.emailValidation({email:email, value:value, usersList:usersList, checkEmail:checkEmail})
      value.problems=this.problemDescription({type:"El email", value:value})
    } else if(password){
      value.text = this.passwordValidation({password:password, value:value})
      value.problems=this.problemDescription({type:"La contraseña", value:value})
    } else{
      value.problems.push("El valor no puede ser indefinido")
    }
    return value
  }
  static problemDescription({type, value}){
    const valueProblems = value.problems
    const problemsLength = valueProblems.length-1

    if(problemsLength!==-1){
      const problems = (value.problems.length>1)
        ? value.problems.map((problem)=>{
          if(valueProblems[0] !== problem && valueProblems[problemsLength] !== problem){
            return `, ${problem}`
          } else if(valueProblems[problemsLength] === problem){
            return ` y ${problem}`
          } else{
            return problem
          }
        })
        : value.problems
  
      return `${type} ${problems.join("")}`
    } else{
      return undefined
    }
  }

  static nameValidation({name, value}){
    this.defaultValidation({text:name, maxCharacters:30, minCharacters:1, value:value})
    return name
  }


  static emailValidation({email, value, usersList, checkEmail}){

    if(checkEmail){
      const userIndex=(usersList.findIndex((user)=>user.email===email.toLowerCase()))
  
      if(userIndex!==-1){
        value.problems.push("ya está ocupado")
        return email.toLowerCase()
      }
    }

    const filter = /[ a-z | 0-9 | @ | . | _  | - ]/i

    const emailArray = email.split("")

    let atSignCount=0;
    let dotCount=0;

    let severIndex=0;
    let index=0;
    let typeIndex=0

    let dotsInARow=0
    let validate="emailName"


    emailArray.map((c)=>{
      index++

      (!filter.test(c))
        ? value.problems.push("solo permite letras, números, arrobas, puntos, guiones y guiones bajos")
        : null

      dotsInARow += (c===".") ? 1 : 0
      dotsInARow = (c===".") ? dotsInARow : 0
      {(dotsInARow>1)
        ? value.problems.push("no puede tener 2 puntos seguidos")
        : null}

      switch(validate){
        case "emailName":
          atSignCount += (c==="@") ? 1 : 0
          switch (atSignCount){
            case 0:
              (index===emailArray.length) 
                ? value.problems.push("necesita minimo un @") 
                : null
              break
            case 1:
              {
                (index === 1)
                ? value.problems.push("necesita minimo un carácter antes del @") 
                : null
              }

              {
                (index === emailArray.length)
                ? value.problems.push("necesita un dominio") 
                : null
              }
                     
              if(index>64){
                value.problems.push("no pueden haber más de 64 carácteres antes del @")          
              }

              validate="server"
              break
          }
          break
        case "server":
          (c==="@") ? value.problems.push("no puede tener más de un @") : null
          severIndex++
          dotCount += (c===".") ? 1 : 0
          switch(dotCount){
            case 0:
              (index===emailArray.length)
                ? value.problems.push("después del @ necesita minimo un .")
                : null
              break
            case 1:
              (severIndex<3)
                ? value.problems.push("después del @ y antes del . necesita minimo 2 carácacteres")
                : null

              {
                (index === emailArray.length)
                ? value.problems.push("necesita un tipo de servidor (.com, .cl, etc)") 
                : null
              }

              if(severIndex>255){
                value.problems.push("después del @ no puede tener más de 255 carácteres")
              }
              validate="emailType"
              break
          }
        case "emailType":
          typeIndex++
          (index===emailArray.length-1 && typeIndex<2)
            ? value.problems.push("después del . necesita minimo 1 carácter") 
            : null
          break
      }
    })
    return email.toLowerCase()
  }

  static passwordValidation({password, value}){
    let numberCount=0
    let index=0
    this.defaultValidation({text:password,maxCharacters:100, minCharacters:8, value:value})
    const passwordArray = password.split("")
    passwordArray.map((c)=>{
      index++
      numberCount += (isNaN(c)) ? 0 : 1
    })
    {
      (numberCount<1)
      ? value.problems.push("necesita minimo un número")
      : null
    }
    return password
  }

  static defaultValidation({text, maxCharacters, minCharacters, value}){
    text = text.trim()
    this.lengthValidation(
      {
        value:value, 
        text:text,
        maxCharacters:maxCharacters, 
        minCharacters:minCharacters, 
      })
  }

  static lengthValidation({text, maxCharacters,minCharacters, value}){   
    if(text.length > maxCharacters){
      value.problems.push(`no puede tener más de ${maxCharacters} carácteres`)
    } 
    else if(text.length < minCharacters){
      value.problems.push(`no puede tener menos de ${minCharacters} carácter`)
    }
  }
}
export default Validation

