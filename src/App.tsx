import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  )

}

export default App
