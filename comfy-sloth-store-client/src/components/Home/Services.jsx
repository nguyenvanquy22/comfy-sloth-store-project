import React from 'react'
import styled from 'styled-components'
import { services } from '../../untils/constants'

function Services() {
    return (
        <Wrapper>
            <div className='section-center'>
                <article className='header'>
                    <h3 className='header__title'>
                        custom furniture <br /> built only for you
                    </h3>
                    <p className='header__paragraph'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                        dolorum debitis consectetur reprehenderit non aliquam voluptates
                        dolore aut vero consequuntur.
                    </p>
                </article>
                <div className='services'>
                    {
                        services.map((service) => {
                            const { id, icon, title, text } = service;
                            return (
                                <article className='service' key={id}>
                                    <span className='service__icon'>{icon}</span>
                                    <h4 className='service__title'>{title}</h4>
                                    <p className='service__text'>{text}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 5rem 0;
    background: var(--clr-primary-10);
    header__title, service__title {
        color: var(--clr-primary-1);
    }  
    .header__title {
        margin-bottom: 2rem;
    }
    p {
        margin-bottom: 0;
        line-height: 1.8;
        color: var(--clr-primary-3);
    }
    .services {
        margin-top: 4rem;
        display: grid;
        gap: 2.5rem;
    }
    .service {
        background: var(--clr-primary-7);
        text-align: center;
        padding: 2.5rem 2rem;
        border-radius: var(--radius);
        p {
            color: var(--clr-primary-2);
        }
    }
    .service__icon {
        width: 4rem;
        height: 4rem;
        display: grid;
        margin: 0 auto;
        place-items: center;
        margin-bottom: 1rem;
        border-radius: 50%;
        background: var(--clr-primary-10);
        color: var(--clr-primary-1);
        svg {
            font-size: 2rem;
        }
    }
    @media (min-width: 992px) {
        .header {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 576px) {
        .services {
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
    }
    @media (min-width: 1280px) {
        padding: 0 !important;
        .section-center {
            transform: translateY(5rem);
        }
    }
`

export default Services
