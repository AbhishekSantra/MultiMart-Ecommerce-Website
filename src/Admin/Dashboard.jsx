import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import '../style/dashboard.css'
import useGetData from '../custom-hooks/useGetData'
const Dashboard = () => {
  const {data:products}=useGetData('products');
  const {data:users}=useGetData('users');
  return (
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="revenue__box">
              <h5>Total Sale</h5>
              <span>₹1500000</span>
            </div>
          </Col>
          <Col lg='3'>
          <div className="order__box">
              <h5>Order</h5>
              <span>15000</span>
            </div>
          </Col>
          <Col lg='3'>
          <div className="products__box">
              <h5>Total Products</h5>
              <span>{products.length}</span>
            </div>
          </Col>
          <Col lg='3'>
          <div className="users__box">
              <h5>Total Users</h5>
              <span>{users.length}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Dashboard