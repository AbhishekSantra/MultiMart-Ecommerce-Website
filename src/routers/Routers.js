import {Routes,Route, Navigate} from "react-router-dom"
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Shop from '../pages/Shop'
import ProductDetails from '../pages/ProductDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import CheckOut from '../pages/CheckOut'
import ProtectedRoute from "../routers/ProtectedRoute"
import AddProducts from "../Admin/AddProducts"
import AllProducts from "../Admin/AllProducts"
import Dashboard from "../Admin/Dashboard"
import Users from "../Admin/Users"
const Routers = () => {
  return<Routes>
        <Route path='/'element={<Navigate to="home"/>}/>
        <Route path='home'element={<Home/>}/>
        <Route path='cart'element={<Cart/>}/>
        <Route path='shop'element={<Shop/>}/>
        <Route path='shop/:id'element={<ProductDetails/>}/>
        <Route path="/*" element={<ProtectedRoute/>}>
          <Route path="checkout" element={<CheckOut/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="dashboard/all-products" element={<AllProducts/>}/>
          <Route path="dashboard/add-products" element={<AddProducts/>}/>
          <Route path="dashboard/users" element={<Users/>}/>
        </Route>
        <Route path='login'element={<Login/>}/>
        <Route path='signup'element={<Signup/>}/>
        </Routes>
  
}

export default Routers