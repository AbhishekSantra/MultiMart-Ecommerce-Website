import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from "../components/UI/CommonSection"
import Helmate from "../components/Helmate/Helmate"
import "../style/cart.css"
import { motion } from 'framer-motion'
import { cartAction } from '../redux/slice/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Cart = () => {
  const cartItem = useSelector(state => state.cart.cartItem)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <Helmate title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {
                cartItem.length === 0 ? <h2 className='fs-4 text-center'>No item added to the cart</h2> : <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItem.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))
                    }
                  </tbody>
                </table>
              }
            </Col>
            <Col lg="3">
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>Subtotal</h6>
                <span className='fs-4 fw-bold'>₹{totalAmount}</span>
              </div>
              <p className='fs-6 mt-2'>Taxes and Shipping will calculate in checkout</p>
              <div>
                <Link to="/shop"><button className='buy__btn w-100'>Continue Shopping</button></Link>
                <Link to="/checkout"><button className='buy__btn w-100 mt-3'>checkout</button></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmate>
  )
}
const Tr = ({ item }) => {
  const dispatch = useDispatch()
  const deleteProduct = () => {
    dispatch(cartAction.deleteItem(item.id))
  }
  return (
    <tr>
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName}</td>
      <td>₹{item.price}</td>
      <td>{item.quantity}pc</td>
      <td><motion.i whileTap={{ scale: 1.2 }} onClick={deleteProduct} className="ri-delete-bin-line"></motion.i></td>
    </tr>
  )
}
export default Cart