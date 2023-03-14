import React, { useEffect, useState } from 'react'
import Helmate from '../components/Helmate/Helmate'
import { Container, Col, Row } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import '../style/home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList';
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock';
import useGetData from '../custom-hooks/useGetData';
const Home = () => {
  const {data:products,loading}=useGetData('products')
  const [tradingProduct, setTradingProduct] = useState(products);
  const [bestSalesProduct, setBestSalesProduct] = useState(products);
  const [mobileProduct, setMobileProduct] = useState(products);
  const [wirelessProduct, setWirelessProduct] = useState(products);
  const [popularProduct, setPopularProduct] = useState(products);
  
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTradingProducts = products.filter(items => items.category === "chair");
    setTradingProduct(filteredTradingProducts);

    const filteredBestSalesProducts = products.filter(items => items.category === "sofa");
    setBestSalesProduct(filteredBestSalesProducts);

    const filteredMobileProducts = products.filter(items => items.category === "mobile");
    setMobileProduct(filteredMobileProducts);

    const filteredWirelessProducts = products.filter(items => items.category === "wireless");
    setWirelessProduct(filteredWirelessProducts)

    const filteredPopularProducts = products.filter(items => items.category === "watch");
    setPopularProduct(filteredPopularProducts)
  }, [products]);

  return (
    <>
      <Helmate title={'home'}>
        <section className='hero__section'>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className="hero__content">
                  <p className="hero__subtitle">Trending Product in {year}</p>
                  <h2>Make Your Interior More Minimalist & Modern</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam esse fugit praesentium fuga culpa placeat sapiente asperiores velit recusandae repudiandae, possimus debitis ipsam, iure adipisci dolor consectetur! Earum, quisquam ea.</p>
                  <Link to="/shop"><motion.button className='buy__btn' whileTap={{ scale: 1.2 }}>Shop Now</motion.button></Link>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="hero__img">
                  <img src={heroImg} alt="hero__img" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Services />

        <section className="trending__products">
          <Container>
            <Row>
              <Col lg="12" className='text-center'>
                <h2 className="section__title">Trending Products</h2>
              </Col>
              {
                loading?<h5>Loading...</h5>:
                <ProductsList data={tradingProduct} />
              }
            </Row>
          </Container>
        </section>

        <section className="best__sales">
          <Container>
            <Row>
              <Col lg="12" className='text-center'>
                <h2 className="section__title">Best Sales</h2>
              </Col>
              {
                loading?<h5>Loading...</h5>:
                <ProductsList data={bestSalesProduct} />
              }
            </Row>
          </Container>
        </section>

        <section className="timer__count">
          <Container>
            <Row>
              <Col lg="6"md="12" className='count__down-col'>

                <div className="clock__top-content ">
                  <h4 className='text-white fs-6 mb-2'>Limited Offer</h4>
                  <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                </div>
                <Clock/>
                <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn">
                  <Link to="/shop">Visit Store</Link>
                </motion.button>
              </Col>
              <Col lg="6"md="12" className='text-end'>
                <img className='counter__img' src={counterImg} alt=""/>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="new__arrivals">
          <Container>
            <Row>
              <Col lg="12" className='text-center mb-5'>
                <h2 className="section__title">New Arrivals</h2>
              </Col>
              {
                loading?<h5>Loading...</h5>:
                <ProductsList data={mobileProduct} />
              }
              {
                loading?<h5>Loading...</h5>:
                <ProductsList data={wirelessProduct} />
              }
            </Row>
          </Container>
        </section>
        <section className="popular__products">
          <Container>
            <Row>
              <Col lg="12" className='text-center mb-5'>
                <h2 className="section__title">Popular in Category</h2>
              </Col>
              {
                loading?<h5>Loading...</h5>:
                <ProductsList data={popularProduct} />
              }
            </Row>
          </Container>
        </section>
      </Helmate>
    </>
  )

}

export default Home