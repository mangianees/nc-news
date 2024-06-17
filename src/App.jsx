

import './App.css'
import { Articles } from './components/articles'
import { Header } from './components/header'
import { MyNavbar } from './components/navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
     <Header />
     <MyNavbar />
     {/* <Routes>
        <Route path="/" element={<Articles />}></Route>
     </Routes> */}
     </BrowserRouter>
    </>
  )
}

export default App
