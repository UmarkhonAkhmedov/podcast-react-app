import React from 'react'
import Button from '../Basic/Button'

type Props = {
  heading: string
  text: string
  input: boolean
  buttonText: string
  img: string
  space: boolean
}

function Hero({ heading, text, input, buttonText, img, space }: Props) {
  return (
    <div className='container'>
      <div className={`hero ${space===true ? "hero__space--small" : "hero__space--large"}`}>
        <div className='hero__info'>
          <h1>{heading}</h1>
          <p>{text}</p>
          {input===true ?
          ( 
            <form className='hero__info--form'>
              <input type="email" className='input' placeholder='Enter Your Email'/>
              <Button text={buttonText} color={true} />
            </form>
          ) : 
          (
            <Button text={buttonText} color={true} />
          )}
        </div>
        <div className='hero__img'>
          <img src={img} alt="Hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero