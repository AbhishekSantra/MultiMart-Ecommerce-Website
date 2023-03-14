import React from 'react'
import { Container,Row,Col,FormGroup,Form } from 'reactstrap'
import CommonSection from "../components/UI/CommonSection"
import Helmate from "../components/Helmate/Helmate"
import { useSelector } from 'react-redux'
import "../style/checkOut.css"
const CheckOut = () => {
  const totalQty=useSelector(state=>state.cart.totalQuantity)
  const totalAmount=useSelector(state=>state.cart.totalAmount)
  return (
    <Helmate title="CheckOut">
      <CommonSection title="CheckOut"/>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="wb-4 fw-bold">Billing Information</h6>
              <Form className='billing__info'>
                <FormGroup className="form__group">
                  <input type="text" placeholder='Enter Your Name'/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder='Enter Your Email'/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="tel" placeholder='Enter Your Phone no.'/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder='Street Address'/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder='City'/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder='Postal Code'/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder='Country'/>
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkOut__form">
                <h6>Total Qty<span>{totalQty}</span></h6>
                <h6>Subtotal<span>₹{totalAmount}</span></h6>
                <h6><span>Shipping<br/>Free Shipping</span><span>₹0</span></h6>
                <h4>Total Cost<span>₹{totalAmount}</span></h4>
                <button className='buy__btn auth__btn w-100 bg-light text-secondary'>Place an Order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmate>
  )
}

export default CheckOut