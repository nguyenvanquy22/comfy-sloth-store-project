import React from 'react'
import styled from 'styled-components'
import PageHero from '../components/PageHero/PageHero'
import aboutImg from '../assets/hero-bcg.jpeg'

function AboutPage() {
    return (
        <main>
            <PageHero title='about' />
            <Wrapper className='page section section-center'>
                <img src={aboutImg} alt='nice desk' />
                <article>
                    <div className="title">
                        <h2 className='title__text'>our story</h2>
                        <div className="underline"></div>
                    </div>
                    <p className='about-paragraph'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                        accusantium sapiente tempora sed dolore esse deserunt eaque
                        excepturi, delectus error accusamus vel eligendi, omnis beatae.
                        Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                        dolore, obcaecati incidunt sequi blanditiis est exercitationem
                        molestiae delectus saepe odio eligendi modi porro eaque in libero
                        minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
                        ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
                        similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
                        iste.
                    </p>
                </article>
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.section`
    display: grid;
    gap: 4rem;

    img {
        width: 100%;
        height: 500px;
        display: block;
        object-fit: cover;
        border-radius: var(--radius);
    }
    .title__text {
        text-align: left;
    }
    .underline {
        margin-left: 0;
    }
    .about-paragraph {
        line-height: 2;
        max-width: 45em;
        margin: 0 auto;
        margin-top: 2rem;
        color: var(--clr-grey-5);
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
`

export default AboutPage
