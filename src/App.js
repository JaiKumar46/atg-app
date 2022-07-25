import React from 'react'
import Hero from './components/hero/Hero'
import NAvbar from './components/navbar/NAvbar'
import MainPost from './components/posting/MainPost'

const App = () => {
  return (
    <div>
      <NAvbar/>
      <Hero/>
      <MainPost/>
    </div>
  )
}

export default App