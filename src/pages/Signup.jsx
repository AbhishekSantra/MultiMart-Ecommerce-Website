import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmate from "../components/Helmate/Helmate"
import "../style/login.css"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from "../FirebaseConfig"
import { toast } from "react-toastify";
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + userName}`)
      const UploadTask = uploadBytesResumable(storageRef, file)

      UploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(UploadTask.snapshot.ref).then(async (downloadURL) => {
            // update user profile
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            });
            // store user data in fireStore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            })
          })
        }
      )
      setLoading(false)
      toast.success("Account Created");
      Navigate("/login");
    } catch (error) {
      setLoading(false)
      toast.error("Something went wrong");
    }
  }
  return (
    <Helmate title="Signup">
      <section>
        <Container>
          <Row>
            {
              loading ? <Col lg="12" className='text-center'><h5 className='fw-bold'>loading...</h5></Col> :
                <Col lg="6" className='m-auto text-center'>
                  <h3 className="fs-4 fw-bold">SignUp</h3>
                  <Form className="auth__form" onSubmit={signup}>
                    <FormGroup className="form__group">
                      <input type="text" placeholder='Enter your Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="form__group">
                      <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="form__group">
                      <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="form__group">
                      <input type="file" placeholder='Upload file' onChange={(e) => setFile(e.target.files[0])} />
                    </FormGroup>
                    <button type='submit' className="buy__btn auth__btn">SignUp</button>
                    <p>Already have an account?<Link to="/login"> Login</Link></p>
                  </Form>
                </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmate>
  )
}

export default Signup;