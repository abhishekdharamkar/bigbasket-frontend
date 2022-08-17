import React, { useEffect } from 'react'
import HomPage from './Pages/HomePage/HomPage';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import { useDispatch } from 'react-redux/es/exports';
import { getProduct } from './Redux/Action/Action';
const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])
  
  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomPage/>}></Route>
      {/* <Route path="/checkout" element={<CheckoutPage/>}></Route> */}
      <Route path='*' element={<HomPage/>}></Route>
    </Routes>
  </Router>
  )
}

export default App