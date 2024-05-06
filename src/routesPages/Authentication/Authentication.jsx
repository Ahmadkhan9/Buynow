import SignUpForm from '../../components/Sign-Up/SignUpForm'
import SignInForm from '../../components/SignIn-form/SignInForm'
import { AuthenticationContainer } from './Authentication.style'
const Authentication = () => {
  return (
    <AuthenticationContainer>
        <SignInForm/>
        <SignUpForm/>
    </AuthenticationContainer>
  )
}

export default Authentication