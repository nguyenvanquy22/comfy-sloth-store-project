import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../../contexts/cart_context'
import { formatPrice } from '../../utils/helpers'
import { useUserContext } from '../../contexts/user_context'
import { Link } from 'react-router-dom'

function CartTotals() {
    const { total_amount, shipping_fee } = useCartContext()
    const { authenticated } = useUserContext()
    return (
        <Wrapper>
            <div>
                <article className='cart-totals'>
                    <h5 className="subtotal">
                        subtotal: <span>{formatPrice(total_amount)}</span>
                    </h5>
                    <p className="shipping-fee">
                        shipping fee: <span>{formatPrice(shipping_fee)}</span>
                    </p>
                    <hr />
                    <h4 className="order-total">
                        order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
                    </h4>
                </article>
                {authenticated ? (
                    <Link to='/checkout' className='btn'>
                        proceed to checkout
                    </Link>
                ) : (
                    <Link to='/login' className='btn-login btn'>
                        Login
                    </Link>
                )}
            </div>
        </Wrapper >
    )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: flex-end;
    margin-top: 3rem;

    .cart-totals {
        border: 1px solid var(--clr-grey-8);
        border-radius: var(--radius);
        padding: 1.5rem 3rem;
    }
    .subtotal, .shipping-fee, .order-total {
        display: grid;
        grid-template-columns: 200px 1fr;
    } 
    .shipping-fee {
        text-transform: capitalize;
    }
    .order-total {
        margin-top: 2rem;
    }
    .btn {
        width: 100%;
        margin-top: 1rem;
        text-align: center;
        font-weight: 700;
    }
    @media (max-width: 776px) {
        justify-content: center;
    }
`

export default CartTotals
