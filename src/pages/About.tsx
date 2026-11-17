import {useEffect} from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import AboutWhoWeAre from '../components/AboutWhoWeAre'
import FeatureCard from '../components/Features/FeatureCard'

import {FEATURES} from '../constants/features'

import {
    ArrowRight,
    Baby,
    BookOpen,
    CalendarDays,
    CheckCircle2,
    Clock3,
    GraduationCap,
    Laptop,
    MonitorPlay,
    UserRound,
    Users,
} from 'lucide-react'

const About = () => {
    useEffect(() => {
        document.title = 'À propos de Dar Al Coran | Cours de Coran en ligne'

        let description = document.querySelector(
            'meta[name="description"]'
        ) as HTMLMetaElement | null

        if (!description) {
            description = document.createElement('meta')
            description.name = 'description'
            document.head.appendChild(description)
        }

        description.content =
            'Découvrez Dar Al Coran, une plateforme de cours de Coran en ligne portée par deux enseignants connaissant le Coran par cœur. Des cours adaptés aux enfants, adolescents et adultes.'

    }, [])

    const approachPoints = [
        {
            icon: BookOpen,
            title: 'Un apprentissage structuré',
            description:
                'Des cours organisés pour apprendre le Coran progressivement et consolider ses connaissances.',
        },
        {
            icon: Users,
            title: 'Des niveaux adaptés',
            description:
                'Des parcours destinés aux enfants, aux adolescents et aux adultes, selon leur âge et leur niveau.',
        },
        {
            icon: MonitorPlay,
            title: 'Des cours en ligne',
            description:
                'Un apprentissage à distance pour suivre les cours depuis chez soi et faciliter l’accès à l’enseignement.',
        },
    ]

    const courseLevels = [
        {
            icon: Baby,
            title: 'Niveau 1 — Enfants',
            description:
                'Un programme adapté aux enfants pour découvrir et apprendre le Coran progressivement, tout en s’initiant aux bases de la jurisprudence.',
            color: 'bg-blue-50 text-blue-600',
        },
        {
            icon: GraduationCap,
            title: 'Niveau 2 — Adolescents',
            description:
                'Un programme destiné aux adolescents pour approfondir leur apprentissage du Coran et développer leurs connaissances en jurisprudence.',
            color: 'bg-violet-50 text-violet-600',
        },
        {
            icon: UserRound,
            title: 'Niveau 3 — Adultes',
            description:
                'Un programme destiné aux adultes pour progresser dans l’apprentissage du Coran et approfondir les bases de la jurisprudence.',
            color: 'bg-blue-50 text-blue-600',
        },
    ]

    return (
        <>
            <Navbar />

            <main>

                {/* HERO */}
                <section
                    aria-labelledby="about-title"
                    className="relative overflow-hidden border-b border-slate-200 bg-white"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                    >
                        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
                        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                        <div className="mx-auto max-w-4xl text-center">

                            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                                <BookOpen size={16} />
                                À propos de Dar Al Coran
                            </span>

                            <h1
                                id="about-title"
                                className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                            >
                                Apprendre le Coran et transmettre son savoir
                                <span className="mt-3 block bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                                    Une mission, une vocation
                                </span>
                            </h1>

                            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                                Découvrez Dar Al Coran, une plateforme dédiée
                                à l’apprentissage du Coran en ligne. Portée par
                                deux enseignants connaissant le Coran par cœur,
                                notre initiative vise à rendre cet apprentissage
                                accessible aux enfants, aux adolescents et aux
                                adultes.
                            </p>

                            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button
                                    href="/register"
                                    className="group flex items-center gap-2"
                                >
                                    Découvrir nos cours
                                    <ArrowRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </Button>

                                <Button
                                    href="/courses"
                                    variant="outline"
                                >
                                    Voir les programmes
                                </Button>
                            </div>

                            {/* Key information */}
                            <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-5 border-t border-slate-200 pt-8">

                                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                                    <BookOpen size={19} className="text-blue-600" />
                                    Apprentissage du Coran
                                </div>

                                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                                    <Users size={19} className="text-violet-600" />
                                    Trois niveaux
                                </div>

                                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                                    <Laptop size={19} className="text-blue-600" />
                                    Cours en ligne
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* WHO WE ARE */}
                <AboutWhoWeAre />

                {/* APPROACH */}
                <section
                    aria-labelledby="approach-title"
                    className="bg-slate-50 py-20 sm:py-24"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                            {/* Visual */}
                            <div className="relative mx-auto w-full max-w-lg">
                                <div
                                    className="relative aspect-square overflow-hidden rounded-3xl bg-cover bg-center shadow-xl"
                                    style={{
                                        backgroundImage: "url('/images/about/learning.jpg')",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/55" />

                                    <div className="relative flex h-full flex-col items-center justify-center p-8 text-center text-white">

                                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
                                            <BookOpen size={38} strokeWidth={1.5} />
                                        </div>

                                        <h3 className="mt-6 text-2xl font-bold sm:text-3xl">
                                            Apprendre progressivement
                                        </h3>

                                        <p className="mt-4 max-w-sm leading-7 text-white/80">
                                            Un enseignement structuré pour
                                            accompagner chaque élève dans
                                            son parcours d’apprentissage.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                    Notre approche pédagogique
                                </span>

                                <h2
                                    id="approach-title"
                                    className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                                >
                                    Un accompagnement adapté à chaque élève
                                </h2>

                                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                                    Apprendre le Coran demande de la régularité,
                                    de la patience et un accompagnement adapté.
                                    C’est pourquoi nous souhaitons proposer
                                    un cadre d’apprentissage accessible,
                                    permettant à chacun de progresser selon
                                    ses capacités et son niveau.
                                </p>

                                <div className="mt-9 space-y-7">
                                    {approachPoints.map((point) => {
                                        const Icon = point.icon

                                        return (
                                            <div
                                                key={point.title}
                                                className="flex gap-4"
                                            >
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                                    <Icon size={23} strokeWidth={1.8} />
                                                </div>

                                                <div>
                                                    <h3 className="font-semibold text-slate-900">
                                                        {point.title}
                                                    </h3>

                                                    <p className="mt-2 text-sm leading-7 text-slate-600">
                                                        {point.description}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section
                    aria-labelledby="features-title"
                    className="bg-white py-20 sm:py-24"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                        <div className="mx-auto max-w-2xl text-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                Pourquoi choisir Dar Al Coran ?
                            </span>

                            <h2
                                id="features-title"
                                className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                            >
                                Un cadre pensé pour apprendre et progresser
                            </h2>

                            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                                Nous souhaitons mettre en place un environnement
                                d’apprentissage qui facilite la régularité,
                                l’acquisition des connaissances et la progression
                                de chaque élève.
                            </p>
                        </div>

                        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {FEATURES.map((feature) => (
                                <FeatureCard
                                    key={feature.title}
                                    feature={feature}
                                />
                            ))}
                        </div>

                    </div>
                </section>

                {/* COURSE LEVELS */}
                <section
                    aria-labelledby="levels-title"
                    className="bg-slate-50 py-20 sm:py-24"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                        <div className="mx-auto max-w-2xl text-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                Nos programmes
                            </span>

                            <h2
                                id="levels-title"
                                className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                            >
                                Des cours de Coran pour tous les âges
                            </h2>

                            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                                Nos trois niveaux permettent de proposer
                                un apprentissage adapté aux différentes
                                étapes de la vie.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {courseLevels.map((level) => {
                                const Icon = level.icon

                                return (
                                    <article
                                        key={level.title}
                                        className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8"
                                    >
                                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${level.color}`}>
                                            <Icon size={27} strokeWidth={1.8} />
                                        </div>

                                        <h3 className="mt-6 text-xl font-bold text-slate-900">
                                            {level.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-slate-600">
                                            {level.description}
                                        </p>

                                        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                                            <CheckCircle2 size={17} />
                                            Programme adapté
                                        </div>
                                    </article>
                                )
                            })}
                        </div>

                        <div className="mt-10 text-center">
                            <Button
                                href="/courses"
                                className="inline-flex items-center gap-2"
                            >
                                Consulter les programmes
                                <ArrowRight size={17} />
                            </Button>
                        </div>

                    </div>
                </section>

                {/* SCHEDULE */}
                <section
                    aria-labelledby="schedule-title"
                    className="bg-white py-20 sm:py-24"
                >
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

                        <div className="mx-auto max-w-2xl text-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                Organisation des cours
                            </span>

                            <h2
                                id="schedule-title"
                                className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                            >
                                Un rythme régulier pour progresser
                            </h2>

                            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                                L’apprentissage repose sur la régularité.
                                Nos cours sont organisés pour permettre
                                aux élèves de consacrer un temps dédié
                                à leur progression chaque semaine.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 sm:grid-cols-2">

                            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition-all hover:border-blue-200 hover:shadow-lg">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                    <CalendarDays size={27} />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    2 cours par semaine
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Deux rendez-vous hebdomadaires pour
                                    entretenir une progression régulière
                                    dans l’apprentissage.
                                </p>
                            </article>

                            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition-all hover:border-violet-200 hover:shadow-lg">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                                    <Clock3 size={27} />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    1h30 par cours
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Des séances de 1h30 pour prendre
                                    le temps d’apprendre, de pratiquer
                                    et d’approfondir les connaissances.
                                </p>
                            </article>

                        </div>

                    </div>
                </section>

                {/* CTA - Composant conservé */}
                <CTASection />

            </main>

            <Footer />
        </>
    )
}

export default About