import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Homepage from "./Pages/Homepage"
import PrdctListP from "./Pages/PrdctLstP"
import Product from "./Pages/Productdetails"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/result-products/" element={<PrdctListP />} />
        <Route path="/product/" element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App
