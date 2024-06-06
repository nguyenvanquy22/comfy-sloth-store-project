import React from 'react'
import styled from 'styled-components'
import CartColumn from './CartColumn'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import { useCartContext } from '../../contexts/cart_context'
import { Link } from 'react-router-dom'

function CartContent() {
    const { cart, clearCart } = useCartContext()
    return (
        <Wrapper className='section section-center'>
            <CartColumn />
            {cart.map((item) => {
                return <CartItem key={item.id} {...item} />
            })}
            <hr />
            <div className="links-container">
                <Link to='/products' className='link-btn'>
                    continue shopping
                </Link>
                <button
                    type='button'
                    className='link-btn clear-btn'
                    onClick={clearCart}
                >
                    clear shopping cart
                </button>
            </div>
            <CartTotals />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .links-container {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
    }
    .link-btn {
        background: var(--clr-primary-5);
        text-transform: capitalize;
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
        color: var(--clr-white);
        letter-spacing: var(--spacing);
        font-weight: 400;
        cursor: pointer;
    }
    .clear-btn {
        background: var(--clr-black);
    }
`

export default CartContent
