import React from 'react'
import { Link } from 'react-router-dom'
import "./style"
import { Wrapper } from './style'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  return (
    <Wrapper className='cart-btn-wrapper'>
        <NavLink className="cart-btn">
          Cart<span className='cart-container'>
            <FaShoppingCart/>
            <span className="cart-value">
              12
            </span>
          </span>
        </NavLink>
        <button type='button' className="auth-btn">
            Login <FaUserPlus/>
        </button>
    </Wrapper>
  )
}


export default CartButtons
