import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { iconsData, navData } from '../DummyData'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav'>
          <div className='nav__img'>
            <Link to="/">
              <img src="/Img/website__logo.svg" alt='Website Logo' />
            </Link>
          </div>
          <div className={`nav__main ${open ? "nav__mobile" : ""}`}>
            <ul className='nav__main--links'>
              {navData.map((item, id) => (
                <Link to={`/${item}`} key={id} onClick={() => {if(open){setOpen(!open)}}}>
                  <li>{item}</li>
                </Link>
              ))}
            </ul>
            <ul className='nav__main--icons'>
              {iconsData.map((item, id) => (
                <li key={id}>
                  <a href={`https://www.${item}.com`} target="_blank">
                    <img src={`/Img/Home/nav__icon--${item}.svg`} alt="Social Icons" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='nav__menu' onClick={() => setOpen(!open)}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAABrElEQVR4nO3asWoUURjF8fN9V9hn0EfYblhCEItgawQFm5Asu09gQFMEi4BdimwhSS0MuFYpQoLYRCwlhUQb8Q12X8EQ5x6rQAh3YBaSjXNzfuV8W9x7l4GZPwOIiIiIiIjcQVY3GJ0875lXA5jdn+eCrh05hVm5sXD0IzVOHsDo5Fk3mp0C6Nzo4ubnjNGKzYcHv68O7qV+fY7QB7PZPAB0aFgFsHV1kDyAis76m6OdCDB1PXkARBiT3EA+t8Afq/gxNaj9n7e+rRQBHMLx4ObWNQcREzCWbx/t/7ztpYiIiIjI/6T2UXj4db3nXg0M7e4BBKduXr5f2mveA9a+vOyGgLx6gIfiw9K7Zj0Abv0Iy2XzANBh5Aw9AIGWfHtuLyK9o3QPqDiOHrLqAbQwWw94cfy6gIch0PIeAEzcUe4/3lEPEBEREZFLah+FFz9t92A+oKHVPcCIaWWx/P7kTfMeUHwedZ3MqwcwFqdPN5v1ANL6VWY9wMya94C/NGb2eQAwy/cBgI0jLKseEAJm6wHdw92CziFgLe8BnLjH8tfyK/UAERERERGRC/8AD9iBFUTIYn0AAAAASUVORK5CYII=" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar