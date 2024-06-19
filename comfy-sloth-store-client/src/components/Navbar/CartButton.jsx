import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart, FaUserPlus, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../contexts/app_context'
import { useCartContext } from '../../contexts/cart_context'
import { useUserContext } from '../../contexts/user_context'

function CartButton() {
  const { closeSidebar } = useAppContext()
  const { total_items } = useCartContext()
  const { user, authenticated, logout } = useUserContext()
  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {authenticated ? (
        <div className='user-options'>
          <Link className='auth-btn'>
            {user.username} <FaUser />
          </Link>
          <ul className='sub-links'>
            <li><Link to='/profile' onClick={closeSidebar}>profile</Link></li>
            <li><Link onClick={logout} >log out</Link></li>
          </ul>
        </div>
      ) : (
        <Link to='/login' className='auth-btn'>
          Login <FaUserPlus />
        </Link>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
  .user-options {
    position: relative;
    padding: 1rem 0;
  }
  .sub-links {
    position: absolute;
    display: none;
    background: var(--clr-primary-5);
    width: 150px;
    padding: 0.5rem 1.5rem;
    margin-top: 1rem;
    z-index: 3;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
    transform: translateX(-15%);
    transition: var(--transition);
  }
  .sub-links a {
    display: block;
    font-size: 1.2rem;
    color: var(--clr-grey-10);  
    cursor: pointer;
    padding: 0.2rem;
    text-transform: capitalize;
  }
  .sub-links a:hover {
    // color: var(--clr-grey-8);  
  }
  .user-options:hover .sub-links {
    display: block;
  }
  .sub-links::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--clr-primary-5);
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export default CartButton
