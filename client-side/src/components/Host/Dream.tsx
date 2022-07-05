import React from 'react'

function Dream() {
  return (
    <div className='main__padding'>
      <div className='container'>
        <div className='dream'>
          <div className="dream__info">
            <h2>A small story about a big dream  —</h2>
            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon</p>
            <span>Apparently we had reached a great height in the atmosphere, for the sky was a dead black </span>
          </div>
          <div className="dream__img">
            <img src="/Img/Host/story__main.png" alt="Talking about dream"/>
          </div>
          <img className='dream__rect' src="/Img/Host/story__rects.svg" />
        </div>
      </div>
    </div>
  )
}

export default Dream