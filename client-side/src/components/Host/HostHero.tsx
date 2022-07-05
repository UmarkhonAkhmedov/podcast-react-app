import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Basic/Button'

function HostHero() {
  return (
    <div className='main__padding site--hostHero'>
      <div className='container'>
        <div className='hostHero'>
          <div className='hostHero__img'>
            <img src="/Img/Host/hero__main.svg" alt="Podcast Image" />
          </div>
          <div className='hostHero__info'>
            <h6>About The Host</h6>
            <h2>Hey there, I’m Andrew Jonson and welcome to my Podcast</h2>
            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. </p>
            <Link to="/about">
              <Button text="Know More" color={true} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostHero