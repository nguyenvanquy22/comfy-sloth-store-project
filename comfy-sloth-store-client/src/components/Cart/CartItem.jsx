import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../../contexts/cart_context'
import { formatPrice } from '../../utils/helpers'
import AmountButton from '../SingleProduct/AmountButton'
import { FaTrash } from 'react-icons/fa'
import { image_path as path } from '../../utils/constants'

function CartItem({ id, image, name, color, price, amount }) {
    const { removeItem, toggleAmount } = useCartContext()

    const increase = () => {
        toggleAmount(id, 'inc')
    }
    const decrease = () => {
        toggleAmount(id, 'dec')
    }

    return (
        <Wrapper>
            <div className="title">
                <img src={`${path}${image}`} alt={name} />
                <div>
                    <h5 className="name">{name}</h5>
                    <p className="color">
                        color: <span style={{ background: color }} />
                    </p>
                    <h5 className='price-small'>{formatPrice(price)}</h5>
                </div>
            </div>
            <h5 className="price">{formatPrice(price)}</h5>
            <AmountButton increase={increase} decrease={decrease} amount={amount} />
            <h5 className="subtotal">{formatPrice(price * amount)}</h5>
            <div className="remove-btn" onClick={() => removeItem(id)}>
                <FaTrash />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    grid-template-rows: 75px;
    justify-items: center;
    align-items: center;
    gap: 3rem 1rem;
    margin-bottom: 3rem;

    .title {
        display: grid;
        grid-template-columns: 100px 200px;
        grid-template-rows: 75px;
        align-items: center;
        text-align: left;
        gap: 1rem;
    }
    .title img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: var(--radius);
        object-fit: cover;
    }
    h5 {
        font-size: 0.75rem;
        margin-bottom: 0;
    }
    .title .name {
        font-size: 0.85rem;
    }
    .title .color {
        color: var(--clr-grey-5);
        font-size: 0.85rem;
        letter-spacing: var(--spacing);
        text-transform: capitalize;
        margin-bottom: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        span {
          display: inline-block;
          width: 0.75rem;
          height: 0.75rem;
          margin-left: 0.5rem;
          border-radius: var(--radius);
        }
    }
    .title .price-small {
        display: none;
        color: var(--clr-primary-5);
    }
    .price {
        display: block;
        font-size: 1rem;
        color: var(--clr-primary-5);
        font-weight: 400;
    }
    .subtotal {
        display: block;
        margin-bottom: 0;
        color: var(--clr-grey-5);
        font-weight: 400;
        font-size: 1rem;
    }
    .remove-btn {
        color: var(--clr-white);
        background: var(--clr-red-dark);
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius);
        font-size: 0.75rem;
        cursor: pointer;
    }
    .amount-btns {
        width: 100px;
        button {
          width: 1.5rem;
          height: 1rem;
          font-size: 1rem;
        }
        h2 {
          font-size: 1.5rem;
        }
    }

    @media (max-width: 776px) {
        grid-template-columns: 200px auto auto;
        .title {
            grid-template-columns: 75px 125px;
        }
        .title .color {
            font-size: 0.75rem;
            span {
              width: 0.5rem;
              height: 0.5rem;
            }
        }
        .title .price-small {
            display: block;
        }
        .amount-btns {
            width: 75px;
            button {
              width: 1rem;
              height: 0.5rem;
              font-size: 0.75rem;
            }
            h2 {
              font-size: 1rem;
            }
        }
        .price {
            display: none;
        }
        .subtotal {
            display: none;
        }
    }
`

export default CartItem
