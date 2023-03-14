import React from 'react'
import { Container, Col, Row } from 'reactstrap';
import { motion } from 'framer-motion';
import './services.css';
import serviceData from '../assets/data/serviceData';
const Services = () => {
    return (
        <section className="section">
            <Container>
                <Row>
                    {
                        serviceData.map((items, index) => (
                            <Col lg='3' md='4' key={index}>
                                <motion.div whileHover={{ scale: 1.2 }} className="service__items" style={{ background: `${items.bg}` }}>
                                    <span><i className={items.icon}></i></span>
                                    <div>
                                        <h3>{items.title}</h3>
                                        <p>{items.subtitle}</p>
                                    </div>
                                </motion.div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>

    )
}

export default Services