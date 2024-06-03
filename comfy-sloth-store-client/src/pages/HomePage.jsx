import React from 'react'
import Hero from '../components/Home/Hero'
import FeaturedProducts from '../components/Home/FearturedProducts'
import Services from '../components/Home/Services'
import Contact from '../components/Home/Contact'


function HomePage() {
    return (
        <main>
            <Hero />
            <FeaturedProducts />
            <Services />
            <Contact />
        </main>
    )
}

export default HomePage
