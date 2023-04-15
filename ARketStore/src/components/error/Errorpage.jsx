import React from 'react'
import '../../css/Error.css'
import { NavLink } from 'react-router-dom'


const Errorpage = () => {
  return (
    <>
<section class="page_404">
<div className='error'>
<div className='_404'>
    404
  </div>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <div className='content_1'>Look like you're lost</div><br/>
  <div className='content_2'>the page you are looking for not available!</div>
  <NavLink to ="/">
<button className='bt'> Home </button>
</NavLink>

  </div>
</section>
<br/><br/><br/>
    </>
  )
}

export default Errorpage