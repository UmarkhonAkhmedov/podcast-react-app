import React from 'react'
import Available from '../components/main/Available'
import Hero from '../components/main/Hero'

function Home() {
  return (
    <div>
      <Hero heading='Become The Hero Of Your Own Story' text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." input={true} buttonText="Subscribe" img="/Img/Home/hero__main.svg" space={false} />
      <Available />
    </div>
  )
}

export default Home