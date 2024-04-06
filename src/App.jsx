import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import Home from './Pages/Home'



function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path ={'/'} element ={<Home/>}/>
        <Route path ={'login'} element ={<Auth/>}/>
        <Route path ={'register'} element ={<Auth register/>}/>
        <Route path ={'projects'} element ={<Projects/>}/>
        <Route path ={'dashboard'} element ={<Dashboard/>}/>
        <Route path ={'*'} Navigate to ={'/'}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
