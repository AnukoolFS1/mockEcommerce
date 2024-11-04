import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Homepage from "./Pages/Homepage"
import PrdctListP from "./Pages/PrdctLstP"
import Product from "./Pages/Productdetails"
import Checkout from "./Pages/CheckoutPage"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products-result/" element={<PrdctListP />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout/" element={<Checkout />} />
      </Routes>
    </Router>
  )
}

export default App
