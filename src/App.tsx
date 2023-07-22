import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
// import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import TempHeader from "./layouts/TempHeader"
function App() {
  // const [highlightName, setHighlightName] = useState(false);
  const [clicked, setclicked] = useState(false);
  return (
    <Router>
      {/* <Header /> */}
      <TempHeader setclicked={setclicked} />
      <main className="min-h-screen py-24 pb-10 md:pb-0 md:py-24 font-Nunito bg-primary">
        <Routes>
          <Route path="/" element={<Home clicked={clicked} />} />
        </Routes>
      </main>
      <Footer />
    </Router>

  )
}

export default App
