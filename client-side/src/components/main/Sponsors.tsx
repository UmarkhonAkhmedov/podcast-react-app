import React from 'react'
import { sponsorData } from '../DummyData'

function Sponsors() {
  return (
    <div className='container sp'>
      <div className='sponsor'>
        <h2>Our Sponsors</h2>
        <div className='sponsor__list'>
          {sponsorData.map((item, id) => (
            <img key={id} src={`/Img/Home/sponsor__${item}.svg`} alt="Sponsor Brand Name" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sponsors