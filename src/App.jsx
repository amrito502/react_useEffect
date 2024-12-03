import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from './page/product-list';
import LoginPage from './page/login-page';
import VerifyPage from './page/verify-page';
import CartListPage from './page/cart-list';
import HomePage from './page/home-page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/" element={<ProductList/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/verify" element={<VerifyPage/>} />
        <Route path="/cart" element={<CartListPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
