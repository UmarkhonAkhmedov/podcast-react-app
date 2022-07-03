import React from 'react'
import Hero from '../components/main/Hero'

function Home() {
  return (
    <div>
      <Hero heading='Become The Hero Of Your Own Story' text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." input={true} buttonText="Subscribe" img="/Img/Home/hero__main.svg" space={false} />
    </div>
  )
}

export default Home