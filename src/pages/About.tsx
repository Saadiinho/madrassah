import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import AboutWhoWeAre from '../components/AboutWhoWeAre'
import { FEATURES } from '../constants/features'
import { ABOUT_CONTENT } from '../constants/about'
import FeatureCard from "../components/FeatureCard.tsx";

const About = () => {
    return (
        <>
            <Navbar />

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-white">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

                        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
                        <div className="mx-auto max-w-3xl text-center">

                            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                                {ABOUT_CONTENT.hero.badge}
                            </span>

                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                                {ABOUT_CONTENT.hero.title}

                                <span className="block bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                                    {ABOUT_CONTENT.hero.titleHighlight}
                                </span>
                            </h1>

                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                                {ABOUT_CONTENT.hero.description}
                            </p>

                            <div className="mt-8 flex justify-center">
                                <Button href="/register">
                                    S'inscrire
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <AboutWhoWeAre />

                {/* Approach */}
                <section className="bg-slate-50 py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                            {/* Visual */}
                            <div className="relative">
                                <div className="aspect-square max-w-lg overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 to-violet-600 p-1 shadow-xl">
                                    <div className="flex h-full flex-col items-center justify-center rounded-[1.35rem] bg-white p-8 text-center">

                                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
                                            <span className="text-4xl">
                                                📖
                                            </span>
                                        </div>

                                        <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                            Apprendre progressivement
                                        </h3>

                                        <p className="mt-4 max-w-sm text-slate-600">
                                            Un enseignement structuré pour
                                            accompagner chaque élève dans
                                            son parcours.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                    Notre approche
                                </span>

                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                    {ABOUT_CONTENT.approach.title}
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-slate-600">
                                    {ABOUT_CONTENT.approach.description}
                                </p>

                                <div className="mt-8 space-y-5">
                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                                            <span>📚</span>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-slate-900">
                                                Un apprentissage structuré
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                Des cours organisés pour
                                                progresser étape par étape.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                                            <span>👥</span>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-slate-900">
                                                Des niveaux adaptés
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                Des programmes adaptés aux
                                                enfants, adolescents et adultes.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                                            <span>💻</span>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-slate-900">
                                                Des cours en ligne
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                Un enseignement accessible
                                                directement en ligne.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="bg-white py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">

                        <div className="mx-auto max-w-2xl text-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                Pourquoi nous ?
                            </span>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                Un apprentissage pensé pour durer
                            </h2>

                            <p className="mt-4 text-lg leading-8 text-slate-600">
                                Nous souhaitons proposer un cadre simple,
                                régulier et adapté à chaque élève.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {FEATURES.map((feature) => (
                                <FeatureCard
                                    key={feature.title}
                                    feature={feature}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Courses */}
                <section className="bg-slate-50 py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">

                        <div className="mx-auto max-w-2xl text-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                Nos niveaux
                            </span>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                Un programme pour chaque âge
                            </h2>

                            <p className="mt-4 text-lg leading-8 text-slate-600">
                                Trois niveaux permettent à chacun de suivre
                                un enseignement adapté à son âge.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-3">

                            {/* Enfants */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                                    👦
                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                                    Niveau 1 — Enfants
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    Un programme adapté aux enfants pour
                                    découvrir et apprendre le Coran
                                    progressivement et s’initier aux bases
                                    de la jurisprudence.
                                </p>
                            </div>

                            {/* Adolescents */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-2xl">
                                    🧑
                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                                    Niveau 2 — Adolescents
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    Un programme destiné aux adolescents
                                    pour approfondir leur apprentissage du
                                    Coran et leurs connaissances en
                                    jurisprudence.
                                </p>
                            </div>

                            {/* Adultes */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                                    👨
                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                                    Niveau 3 — Adultes
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    Un programme destiné aux adultes pour
                                    progresser dans l’apprentissage du Coran
                                    et approfondir leurs connaissances en
                                    jurisprudence.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Schedule */}
                <section className="bg-white py-20 sm:py-24">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

                        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                            Organisation
                        </span>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            {ABOUT_CONTENT.schedule.title}
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                            {ABOUT_CONTENT.schedule.description}
                        </p>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <span className="text-3xl">
                                    📅
                                </span>

                                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                    2 cours par semaine
                                </h3>

                                <p className="mt-2 text-sm text-slate-600">
                                    Un rythme régulier pour favoriser une
                                    progression continue.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <span className="text-3xl">
                                    ⏱️
                                </span>

                                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                    1h30 par cours
                                </h3>

                                <p className="mt-2 text-sm text-slate-600">
                                    Des séances suffisamment longues pour
                                    permettre un apprentissage approfondi.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <CTASection />
            </main>

            <Footer />
        </>
    )
}

export default About