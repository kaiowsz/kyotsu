import React, {useState} from "react"
import { Navbar, Sidebar } from "../components"

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
    </>
  )
}

export default Home