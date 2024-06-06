import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function PageHero({ title, product }) {
    return (
        <Wrapper>
            <div className='section-center'>
                <h3>
                    <Link to='/'>Home</Link>
                    {product && <Link to='/products'>/ Products</Link>}/ {title}
                </h3>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    width: 100%;
    min-height: 20vh;
    display: flex;
    align-items: center;

    a {
        color: var(--clr-primary-3);
        padding: 0.5rem;
        transition: var(--transition);
        :hover {
            color: var(--clr-primary-1);
        }
    }
`

export default PageHero
