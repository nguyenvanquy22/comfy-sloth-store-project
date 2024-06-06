import React from 'react'
import styled from 'styled-components'

function CartColumn() {
    return (
        <Wrapper>
            <div className="content">
                <h5>item</h5>
                <h5>price</h5>
                <h5>quantity</h5>
                <h5>subtotal</h5>
                <span></span>
            </div>
            <hr />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .content {
        display: grid;
        grid-template-columns: 316px 1fr 1fr 1fr auto;
        justify-items: center;
        column-gap: 1rem;
        h5 {
            color: var(--clr-grey-5);
            font-weight: 400;
        }
    }
    span {
        width: 2rem;
        height: 2rem;
    }
    hr {
        margin-top: 1rem;
        margin-bottom: 3rem;
    }

    @media (max-width: 776px) {
        display: none;
    }
`

export default CartColumn
