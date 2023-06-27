import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
function App() {

  return (
    <Router>
      <Header />
      <main className="min-h-screen py-24">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>

  )
}

export default App
