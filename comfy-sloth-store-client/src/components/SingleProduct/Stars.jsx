import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

function Stars({ stars, reviews }) {
    const tempStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5
        return (
            <span key={index} className='icon-star'>
                {stars > number ? (
                    <BsStarFill />
                ) : stars > index ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
        )
    })
    return (
        <Wrapper>
            <div className='stars'>{tempStars}</div>
            <p className='reviews'>({reviews} customer reviews)</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    .icon-star {
        color: #ffb900;
        font-size: 1rem;
        margin-right: 0.25rem;
    }
    .reviews {
        margin-left: 0.5rem;
        margin-bottom: 0;
    }
`

export default Stars
