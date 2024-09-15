import { Route, Routes } from "react-router-dom"
import Contact from "./pages/contact/Contact"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Header from "./layout/header/Header"
import Footer from "./layout/footer/Footer"
import Aboutus from "./pages/aboutus/Aboutus"
import Register from "./pages/register/Register"
import Adminproduct from "./pages/adminproduct/Adminproduct"
import ProductDetail from "./pages/product-detail/ProductDetail"
import OrderDialog from "./components/order-dialog/OrderDialog"


export default function App() {

  return (
    <>


      <Header />

      <OrderDialog />

      

      <main className="main-container">
        
        

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/product-detail/:id" element={<ProductDetail />} />

          <Route path="/register" element={<Register />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/aboutus" element={<Aboutus />} />

          <Route path="/adminproduct" element={<Adminproduct />} />

          <Route path="/login" element={<Login />} />



        </Routes>
      </main>

      <Footer />





    </>
  )
}
