import React,{useRef,useEffect} from 'react'
import './header.css'
import { Link, NavLink,useNavigate } from 'react-router-dom';
import { Container, Row } from "reactstrap";
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import useAuth from "../../custom-hooks/useAuth"
import {auth} from "../../FirebaseConfig"
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
const nav_link = [
  {
    path: "home",
    display: "Home"
  },
  {
    path: "shop",
    display: "Shop"
  },
  {
    path: "cart",
    display: "Cart"
  }
]
const Header = () => {
  const navigate=useNavigate();
  const headerRef=useRef(null);
  const menuRef=useRef(null);
  const stickyHeaderFunc=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header');
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  const menuToggle=()=>{
    menuRef.current.classList.toggle('active__menu');
  }
  useEffect(()=>{
    stickyHeaderFunc();
    return ()=>window.removeEventListener('scroll',stickyHeaderFunc);
  })
  const totalQuantity=useSelector(state=>state.cart.totalQuantity)
  const navigateToCart =()=>{
    navigate('/cart')    
  }
  const {currentUser}=useAuth();
  const profileActionRef=useRef(null);
  const toggleProfileAction=()=>{
    profileActionRef.current.classList.toggle('showProfile__action');
  } 
  const logout=()=>{
    signOut(auth).then(()=>{
      toast.success("Logged Out");
      navigate("/home")
    }).catch((error)=>{
      toast.error(error.messages)
    })
  }
  return (
    <header className='header'ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <h1>MultiMart</h1>
              </div>
            </div>
            <div className="navigation"ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                {
                  nav_link.map((items, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink to={items.path} className={(navClass) =>
                        navClass.isActive ? 'nav__active' : 'nav__notactive'
                       }
                      >
                        {items.display}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className='badge'>1</span>
              </span>
              <span className="cart_icon" onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className='badge'>{totalQuantity}</span>
              </span>
              <div className='profile'>
                <motion.img whileTap={{scale:1.2}}
                src={currentUser?currentUser.photoURL:userIcon} alt="" onClick={toggleProfileAction} />
                <div className="profile__action" ref={profileActionRef}>
                  {
                    currentUser?<span onClick={logout}>Logout</span>:
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                      <Link to="/dashboard">Dashboard</Link>
                    </div>
                  }
                </div>
              </div>
            <div className="mobile__menu">
              <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
            </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header