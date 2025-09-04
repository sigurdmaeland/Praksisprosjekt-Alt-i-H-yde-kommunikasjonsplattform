import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import OmOss from './pages/OmOss'
import Status from './pages/Status'
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
        <Route path="/status" element={<Status />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App













