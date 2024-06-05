import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

function AmountButton({ decrease, increase, amount }) {
    return (
        <Wrapper className='amount-btns'>
            <button type='button' className='amount-btn' onClick={decrease}>
                <FaMinus />
            </button>
            <h2 className='amount'>{amount}</h2>
            <button type='button' className='amount-btn' onClick={increase}>
                <FaPlus />
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 140px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    .amount {
        margin-bottom: 0;
    }
    .amount-btn {
        background: transparent;
        border-color: transparent;
        cursor: pointer;
        padding: 1rem 0;
        width: 2rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default AmountButton
