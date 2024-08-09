
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layouts/Layout'
import Home from './Pages/Home'
import SingUpPresentations from './Pages/Auth/SingUpPresentations'
import LogInPrenstation from './Pages/Auth/LogInPrenstation'
import NotFound from './Pages/NotFound'
import Denied from './Pages/Denied'
import AddProduct from './Pages/Admin/AddProduct'
import ProductDetails from './Pages/Products/ProductDetails'
import CartDetails from './Pages/Carts/CartDetails'
import Order from './Pages/Order/Order'
import RequireAuth from './Pages/Auth/RequireAuth'
import OrderSuccess from './Pages/Order/OrderSuccess'
import Menu from './Pages/HeaderPage/Menu'
import Service from './Pages/HeaderPage/Service'
import About from './Pages/HeaderPage/About'

function App() {

  return (
    <>
    {/* <Layout>
      <Home />
    </Layout> */}

    <Routes>
      <Route path='/' element={ < Home/>} />
      <Route path='/auth/signup' element={ < SingUpPresentations/>} />
      <Route path='auth/login' element={ <LogInPrenstation/> } />
      <Route path='/admin/addProduct' element={ <AddProduct /> } />
      <Route path='/product/:productId' element={<ProductDetails />} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/service' element={ <Service />} />
      <Route path='/about' element={ <About />} />

      <Route element={ <RequireAuth />}>
        <Route path='/order' element={ <Order/>} />
        <Route path='/order/success' element={ <OrderSuccess/>} />
        <Route path='/cart' element={<CartDetails />} />
      </Route>


      <Route path='/denied' element={ <Denied />} />
      <Route path='*' element={ <NotFound />} />
    </Routes>
    </>
  )
}

export default App
