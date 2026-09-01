import CourseCard from '../components/CourseCard'
import Button from '../components/Button'
import { MOCK_COURSES } from '../constants/courses.ts'
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const Courses = () => {
    return (
        <>
            <Navbar />
            <main className="bg-slate-50">

                {/* Header */}
                <section className="relative overflow-hidden bg-white">
                    {/* Background decoration */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

                        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
                        <div className="mx-auto max-w-3xl text-center">

                            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                Nos formations
                            </span>

                            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                                Apprenez le Coran et la jurisprudence
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                Découvrez nos différents niveaux d'apprentissage,
                                adaptés aux enfants, aux adolescents et aux adultes.
                            </p>

                        </div>
                    </div>
                </section>

                {/* Courses */}
                <section className="py-16 sm:py-20 lg:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">

                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                                Nos niveaux
                            </h2>

                            <p className="mt-2 max-w-2xl text-slate-600">
                                Choisissez le programme correspondant à votre
                                âge et découvrez son contenu.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {MOCK_COURSES.map((course) => (
                                <CourseCard
                                    key={course.id}
                                    course={course}
                                />
                            ))}
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="pb-16 sm:pb-20 lg:pb-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">

                        <div className="overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 to-violet-600 px-6 py-12 text-center shadow-xl sm:px-12">

                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Vous souhaitez commencer ?
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-50">
                                Inscrivez-vous dès maintenant et choisissez le
                                niveau qui correspond à votre profil.
                            </p>

                            <div className="mt-8 flex justify-center">
                                <Button
                                    href="/register"
                                    variant="secondary"
                                >
                                    S'inscrire
                                </Button>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Courses