import React, { useEffect } from 'react'
import Header from './Components/Header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import {useStatevalue} from './Components/StateProvider/StateProvider'
import { auth } from './firebase'

const App = () => {

  const [{basket}, dispatch] = useStatevalue();

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      dispatch({
        type: "SET_USER",
        user: authUser
      });
    } else {
      dispatch({
        type: "SET_USER",
        user: null
      });
    }
  });

  // Clean up listener when component unmounts
  return () => {
    unsubscribe(); 
  };
}, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/checkout' element={
          <>
            <Header />
            <Checkout />
          </>
          }></Route>
          <Route path='/login' element={
          <>
            <Login />
          </>
          }>
          </Route>
          <Route path='/' element={
          <>
            <Header />
            <Home />
          </>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
