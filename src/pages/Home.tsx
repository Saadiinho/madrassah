import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import FeaturedCourses from '../components/FeaturedCourses'
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