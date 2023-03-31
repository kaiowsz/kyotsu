import React, {useState} from "react"
import { Navbar, Sidebar, HeroSection, InfoSection } from "../components"
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/InfoSection/Data"

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  function toggleOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggleOpen={toggleOpen}  />
      <Navbar toggleOpen={toggleOpen} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home