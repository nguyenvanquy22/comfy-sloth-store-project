import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../../contexts/filter_context'
import { getUniqueValues, formatPrice } from '../../utils/helper'
import { FaCheck } from 'react-icons/fa'

function Filters() {
    const {
        filters: {
            text,
            category,
            company,
            color,
            min_price,
            max_price,
            price,
            shipping,
        },
        all_products,
        updateFilters,
        clearFilters,
    } = useFilterContext()

    const categories = getUniqueValues(all_products, 'category')
    const companies = getUniqueValues(all_products, 'company')
    const colors = getUniqueValues(all_products, 'colors')

    return (
        <Wrapper>
            <div className="filters">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-contol">
                        <input
                            type='text'
                            name='text'
                            value={text}
                            placeholder='search'
                            onChange={updateFilters}
                            className='search-input'
                        />
                    </div>
                    <div className="form-contol">
                        <h5 className='filter-title'>category</h5>
                        <div>
                            {categories.map((c, index) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={updateFilters}
                                        type='button'
                                        name='category'
                                        className={`${category === c.toLowerCase() ? 'active' : null}`}
                                    >
                                        {c}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="form-contol">
                        <h5 className='filter-title'>company</h5>
                        <select
                            name='company'
                            value={company}
                            onChange={updateFilters}
                            className='company-select'
                        >
                            {companies.map((c, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={c}
                                    >
                                        {c}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="form-contol">
                        <h5 className='filter-title'>color</h5>
                        <div className="colors">
                            {colors.map((c, index) => {
                                if (c === 'all') {
                                    return (
                                        <button
                                            key={index}
                                            onClick={updateFilters}
                                            name='color'
                                            data-color='all'
                                            className={color === 'all' ? 'all-btn active' : 'all-btn'}
                                        >
                                            all
                                        </button>
                                    )
                                }
                                return (
                                    <button
                                        key={index}
                                        onClick={updateFilters}
                                        style={{ background: c }}
                                        name='color'
                                        data-color={c}
                                        className={color === c ? 'color-btn active' : 'color-btn'}
                                    >
                                        {color === c ? <FaCheck /> : null}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="form-contol">
                        <h5 className='filter-title'>price</h5>
                        <p className='price'>{formatPrice(price)}</p>
                        <input
                            type='range'
                            name='price'
                            onChange={updateFilters}
                            min={min_price}
                            max={max_price}
                            value={price}
                            className='range-price'
                        />
                    </div>
                    <div className="form-contol shipping">
                        <label htmlFor='shipping' className='filter-title'>free shipping</label>
                        <input
                            type='checkbox'
                            name='shipping'
                            id='shipping'
                            checked={shipping}
                            onChange={updateFilters}
                        />
                    </div>
                </form>
                <button type='button' className='clear-btn' onClick={clearFilters}>
                    clear filters
                </button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .form-contol {
        margin-bottom: 1.25rem;
    }
    .filter-title {
        margin-bottom: 0.5rem;
    }
    .search-input {
        padding: 0.5rem;
        background: var(--clr-grey-10);
        border-radius: var(--radius);
        border-color: transparent;
        letter-spacing: var(--spacing);
    }
    .search-input::placeholder {
        text-transform: capitalize;
    }
    button {
        display: block;
        margin: 0.25em 0;
        padding: 0.25rem 0;
        text-transform: capitalize;
        background: transparent;
        border: none;
        border-bottom: 1px solid transparent;
        letter-spacing: var(--spacing);
        color: var(--clr-grey-5);
        cursor: pointer;
    }
    .active {
        border-color: var(--clr-grey-5);
        opacity: 1 !important;
    }
    .company-select {
        background: var(--clr-grey-10);
        border-radius: var(--radius);
        border-color: transparent;
        padding: 0.25rem;
        text-transform: capitalize;
    }
    .colors {
        display: flex;
        align-items: center;
    }
    .all-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.5rem;
        opacity: 0.5;
    } 
    .color-btn {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
        opacity: 0.5;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        svg {
            font-size: 0.5rem;
            color: var(--clr-white);
        }
    }  
    .all-btn .active {
        text-decoration: underline;
    }   
    .price {
        margin-bottom: 0.25rem;
    }
    .shipping {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        text-transform: capitalize;
        column-gap: 0.5rem;
        font-size: 1rem;
    }
    .clear-btn {
        background: var(--clr-red-dark);
        color: var(--clr-white);
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
    }
    @media (min-width: 768px) {
        .filters {
          position: sticky;
          top: 1rem;
        }
    }
`

export default Filters
