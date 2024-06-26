import React, { useState } from 'react'
import styled from 'styled-components';
import { image_path as path } from '../../utils/constants';

function ProductImages({ images = [[]] }) {
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <Wrapper>
            <img src={`${path}${mainImage.id}`} alt='product' className='mainImg' />
            <div className="gallery">
                {images.map((image, index) => {
                    return (
                        <img
                            key={index}
                            src={`${path}${image.id}`}
                            alt='product'
                            onClick={() => setMainImage(images[index])}
                            className={`${image.id === mainImage.id ? 'active' : null}`}
                        />
                    )
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    img {
        display: block;
        width: 100%;
        border-radius: var(--radius);
        object-fit: cover;
    }
    .mainImg {
        height: 500px;
    }
    .gallery {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 1rem;
        img {
            height: 100px;
            cursor: pointer;
        }
    }
    .active {
        border: 2px solid var(--clr-primary-5);
    }
    @media (max-width: 576px) {
        .main {
          height: 300px;
        }
        .gallery img {
            height: 50px;
        }
    }
    @media (min-width: 992px) {
        .main {
            height: 500px;
        }
        .gallery img {
            height: 75px;
        }
    }
`

export default ProductImages
