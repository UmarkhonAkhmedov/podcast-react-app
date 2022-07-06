import React from 'react'
import { teamData } from '../DummyData'

function Team() {
  return (
    <div className='main__padding'>
      <div className='container team__background'>
        <h2>Meet Our Team</h2>
        <div className='team'>
          {teamData.map((item) => (
            <div key={item.id} className='team__item'>
              <img className='team__item--img' src={`/Img/About/team__${item.img}.png`} alt="Men" />
              <h4>{item.name}</h4>
              <span>{item.job}</span>
              <div>
                {item.socialProfiles.map((icon) => (
                  <a target="_blank" href={`https://www.${icon}.com`}><img src={`/Img/About/team__icon--${icon}.svg`} alt="Social Icon" /></a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team