import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import { MOCK_COURSES } from '../mocks/courses'
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";

const CourseDetails = () => {
    const { id } = useParams<{ id: string }>()

    const course = MOCK_COURSES.find(
        (course) => course.id === Number(id)
    )

    // Cours inexistant
    if (!course) {
        return (
            <>
                <Navbar />
                <main className="bg-slate-50">
                    <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4 py-20 sm:px-6">
                        <div className="max-w-lg text-center">

                            <span className="text-5xl">
                                📖
                            </span>

                            <h1 className="mt-6 text-3xl font-bold text-slate-900">
                                Cours introuvable
                            </h1>

                            <p className="mt-4 text-slate-600">
                                Le niveau que vous recherchez n'existe pas
                                ou n'est plus disponible.
                            </p>

                            <div className="mt-8">
                                <Button href="/courses">
                                    Retour aux cours
                                </Button>
                            </div>

                        </div>
                    </section>
                </main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <main className="bg-slate-50">

            {/* Hero du cours */}
            <section className="relative overflow-hidden bg-white">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
                    <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">

                    {/* Breadcrumb */}
                    <nav className="mb-8 text-sm">
                        <Link
                            to="/courses"
                            className="text-slate-500 transition-colors hover:text-blue-600"
                        >
                            Nos cours
                        </Link>

                        <span className="mx-2 text-slate-300">
                            /
                        </span>

                        <span className="text-slate-700">
                            {course.title}
                        </span>
                    </nav>

                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                        {/* Content */}
                        <div>

                            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                                {course.level}
                            </span>

                            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                                {course.title}
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                {course.description}
                            </p>

                            {/* Informations principales */}
                            <div className="mt-8 grid gap-4 sm:grid-cols-2">

                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                    <span className="text-2xl">
                                        📅
                                    </span>

                                    <p className="mt-3 text-sm text-slate-500">
                                        Fréquence
                                    </p>

                                    <p className="mt-1 font-semibold text-slate-900">
                                        {course.lessons} cours par semaine
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                    <span className="text-2xl">
                                        ⏱️
                                    </span>

                                    <p className="mt-3 text-sm text-slate-500">
                                        Durée
                                    </p>

                                    <p className="mt-1 font-semibold text-slate-900">
                                        {course.duration} par cours
                                    </p>
                                </div>

                            </div>

                            <div className="mt-8">
                                <Button href="/register">
                                    S'inscrire à ce niveau
                                </Button>
                            </div>

                        </div>

                        {/* Image */}
                        <div className="overflow-hidden rounded-3xl shadow-xl">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="aspect-4/3 h-full w-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Programme */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">

                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                            Programme
                        </span>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Ce que vous allez apprendre
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-slate-600">
                            Un programme adapté au niveau des élèves,
                            autour de l'apprentissage du Coran et de
                            la jurisprudence.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2">

                        {course.subjects.map((subject, index) => (
                            <div
                                key={subject}
                                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        {subject}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        Un enseignement adapté au niveau
                                        {` ${course.level.toLowerCase()}`}
                                        .
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Horaires */}
            <section className="bg-white py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">

                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

                        {/* Content */}
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                Organisation
                            </span>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                Horaires des cours
                            </h2>

                            <p className="mt-4 text-lg leading-8 text-slate-600">
                                Les cours sont organisés deux fois par
                                semaine afin de permettre une progression
                                régulière.
                            </p>
                        </div>

                        {/* Schedule */}
                        <div className="space-y-4">

                            {course.groups.map((group) => (
                                <div
                                    key={group.id}
                                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="font-semibold text-slate-900">
                                            {group.name}
                                        </h3>

                                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                                            {group.availableSeats} places
                                        </span>
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        {group.schedule.map((schedule) => (
                                            <div
                                                key={schedule}
                                                className="flex items-center gap-3 text-sm text-slate-600"
                                            >
                                                <span>
                                                    🕐
                                                </span>

                                                <span>
                                                    {schedule}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

                    <div className="rounded-3xl bg-linear-to-br from-blue-600 to-violet-600 px-6 py-12 shadow-xl sm:px-12">

                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Prêt à commencer votre apprentissage ?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-50">
                            Rejoignez le programme {course.title} et
                            commencez votre parcours d'apprentissage
                            du Coran et de la jurisprudence.
                        </p>

                        <div className="mt-8">
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

export default CourseDetails