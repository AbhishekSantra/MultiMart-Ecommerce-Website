import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Helmate from "../components/Helmate/Helmate"
import CommonSection from "../components/UI/CommonSection"
import "../style/product-details.css"
import { motion } from 'framer-motion'
import ProductsList from '../components/UI/ProductsList'
import { useDispatch } from 'react-redux'
import { cartAction } from '../redux/slice/cartSlice'
import { toast } from 'react-toastify'
import {db} from '../FirebaseConfig'
import { doc,getDoc } from 'firebase/firestore'
import useGetData from '../custom-hooks/useGetData'
const ProductDetails = () => {
  const [tab, setTab] = useState('desc');
  const [rating,setRating]=useState(null);
  const [product,setProduct]=useState({})
  const reviewUser=useRef('');
  const reviewMessage=useRef('');
  const { id } = useParams();
  const {data:products}=useGetData('products')
  const docRef=doc(db,'products',id);
  useEffect(()=>{
    const getProduct=async()=>{
      const docSnap=await getDoc(docRef)

      if(docSnap.exists()){
        setProduct(docSnap.data())
      }
      else{
        toast.info("no products")        
      }
    }
    getProduct();
  },[])
  

  const { imgUrl, productName, price, description,category } = product
  const relatedProducts=products.filter(item=>item.category===category);
  const handleSubmit=(e)=>{
    e.preventDefault();
    const reviewUserName=reviewUser.current.value
    const reviewUserMessage=reviewMessage.current.value
    const reviewObj={
      userName:reviewUserName,
      text:reviewUserMessage,
      rating
    }
    console.log(reviewObj);
    toast.success("Review Submitted")
  }
  const dispatch=useDispatch()
  const addToCart=()=>{
    dispatch(
      cartAction.addItem({
        id,
        image:imgUrl,
        productName,
        price
      })
    )
    toast.success("Product added successfully...")
  }
  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])
  return <Helmate title={productName}>
    <CommonSection title={productName} />
    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg="6">
            <img src={imgUrl} alt="" />
          </Col>
          <Col lg="6">
            <div className="product__details">
              <h2>{productName}</h2>
              <div className="product__rating d-flex align-items-center gap-5 mb-3">
                <div >
                  <span><i className="ri-star-s-fill" ></i></span>
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-half-s-line"></i></span>
                </div>
                {/* <p>(<span>{avgRating}</span> Rating)</p> */}
              </div>
              <span className='product__price'>₹{price}</span>
              <p className='mt-3'>{description}</p>
              <motion.button whileTap={{ scale: 1.2 }} className='buy__btn'onClick={addToCart}>Add item</motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="tab__wraper d-flex align-items-center gap-5">
              <h6 className={`${tab === 'desc' ? "active__tab" : ""}`} onClick={() => setTab('desc')}>Description</h6>
              <h6 className={`${tab === 'rev' ? "active__tab" : ""}`} onClick={() => setTab('rev')}>Review</h6>
            </div>
            {
              tab === 'desc' ?
              (
              <div className="tab__content mt-5">
              <p>{description}</p>
              </div>
              ):(
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    {/* <ul>
                      {
                        reviews.map((item,index)=>(
                          
                          <li key={index}>
                            <h4>{item.name}</h4>
                            <span>{item.rating}</span>
                            <p>{item.text}</p>
                          </li>
                        ))
                      }
                    </ul> */}
                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form action="" onSubmit={handleSubmit}>
                        <div className="form__group">
                          <input type="text"placeholder='Enter name'ref={reviewUser}required/>
                        </div>
                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(1)}>1<i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(2)}>2<i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(3)}>3<i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(4)}>4<i className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(5)}>5<i className="ri-star-s-fill"></i></motion.span>
                        </div>
                        <div className="form__group">
                          <textarea rows={4} type="text"placeholder='Review Message...' ref={reviewMessage}required/>
                        </div>
                        <motion.button whileTap={{scale:1.2}} className="buy__btn">Submit</motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )
            }
        </Col>
        <Col lg="12" className='mt-5'>
          <h2 className="related__title">You might also like</h2>
        </Col>
        <ProductsList data={relatedProducts}/>
      </Row>
    </Container>
  </section>
  </Helmate >

}

export default ProductDetails