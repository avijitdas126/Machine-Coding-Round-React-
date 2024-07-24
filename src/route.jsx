import React from 'react'
import { BrowserRouter,Routes,Route,useNavigate } from "react-router-dom";
import Otp from './utility/otp';
import Course from './utility/course';
import Batch from './utility/batch';
import Error from './utility/Error';
import Nav from './utility/nav';
const Router = () => {


  return (
    <>


      <BrowserRouter>
      <Nav/>
      <Routes>
<Route path='/' element={<Otp />}></Route>
<Route path='/otp-form' element={<Otp />}></Route>
<Route path='/course-list' element={<Course />}></Route>
<Route path='/batches' element={<Batch />}></Route>
<Route path='*' element={<Error />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
