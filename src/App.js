import { useEffect } from 'react';
import './App.css';
import Navigation from './routesPages/Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from './Store/Category/category.selector';
import { setCurrentUser } from './Store/user/user.action';
import { useGetCategories } from './Hooks/useGetCategories';
import { setCategoryMap } from './Store/Category/category.action';
const App = ()=> {
  const dispatch = useDispatch()
  const {data} = useGetCategories()
  useEffect(()=> {
    if(data){
      dispatch(setCategoryMap(data?.categories))
    }
  } , [data, dispatch])
  useEffect(()=> {
    const user = localStorage.getItem('auth')
    if(user){
      dispatch(setCurrentUser(JSON.parse(user)))
    }
  }, [dispatch])
  return(
    <Navigation />
  )
}

export default App;
