import CourseCard from '../Course/CourseCard'
import Button from '../Button'
import { MOCK_COURSES } from '../../constants/courses'
import { ArrowRight, BookOpen } from 'lucide-react'

const FeaturedCourses = () => {
    const featuredCourses = MOCK_COURSES.slice(0, 3)

    return (
        <section
            aria-labelledby="courses-title"
            className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
        >

            {/* Background decorations */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-violet-100/40 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">

                    <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-700">

                        <BookOpen size={14} />

                        Nos formations

                    </span>

                    <h2
                        id="courses-title"
                        className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
                    >
                        Découvrez nos cours de Coran et de{' '}
                        <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                            jurisprudence islamique.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                        Des formations en ligne adaptées aux enfants,
                        aux adolescents et aux adultes, pour apprendre
                        le Coran et approfondir vos connaissances
                        en sciences islamiques.
                    </p>

                </div>

                {/* Courses */}
                <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">

                    {featuredCourses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                        />
                    ))}

                </div>

                {/* CTA */}
                <div className="mt-14 flex justify-center">

                    <Button
                        href="/courses"
                        className="group flex items-center gap-2"
                    >
                        Découvrir toutes nos formations

                        <ArrowRight
                            size={17}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />

                    </Button>

                </div>

            </div>

        </section>
    )
}

export default FeaturedCourses