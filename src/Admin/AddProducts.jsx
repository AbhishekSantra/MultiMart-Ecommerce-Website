import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { toast } from 'react-toastify'
import { db, storage } from '../FirebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { useNavigate } from 'react-router-dom'
const AddProducts = () => {
  const [productTitle, setProductTitle] = useState("")
  const [shortDescription, setShortDescription] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [productImage, setProductImage] = useState(null)
  const [loading, setLoading] = useState('')
  const navigate = useNavigate();
  const addProducts = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const docRef =await collection(db, 'products')
      const storageRef = ref(storage, `productImages/${Date.now() + productImage.name}`)
      const uploadTask = uploadBytesResumable(storageRef, productImage)
      uploadTask.on(() => {
        toast.error('Image not uploaded!')
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          addDoc(docRef, {
            productName: productTitle,
            shortDesc: shortDescription,
            description: description,
            price: price,
            category: category,
            imgUrl: downloadURL,
          })
        })
      })
      setLoading(false)
      toast.success("Product added successfully");
      navigate("/dashboard/all-products")
    }
    catch (error) {
      setLoading(false)
      toast.error('Product not added!')
    }


    // console.log(product)
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {
              loading ? <h4 className='py-5'>Loading...</h4> : <>
                <h4 className='mb-5'>Add Products</h4>
                <Form onSubmit={addProducts}>
                  <FormGroup className="form__group">
                    <span>Product title</span>
                    <input type="text" placeholder='Item name' value={productTitle} onChange={e => setProductTitle(e.target.value)} required />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Short Description</span>
                    <input type="text" placeholder='Something new' value={shortDescription} onChange={e => setShortDescription(e.target.value)} required />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Description</span>
                    <input type="text" placeholder='Description...' value={description} onChange={e => setDescription(e.target.value)} required />
                  </FormGroup>
                  <div className='d-flex align-item-center justify-content-between gap-5'>
                    <FormGroup className="form__group w-50">
                      <span>price</span>
                      <input type="number" placeholder='₹80000' value={price} onChange={e => setPrice(e.target.value)} required />
                    </FormGroup>
                    <FormGroup className="form__group w-50">
                      <span>Category</span>
                      <select className='w-100 p-2' value={category} onChange={e => setCategory(e.target.value)}>
                        <option>Select Category</option>
                        <option value="chair">Chair</option>
                        <option value="sofa">Sofa</option>
                        <option value="mobile">Mobile</option>
                        <option value="watch">Watch</option>
                        <option value="wireless">Wireless</option>
                      </select>
                    </FormGroup>
                  </div>
                  <div>
                    <FormGroup className="form__group">
                      <span>Product Image</span>
                      <input type="file" onChange={e => setProductImage(e.target.files[0])} required />
                    </FormGroup>
                  </div>
                  <button className='buy__btn' type='submit'>Add Product</button>
                </Form>
              </>

            }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts