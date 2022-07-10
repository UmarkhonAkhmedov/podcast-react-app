import React from 'react'
import { Link } from 'react-router-dom'

function Featured() {
  return (
    <div className='main__padding'>
      <div className='container'>
        <div className='featured'>
          <div className='featured__info'>
            <h4>Featured</h4>
            <h2>Should I raise money for my startup, or not?</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            <div>
              <Link to="/blog">Read Now </Link>
              <img src="Img/Blogs/hero__arrow.svg" alt="" /> 
            </div>
          </div>
          <div className='featured__img'>
            <img src="/Img/Blogs/hero__main.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured