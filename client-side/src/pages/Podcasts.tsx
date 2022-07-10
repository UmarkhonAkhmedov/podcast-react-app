import React from 'react'
import Recent from '../components/Main/Recent'
import Story from '../components/Main/Story'
import PodHero from '../components/Podcast/PodHero'

function Podcasts() {
  return (
    <div>
      <PodHero />
      <div className='main__padding'>
        <Recent />
      </div>
      <Story heading='Become The Hero Of Your Own Story' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet." linkText='Contact us' background='/Img/Podcasts/contact__background.png' />
    </div>
  )
}

export default Podcasts