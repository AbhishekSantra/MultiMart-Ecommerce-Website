import React, { useState } from 'react'
import { Container,Col,Row } from 'reactstrap';
import CommonSection from '../components/UI/CommonSection';
import Helmate from '../components/Helmate/Helmate';
import '../style/shop.css'
import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList';
const Shop = () => {
  const [productData,setProductData]=useState(products)

  const handleFilter=(e)=>{
    const filterValue=e.target.value;
    if(filterValue==="sofa"){
      const filterProducts=products.filter((item)=>item.category==="sofa")
      setProductData(filterProducts)
    }
    if(filterValue==="mobile"){
      const filterProducts=products.filter((item)=>item.category==="mobile")
      setProductData(filterProducts)
    }
    if(filterValue==="chair"){
      const filterProducts=products.filter((item)=>item.category==="chair")
      setProductData(filterProducts)
    }
    if(filterValue==="watch"){
      const filterProducts=products.filter((item)=>item.category==="watch")
      setProductData(filterProducts)
    }
    if(filterValue==="wireless"){
      const filterProducts=products.filter((item)=>item.category==="wireless")
      setProductData(filterProducts)
    }
  }
  const handleSearch=(e)=>{
    const searchData=e.target.value;
    const searchedProducts=products.filter(item=>item.productName.toLowerCase().includes(searchData.toLowerCase()));
    setProductData(searchedProducts);
  }
  return <Helmate title="Shop">
    <CommonSection title='Products' />
    <section>
      <Container>
        <Row>
          <Col lg='3'md='6'>
            <div className="filter__weiget">
              <select onChange={handleFilter}>
                <option>Filter by Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </Col>
          <Col lg='3'md='6'>
          <div className="filter__weiget text-end">
              <select>
                <option>Sort By</option>
                <option value="Ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg='6'md='12'>
            <div className="search__box">
              <input type="text" placeholder='Searching...'onChange={handleSearch} />
              <span><i className="ri-search-line"></i></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Container>
        <Row>
          {
            productData.length===0?(<h1 className='text-center fs-4'>
              No Products are Found...
            </h1>)
            :
            <ProductsList data={productData}/>
          }
        </Row>
      </Container>
    </section>
  </Helmate>

}

export default Shop