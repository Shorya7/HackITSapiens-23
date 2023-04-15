import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../home/Home'
import Product from '../product/Product'
import Contact from '../contact/Contact'
import Errorpage from '../error/Errorpage'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Vegetables from '../vegetables/Vegetables'
import EmailRegistration from '../login/Register'
import ProtectedRoute from './ProtectedRoutes'

const Routers = () => {


 
  return (
   <Router>
   <Header/>
    <Routes>
      {/* <Route path='/' element = {<ProtectedRoute Component={Home} />} />
      <Route path='/product' element = {<ProtectedRoute Component={Product}/>} />
      <Route path='/vegetables' element = {<ProtectedRoute Component={Vegetables}/>} />
      <Route path='/cart' element = {<ProtectedRoute Component={Product}/>}/> */}

          <Route path='/' element = {<ProtectedRoute Component={Home} />} />
      <Route path='/product' element = {<ProtectedRoute Component={Product}/>} />
      <Route path='/vegetables' element = {<ProtectedRoute Component={Vegetables}/>} />
      <Route path='/cart' element = {<ProtectedRoute Component={Product}/>}/>
      <Route path='/contact' element = {<Contact />}/>
      <Route path='/login' element = {<EmailRegistration />}/>
      <Route path='*' element = {<Errorpage />} />
    </Routes>
    <Footer />
   </Router>
 
  )
}

export default Routers