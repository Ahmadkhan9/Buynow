import { useEffect } from 'react';
import './App.css';
import { useGetCategories } from './Hooks/useGetCategories';
import Navigation from './routesPages/Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from './Store/Category/category.selector';
import { setCurrentUser } from './Store/user/user.action';
const App = ()=> {
  const dispatch = useDispatch()
  const categoryMap = useSelector(selectCategories)
  console.log(categoryMap)
  useEffect(()=> {
    const user = localStorage.getItem('auth')
    if(user){
      dispatch(setCurrentUser(JSON.parse(user)))
    }
  }, [])
  return(
    <Navigation />
  )
}

export default App;
