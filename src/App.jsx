import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Homepage from "./Pages/Homepage"
import PrdctListP from "./Pages/PrdctLstP"
import Product from "./Pages/Productdetails"
import Checkout from "./Pages/CheckoutPage"
import Success from "./Pages/Success"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products-result/" element={<PrdctListP />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout/" element={<Checkout />} />
        <Route path="/processing" element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App
