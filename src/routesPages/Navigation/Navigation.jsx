import React, { useContext } from 'react'
// import './Navigation.style.scss'
import { Outlet } from 'react-router-dom'
import {ReactComponent as CrwnLogo} from './../../assets/crown.svg'
import CartIconComponent from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { LogoContainer, NavLink, NavLinks, NavigationContainer } from './Navigation.style'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from '../../Store/user/user.action'
import {  currentUser } from '../../Store/user/user.selector'
import { selectisOpenCart } from '../../Store/Cart/cart.selector'
const Navigation = () => {
  const isOpenCart = useSelector(selectisOpenCart)
  const currentUserSelector = useSelector(currentUser)
  const dispatch = useDispatch()
  const handleSignOut = () => {
    dispatch(setCurrentUser(null))
    localStorage.removeItem('auth')
  }
  console.log(currentUserSelector)
  return (
    <>
      <NavigationContainer>
        <LogoContainer to={'/'}>
        <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>

          <NavLink className='nav-link' to={'shop'}>SHOP</NavLink>
          {currentUserSelector && <NavLink className='nav-link' to={`/dashboard/${currentUserSelector.user.role === 'admin' ? 'admin' : 'user'}`}>DASHBOARD</NavLink>}
          {currentUserSelector ? (<NavLink as={'span'} onClick={handleSignOut} className='nav-link'>SIGN OUT</NavLink>) :(<NavLink className='nav-link' to={'auth'}>SIGN IN</NavLink>)}
          <CartIconComponent/>
        </NavLinks>
        {isOpenCart && <CartDropdown/>}
      </NavigationContainer>
        <Outlet/>
    </>
  )
}

export default Navigation