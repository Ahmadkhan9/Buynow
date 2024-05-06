import React, {  useState } from 'react'
import useSignUp from '../../Hooks/useSignUp'
import FormInput from '../form-input/FormInput'
import Button from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './../../Store/user/user.action';
import { currentUser } from '../../Store/user/user.selector';
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
  // const {currentUser, setCurrentUser} = useContext(userContext)
  const {name , email , password, confirmPassword} = formFields
  const handleChange = (event) => {
    const {name , value} = event.target
    setFormFields({...formFields , [name] : value})
  }
  const currentUserSelector = useSelector(currentUser)
  const dispatch = useDispatch()
  const handleSignUp = async (e)=> {
    e.preventDefault()
    if(currentUserSelector) return
    try{
      const user = await mutateAsync(formFields)
      dispatch(setCurrentUser(user))
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