import React, { useContext } from 'react'
import SignUpForm from '../../components/Sign-Up/SignUpForm'
import SignInForm from '../../components/SignIn-form/SignInForm'
import useGetProducts from './../../Hooks/useGetProducts'
import { userContext } from '../../Context/User.context'
import { AuthenticationContainer } from './Authentication.style'
const Authentication = () => {
  const {currentUser} = useContext(userContext)
  console.log(currentUser)
  return (
    <AuthenticationContainer>
        <SignInForm/>
        <SignUpForm/>
    </AuthenticationContainer>
  )
}

export default Authentication