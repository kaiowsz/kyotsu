import React, {useState} from 'react'
import Video from "../../videos/databg.mp4"
import { HeroContainer, HeroBg, VideoBg, ArrowForward, ArrowRight, HeroBtnWrapper, HeroContent, HeroH1, HeroP } from './Elements'

const HeroSection = () => {
  
  const [hover, setHover] = useState()
  
  function toggleHover() {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4">

            </VideoBg>
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>Sign up for a new account today and receive $250 in credit towards your next payment.</HeroP>
          <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={toggleHover} onMouseLeave={toggleHover} >Get Started {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection