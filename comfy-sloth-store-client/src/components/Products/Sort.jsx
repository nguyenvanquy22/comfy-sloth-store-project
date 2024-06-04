import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../../contexts/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'

function Sort() {
    const {
        filtered_products: products,
        grid_view,
        setGridView,
        setListView,
        sort,
        updateSort,
    } = useFilterContext()

    return (
        <Wrapper>
            <div className="btn-layout-container">
                <button
                    onClick={setGridView}
                    className={`btn-layout ${grid_view ? 'active' : null}`}
                >
                    <BsFillGridFill />
                </button>
                <button
                    onClick={setListView}
                    className={`btn-layout ${!grid_view ? 'active' : null}`}
                >
                    <BsList />
                </button>
            </div>
            <p className='length-products'>{products.length} products found</p>
            <hr />
            <form>
                <label htmlFor="sort" className='sort-label'>sort by</label>
                <select
                    name="sort"
                    id="sort"
                    value={sort}
                    onChange={updateSort}
                    className='sort-select'
                >
                    <option value="price-lowest">price (lowest)</option>
                    <option value="price-highest">price (highest)</option>
                    <option value="name-a">name (a-z)</option>
                    <option value="name-z">name (z-a)</option>
                </select>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
    margin-bottom: 2rem;
    column-gap: 2rem;
    .btn-layout-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 0.5rem;
    }
    .btn-layout {
        background: transparent;
        border: 1px solid var(--clr-black);
        color: var(--clr-black);
        width: 1.5rem;
        height: 1.5rem;
        border-radius: var(--radius);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        svg {
            font-size: 1rem;
        }
    }
    .btn-layout.active {
        background: var(--clr-black);
        color: var(--clr-white);
    }
    .length-products {
        text-transform: capitalize;
        margin-bottom: 0;
    }
    .sort-label {
        font-size: 1rem;
        text-transform: capitalize;
    }
    .sort-select {
        border-color: transparent;
        font-size: 1rem;
        text-transform: capitalize;
        padding: 0.25rem 0.5rem;
    }
    @media (max-width: 576px) {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 0.75rem;
        .btn-layout-container {
            width: 50px;
        }
        .sort-label {
            display: inline-block;
            margin-right: 0.5rem;
        }
    }
`

export default Sort
