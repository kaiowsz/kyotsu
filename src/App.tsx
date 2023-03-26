import './App.css'
import {useState} from "react"
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function App() {

  const [something, setSomething] = useState()

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
        <Navbar/>
      </BrowserRouter>
    </div>
  )
}

export default App
