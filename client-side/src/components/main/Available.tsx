import React from 'react'
import BrandName from '../Basic/BrandName'
import { brandData } from '../DummyData'

function Available() {
  return (
    <div className='container'>
      <div className='available'>
        <h4>Podcast Available On</h4>
        <div className='available__list'>
          {brandData.map((item, id) => (
            <div>
              <BrandName name={`/Img/Home/available__${item}.svg`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Available