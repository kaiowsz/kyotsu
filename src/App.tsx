import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages'
import SignIn from './pages/signin'
import ErrorPage from './pages/404'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="*" element={<ErrorPage/>}  />
      </Routes>
    </BrowserRouter>
  ) 

}

export default App
