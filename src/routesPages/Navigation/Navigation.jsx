import React, { useContext } from 'react'
// import './Navigation.style.scss'
import { Link, Outlet } from 'react-router-dom'
import {ReactComponent as CrwnLogo} from './../../assets/crown.svg'
import { userContext } from '../../Context/User.context'
import { productContext } from '../../Context/Product.context'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartIconComponent from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { cartContext } from '../../Context/Cart.context'
import { LogoContainer, NavLink, NavLinks, NavigationContainer } from './Navigation.style'
const Navigation = () => {
  const {currentUser , setCurrentUser} = useContext(userContext)
  const handleSignOut = () => {
    setCurrentUser(null)
    localStorage.removeItem('auth')
  }
  const {isOpenCart} = useContext(cartContext)
  return (
    <>
      <NavigationContainer>
        <LogoContainer to={'/'}>
        <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>

          <NavLink className='nav-link' to={'shop'}>SHOP</NavLink>
          {currentUser ? (<NavLink as={'span'} onClick={handleSignOut} className='nav-link'>SIGN OUT</NavLink>) :(<NavLink className='nav-link' to={'auth'}>SIGN IN</NavLink>)}
          <CartIconComponent/>
        </NavLinks>
        {isOpenCart && <CartDropdown/>}
      </NavigationContainer>
        <Outlet/>
    </>
  )
}

export default Navigation