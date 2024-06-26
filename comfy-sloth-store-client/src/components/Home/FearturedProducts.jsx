import React from 'react'
import { useProductsContext } from '../../contexts/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Product from '../Products/Product'
import Loading from '../Loading/Loading'
import { Error } from '../../pages'

function FearturedProducts() {
    const {
        products_loading: loading,
        products_error: error,
        featured_products: featured,
    } = useProductsContext()

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }
    return (
        <Wrapper className='section'>
            <div className='title'>
                <h2 className='header__content'>featured products</h2>
                <div className='underline'></div>
            </div>
            <div className='section-center featured'>
                {featured.slice(0, 3).map((product) => {
                    return <Product key={product.id} {...product} />
                })}
            </div>
            <Link to='/products' className='btn'>
                all products
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background: var(--clr-grey-10);
    .featured {
        margin: 4rem auto;
        display: grid;
        gap: 2.5rem;
        img {
        height: 225px;
        }
    }
    .btn {
        display: block;
        width: 148px;
        margin: 0 auto;
        text-align: center;
    }
    @media (min-width: 576px) {
        .featured {
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
    }
`

export default FearturedProducts
