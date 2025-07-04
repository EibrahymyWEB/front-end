import { Route, Routes } from "react-router-dom"
import ProductDetails from "./pages/ProductDetails"
import Home from './pages/Home'
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <div>
      <h1 className='text-center'>Product API</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  )
}

export default App
