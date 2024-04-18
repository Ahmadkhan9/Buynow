import React, { useContext, useState } from 'react'
import {useForm } from 'react-hook-form'
import useSignUp from '../../Hooks/useSignUp'
import FormInput from '../form-input/FormInput'
import './siginIn.style.jsx'
import Button from '../Button/Button'
import useLogIn from '../../Hooks/useLogIn'
import { userContext } from '../../Context/User.context'
import { Heading2, SignUpContainer } from './siginIn.style.jsx'
const defaultForm = {
    email : '',
    password : ''
}
const SignInForm = () => {
  const {currentUser , setCurrentUser} = useContext(userContext)
  const [formFields , setFormFields] = useState({
    email : '',
    password : ''
  })
  const resetForm = () => {
    setFormFields(defaultForm)
  }
  const { email , password} = formFields
  const {mutateAsync} = useLogIn()
  const handleLogIn = async (e) => {
    e.preventDefault()
    if(currentUser) return  
    try{
      const user = await mutateAsync(formFields)
      if(user){
        setCurrentUser(user)
        const auth = {...user , token : `Bearer ${user.token}`}
        localStorage.setItem('auth' , JSON.stringify(auth))
        resetForm()
      }else{
        console.log('ops no user found')
      }
    }catch(err){
      if(err.response.data.message === 'please login with valid credentials'){
        console.log(err.response.data.message)
      }else{
      console.log(err)
    }
  } 
  }
  const handleChange = (event) => {
    const {name , value} = event.target
    setFormFields({...formFields , [name] : value})
  }
  return (
    <SignUpContainer>
      <Heading2>I already have account</Heading2>
        <span className=''>Sign in with your email and password</span>
        <form onSubmit={handleLogIn}>
          <FormInput title={'Email'} required onChange={handleChange} name='email' value={email} type='email' />
          <FormInput title={'Password'} required onChange={handleChange} name='password' value={password} type='password' />
            <Button type='submit'>Sign In</Button>
        </form>
    </SignUpContainer>
  )
}

export default SignInForm