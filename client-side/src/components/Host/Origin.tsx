import React from 'react'
import { originData } from '../DummyData'

function Origin() {
  return (
    <div className=''>
      <div className='container site--origin'>
        <div className='origin'>
          {originData.map((item) => (
            <div key={item.id} className='origin__item'>
              <h2>{item.heading}</h2>
              {item.text.map((text) => (
                <p>{text}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Origin