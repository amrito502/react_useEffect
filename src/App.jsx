import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './page/login-page';
import VerifyPage from './page/verify-page';
import HomePage from './page/home-page';
import ProductPage from './page/product-page';
import CartPage from './page/cart-page';
import RegisterationPage from './page/registeration-page';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/registration" element={<RegisterationPage/>} />
        <Route path="/verify" element={<VerifyPage/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
