import React from 'react'
import '../../style/product-card.css'
import { motion } from 'framer-motion';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../redux/slice/cartSlice'
import { toast } from 'react-toastify';
const ProductCard = ({ item }) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartAction.addItem({
            id: item.id,
            productName: item.productName,
            imgUrl: item.imgUrl,
            price: item.price,
        }))

        toast.success("Product added successfully")
    }
    return (
        <Col lg="3" md="4">
            <div className="product__item">
                <div className="product__img">
                <Link to={`/shop/${item.id}`}><motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" /></Link>
                </div>
                <div className="p-2 product__info">
                    <h3 className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                    <span>{item.category}</span>
                </div>
                <div className='product__card-bottom d-flex align-items-center justify-content-between p-2'>
                    <span className='price'>₹{item.price}</span>
                    <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}><i className="ri-add-line"></i></motion.span>
                </div>
            </div>
        </Col>


    );
};

export default ProductCard