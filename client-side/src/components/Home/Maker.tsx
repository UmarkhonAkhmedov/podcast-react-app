import React from 'react'

function Maker() {
  return (
    <div className='maker'>
      <div className='maker__info'>
        <h2>A podcast for makers and entrepreneurs</h2>
        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. </p>
      </div>
      <div className='maker__img'>
        <img className='maker__img--main' src="/Img/Home/special__main--circle.png" alt="Podcast Men" />
        <img className='maker__img--small' src="/Img/Home/special__small--circle.jpg" alt="Podcast Woman" />
        <img className='maker__img--background' src="/Img/Home/special__main--rect.svg" alt="" />
      </div>
    </div>
  )
}

export default Maker