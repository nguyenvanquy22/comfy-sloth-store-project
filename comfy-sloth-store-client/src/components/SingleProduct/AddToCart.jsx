import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import AmountButtons from './AmountButton'
import { useCartContext } from '../../contexts/cart_context'

function AddToCart({ product }) {
    const { id, stock, colors } = product
    const [mainColor, setMainColor] = useState(colors[0].id)
    const [amount, setAmount] = useState(1)
    const { addToCart } = useCartContext()

    const increase = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1
            if (tempAmount > stock) {
                tempAmount = stock
            }
            return tempAmount
        })
    }
    const decrease = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1
            if (tempAmount < 1) {
                tempAmount = 1
            }
            return tempAmount
        })
    }
    return (
        <Wrapper>
            <div className="colors-container">
                <span className='colors-label'>colors: </span>
                <div className="colors-btn">
                    {colors.map((color, index) => {
                        return (
                            <button
                                key={index}
                                style={{ background: color.id }}
                                className={`${mainColor === color.id ? 'color-btn active' : 'color-btn'
                                    }`}
                                onClick={() => setMainColor(color.id)}
                            >
                                {mainColor === color.id ? <FaCheck /> : null}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className="btn-add-container">
                <AmountButtons
                    decrease={decrease}
                    increase={increase}
                    amount={amount}
                />
                <Link
                    to='/cart'
                    className='btn'
                    onClick={() => addToCart(id, mainColor, amount, product)}
                >
                    add to cart
                </Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: 2rem;
    .colors-container {
        display: grid;
        grid-template-columns: 125px 1fr;
        align-items: center;
        margin-bottom: 1rem;
    }
    .colors-label {
        text-transform: capitalize;
        font-weight: 700;
    }
    .colors-btn {
        display: flex;
    }
    .color-btn {
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: #222;
        margin-right: 0.5rem;
        border: none;
        cursor: pointer;
        opacity: 0.5;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            font-size: 0.75rem;
            color: var(--clr-white);
        }
    }
    .active {
        opacity: 1;
    }
    .btn-add-container {
        margin-top: 2rem;
    }
    .btn {
        margin-top: 1rem;
        width: 140px;
        text-align: center;
    }
`

export default AddToCart
