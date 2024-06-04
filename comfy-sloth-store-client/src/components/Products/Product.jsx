import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { formatPrice } from '../../utils/helper'

function Product({ id, image, name, price }) {
    return (
        <Wrapper>
            <div className="container-img">
                <img src={image} alt={name} className='product-img' />
                <Link to={`/products/${id}`} className='product-link'>
                    <FaSearch />
                </Link>
            </div>
            <footer>
                <h5 className='product-name'>{name}</h5>
                <p className='product-price'>{formatPrice(price)}</p>
            </footer>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    .container-img {
        position: relative;
        background: var(--clr-black);
        border-radius: var(--radius);
    }
    .product-img {
        width: 100%;
        display: block;
        object-fit: cover;
        border-radius: var(--radius);
        transition: var(--transition); 
    }
    .product-link {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--clr-primary-5);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        transition: var(--transition);
        opacity: 0;
        cursor: pointer;
        svg {
            font-size: 1.25rem;
            color: var(--clr-white);
          }
    }
    .container-img:hover .product-img {
        opacity: 0.5;
    }
    .container-img:hover .product-link {
        opacity: 1;
    }
    footer {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .product-name, .product-price {
        margin-bottom: 0;
        font-weight: 400;
    }
    .product-price {
        color: var(--clr-primary-5);
        letter-spacing: var(--spacing);
    }

`

export default Product
