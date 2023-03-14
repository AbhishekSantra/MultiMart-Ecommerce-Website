import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmate from "../components/Helmate/Helmate"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../FirebaseConfig"
import "../style/login.css"
import { toast } from 'react-toastify'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(null);
  const Navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user)
      toast.success("Successfully Logged in");
      setLoading(false);
      Navigate("/checkout")
    } catch (error) {
      setLoading(false)
      toast.error(error.message);
    }
  }
  return (
    <Helmate title="Login">
      <section>
        <Container>
          <Row>
            {
              loading ? <Col lg="12" className='text-center'><h5 className='fw-bold'>Loading...</h5></Col> :
                <Col lg="6" className='m-auto text-center'>
                  <h3 className="fs-4 fw-bold">Login</h3>
                  <Form className="auth__form" onSubmit={login}>
                    <FormGroup className="form__group">
                      <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="form__group">
                      <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                    <button type='submit' className="buy__btn auth__btn">Login</button>
                    <p>Don't have an account?<Link to="/signup">Create an account</Link></p>
                  </Form>
                </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmate>
  )
}

export default Login