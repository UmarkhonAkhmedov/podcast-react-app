import React from 'react'
import { resultsData } from '../DummyData'

function Results() {
  return (
    <div className='main__padding'>
      <div className='container'>
        <div className='results'>
          {resultsData.map((item) => (
            <div className='results__item' key={item.id}>
              <img src={`/Img/About/result__${item.img}.svg`} alt={item.img} />
              <h4>{item.heading}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Results