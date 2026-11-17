import Navbar from '../components/Navbar'
import Hero from '../components/Hero/Hero.tsx'
import Features from '../components/Features/Features.tsx'
import FeaturedCourses from '../components/Features/FeaturedCourses.tsx'
import HowItWorks from '../components/HowItWorks'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />

            <main>
                <Hero />

                <Features />

                <FeaturedCourses />

                <HowItWorks />

                <CTASection />
            </main>

            <Footer />
        </>
    )
}

export default Home