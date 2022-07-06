import React from 'react'
import Results from '../components/About/Results'
import Words from '../components/About/Words'
import Hero from '../components/Main/Hero'

function About() {
  return (
    <div>
      <Hero heading='About Finsweet Podcast' text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." input={false} buttonText="Subscribe Now!" img="/Img/About/hero__main.svg" space={true} />
      <Results />
      <Words />
    </div>
  )
}

export default About