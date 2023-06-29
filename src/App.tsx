import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import TempHeader from "./layouts/TempHeader"
function App() {

  return (
    <Router>
      {/* <Header /> */}
      <TempHeader />
      <main className="min-h-screen py-24 font-Nunito bg-primary">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>

  )
}

export default App
