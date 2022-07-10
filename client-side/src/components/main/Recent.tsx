import React from 'react'
import Button from '../Basic/Button'
import { recentData } from '../DummyData'

function Recent() {
  return (
    <div className='container'>
      <div className='recent'>
        <div className='recent__heading'>
          <div className='recent__heading--info'>
            <h2>Recent Episodes</h2>
            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p>
          </div>
          <Button color={true} text='See All Episiodes' />
        </div>
        <div className='recent__list'>
          {recentData.map((item) => (
            <div className='recent__list--item' key={item.id}>
              <div className='recent__list--item__img'>
                <img src={`/Img/Home/recent__main--${item.img}.png`} alt="" />
                <img src="/Img/Home/recent__icon--microphone.svg" alt="" />
              </div>
              <h4>{item.heading}</h4>
              <p>{item.text}</p>
              <div className='recent__list--item__listen'>
                <img src="/Img/Home/recent__icon--play.svg" alt="" />
                <p>Listen Now</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Recent