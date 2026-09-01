import CourseCard from './CourseCard'
import Button from './Button'
import { MOCK_COURSES } from '../constants/courses.ts'

const FeaturedCourses = () => {
    const featuredCourses = MOCK_COURSES.slice(0, 3)

    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Nos cours
                    </span>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Développez vos compétences avec nos formations.
                    </h2>

                    <p className="mt-4 text-lg leading-8 text-slate-600">
                        Découvrez nos formations et commencez à apprendre
                        dès aujourd'hui.
                    </p>
                </div>

                {/* Courses */}
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featuredCourses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-center">
                    <Button
                        href="/courses"
                        variant="outline"
                    >
                        Voir tous les cours
                    </Button>
                </div>

            </div>
        </section>
    )
}

export default FeaturedCourses