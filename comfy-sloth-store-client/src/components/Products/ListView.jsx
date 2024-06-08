import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/helpers'
import { image_path as path } from '../../utils/constants';

function Listview({ products }) {
    return (
        <Wrapper>
            {
                products.map((product) => {
                    const { id, images, name, price, description } = product
                    return (
                        <article key={id} className='product'>
                            <img src={`${path}${images[0].id}`} alt={name} />
                            <div>
                                <h4 className='product-name'>{name}</h4>
                                <h5 className='product-price'>{formatPrice(price)}</h5>
                                <p className='product-des'>{description.substring(0, 150)}...</p>
                                <Link to={`/products/product/${id}`} className='btn'>
                                    Details
                                </Link>
                            </div>
                        </article>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: grid;
    row-gap: 3rem;

    @media (min-width: 992px) {
        .product {
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 2rem;
            align-items: center;
        }
    }
    .product img {
        display: block;
        width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: var(--radius);
        margin-bottom: 1rem;
    }
    .product-name {
        margin-bottom: 0.5rem;
    }
    .product-price {
        color: var(--clr-primary-6);
        margin-bottom: 0.75rem;
    }
    .product-des {
        max-width: 45em;
        margin-bottom: 1rem;
    }
    .btn {
        padding: 0.25rem 0.5rem;
    }
`

export default Listview
