import React from 'react'

type Props = {
  text: string
  color: boolean
}

function Button({ text, color }: Props) {
  return (
    <button type="submit" className={`btn ${color === true ? "btn__blue" : "btn__green"}`}>{text}</button>
  )
}

export default Button