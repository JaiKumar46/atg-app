import React from 'react'
import Hero from './components/hero/Hero'
import NAvbar from './components/navbar/NAvbar'
import MainPost from './components/posting/MainPost'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MAin from './components/posting/MAin'

const App = () => {
  return (
    // <div>
    //   <NAvbar/>
    //   <Hero/>
    //   <MainPost/>
    // </div>
    <div>
      <BrowserRouter>
      <NAvbar/>
      <Hero/>
      <MainPost/>
      <Routes>
        <Route path='/dashboard' element={<MAin/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App