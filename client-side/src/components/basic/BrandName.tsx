import React from 'react'

type Props = {
  name: string
}

function BrandName({ name }:Props) {
  return (
    <img src={name} alt="Brand Name" />
  )
}

export default BrandName