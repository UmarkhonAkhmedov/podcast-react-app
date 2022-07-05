import React from 'react'
import Button from '../Basic/Button'

function Form() {
  return (
    <div className='form'>
      <h2>Contact Us</h2>
      <span>Interested in collaborating? Please fill the form below.</span>
      <form className='form__inputs'>
        <input className='input' type="text" placeholder="Your Full Name" />
        <input className='input' type="email" placeholder="Your Email" />
        <input className='input' type="text" placeholder="Query Related" />
        <textarea className='input form__inputs--message' placeholder="Message" />
        <Button color={true} text="Contact Now" />
      </form>
    </div>
  )
}

export default Form