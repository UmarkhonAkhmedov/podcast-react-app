import React from 'react'
import { Link } from 'react-router-dom'
import { brandData, footerListData } from '../DummyData'

function Footer() {
  return (
    <div className='site--footer main__padding'>
      <div className='container'>
        <div className='footer'>
          <div className='footer__logo footer__item'>
            <Link to="/home">
              <img src="/Img/Home/footer__logo.svg" alt="Footer Logo" />
            </Link>
          </div>
          <div className='footer__pages footer__list footer__item'>
            <h4>Pages</h4>
            <ul>
              {footerListData.map((item, id) => (
                <Link to={`/${item}`}>
                  <li key={id}>{item}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className='footer__reach footer__list footer__item'>
            <h4>Reach Us</h4>
            <ul>
              <Link to="/contact">
                <li>contact</li>
              </Link>
              <Link to="/about">
                <li>about</li>
              </Link>
            </ul>
          </div>
          <div className='footer__icons footer__item'>
            <h4>Subscribe</h4>
            <div>
              {brandData.map((item, id) => (
                <a key={id} href={`https://www.${item}.com`}>
                  <img src={`/Img/Home/footer__icon--${item}.svg`} alt="Social Icons" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer