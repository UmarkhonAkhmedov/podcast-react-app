import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  heading: string
  text: string
  linkText: string
  background: string
}

function Story({background, heading, text, linkText}:Props) {
  return (
    <div className='site--story' style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
      <div className='main__padding site--story__background'>
        <div className='container'>
          <div className='story'>
            <h2>{heading}</h2>
            <p>{text}</p>
            <div>
              <Link to="/contact">{linkText}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story