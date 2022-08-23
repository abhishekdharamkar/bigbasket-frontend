import React, { useEffect } from 'react'
import HomePage from './Pages/HomePage/HomPage';
import { useDispatch } from 'react-redux/es/exports';
import { getProduct } from './Redux/Action/Action';
import Checkout from './Pages/CheckoutResponsive/Checkout';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])
  
  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path='*' element={<HomePage/>}></Route>
    </Routes>
  </Router>
  )
}

export default App