import React from 'react'
import { recordsData } from '../DummyData'

function Records() {
  return (
    <div className='main__padding'>
      <div className='container'>
        <div className='records'>
          {recordsData.map((item) => (
            <div className='records__item' key={item.id}>
              <img src={`/Img/Host/result__${item.img}.svg`} alt="Records" />
              <div>
                <span>{item.number}</span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Records