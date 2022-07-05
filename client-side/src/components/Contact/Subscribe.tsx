import React from 'react'
import BrandName from '../Basic/BrandName'
import { brandData, socialsData } from '../DummyData'

function Subscribe() {
  return (
    <div className='subscribe'>
      <h4>Subscribe</h4>
      <div className='subscribe__brands'>
        {brandData.map((item, id) => (
          <BrandName key={id} name={`/Img/Contact/subscribe__${item}.svg`} />
        ))}
      </div>
      <h4 className='subscribe__heading'>Socials</h4>
      <div className='subscribe__socials'>
        {socialsData.map((item, id) => (
          <a key={id} href={`https://www.${item}.com`}>
            <img src={`/Img/Contact/socials__${item}.svg`} alt={`${item} icon`} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Subscribe