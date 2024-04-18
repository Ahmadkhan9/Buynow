import React, { useContext, useState } from 'react'
import {useForm } from 'react-hook-form'
import useSignUp from '../../Hooks/useSignUp'
import FormInput from '../form-input/FormInput'
import Button from '../Button/Button'
import { userContext } from '../../Context/User.context'
import axios from 'axios'

const defaultForm = {
  name : '',
    email : '',
    password : '',
    confirmPassword : ''
}
const SignUpForm = () => {
  const [formFields , setFormFields] = useState({
    name : '',
    email : '',
    password : '',
    confirmPassword : ''
  })
  const resetForm = ( ) => {
    setFormFields(defaultForm)
  }
  const {mutateAsync} = useSignUp()
  const {currentUser, setCurrentUser} = useContext(userContext)
  const {name , email , password, confirmPassword} = formFields
  const handleChange = (event) => {
    const {name , value} = event.target
    setFormFields({...formFields , [name] : value})
  }
  const handleSignUp = async (e)=> {
    e.preventDefault()
    if(currentUser) return
    try{
      const user = await mutateAsync(formFields)
      setCurrentUser(user)
      const auth = {...user , token : `Bearer ${user.token}`}
      localStorage.setItem('auth' , JSON.stringify(auth))
      resetForm()
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
        <span className=''>Sign up with your email and password</span>
        <form onSubmit={handleSignUp}>
          <FormInput title={'Display Name'} required onChange={handleChange} name='name' value={name} type='text' />
          <FormInput title={'Email'} required onChange={handleChange} name='email' value={email} type='email' />
          <FormInput title={'Password'} required onChange={handleChange} name='password' value={password} type='password' />
          <FormInput title={'Confirm Password'} required onChange={handleChange} name='confirmPassword' value={confirmPassword} type='password' />
          <Button type="submit">Sign Up</Button>
        </form>
    </div>
  )
}

export default SignUpForm