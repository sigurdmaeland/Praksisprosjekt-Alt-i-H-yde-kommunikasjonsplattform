import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import OmOss from './pages/OmOss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/omoss" element={<OmOss />} />
        <Route path="/status1" element={<div>Status 1 - Under utvikling</div>} />
        <Route path="/status2" element={<div>Status 2 - Under utvikling</div>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App













