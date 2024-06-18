import React from 'react'
import PageHero from '../components/PageHero/PageHero'
import styled from 'styled-components'
import { useCartContext } from '../contexts/cart_context'
import { Link } from 'react-router-dom'
import { useUserContext } from '../contexts/user_context'
import { formatPrice } from '../utils/helpers'

function CheckoutPage() {
    const { cart, total_amount } = useCartContext()
    const { user } = useUserContext()

    return (
        <main>
            <PageHero title='checkout' />
            <Wrapper className='page'>
                {cart.length < 1 ? (
                    <div className="empty">
                        <h2>Your cart is empty</h2>
                        <Link to='/product' className='btn'>fill it</Link>
                    </div>
                ) : (
                    <article>
                        <h4>Hello, {user && user.username}</h4>
                        <p>Your total is {formatPrice(total_amount)}</p>
                    </article>
                )}
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .empty {
        text-align: center;
    }
`

export default CheckoutPage
