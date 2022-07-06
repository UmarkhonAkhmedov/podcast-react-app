import React from 'react'
import Dream from '../components/Host/Dream'
import HostHero from '../components/Host/HostHero'
import Origin from '../components/Host/Origin'
import Records from '../components/Host/Records'
import Available from '../components/Main/Available'
import Story from '../components/Main/Story'

function Host() {
  return (
    <div>
      <HostHero />
      <Available />
      <Dream />
      <Origin />
      <Records />
      <Story heading='Become The Hero Of Your Own Story' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.' linkText='Contact us' background='/Img/Host/contact__background.png' />
    </div>
  )
}

export default Host