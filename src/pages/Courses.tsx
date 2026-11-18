import { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseCard from '../components/Course/CourseCard'
import { MOCK_COURSES } from '../constants/courses'

const SEO_TITLE = 'Cours de Coran en ligne | Dar Al Coran'

const SEO_DESCRIPTION =
    'Cours de Coran et de jurisprudence en ligne pour enfants, adolescents et adultes. Découvrez nos programmes et nos horaires.'

const FAQ_ITEMS = [
    {
        question: 'Comment se déroulent les cours en direct ?',
        answer:
            'Les cours se déroulent en ligne, en direct avec un enseignant. Chaque groupe suit deux séances par semaine de 1h30, selon les horaires indiqués dans le programme.',
    },
    {
        question: 'Quel niveau faut-il avoir pour commencer ?',
        answer:
            'Les programmes sont organisés par tranche d’âge : enfants, adolescents et adultes. Pour connaître le groupe le plus adapté à votre situation, vous pouvez consulter les programmes ou nous contacter avant votre inscription.',
    },
    {
        question: 'Quelle école juridique est enseignée dans les cours de fiqh ?',
        answer:
            'L’enseignement du fiqh s’appuie principalement sur l’école malikite. Les avis des autres écoles juridiques sont également étudiés afin de présenter les différentes approches et de mieux comprendre la richesse de la jurisprudence islamique.',
    },
    {
        question: 'Quelles matières sont enseignées ?',
        answer:
            'Les programmes proposés associent l’apprentissage du Coran et l’étude de la jurisprudence islamique. Le contenu est organisé selon le public auquel le cours s’adresse.',
    },
]

const Courses = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0)

    const structuredData = useMemo(
        () => ({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Cours de Coran et de jurisprudence en ligne — Dar Al Coran',
            description: SEO_DESCRIPTION,
            itemListElement: MOCK_COURSES.map((course, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'Course',
                    name: course.title,
                    description: course.description,
                    courseMode: 'online',
                    educationalLevel: course.level,
                    provider: {
                        '@type': 'Organization',
                        name: 'Dar Al Coran',
                    },
                },
            })),
        }),
        [],
    )

    useEffect(() => {
        document.title = SEO_TITLE

        let descriptionTag = document.querySelector(
            'meta[name="description"]',
        ) as HTMLMetaElement | null

        if (!descriptionTag) {
            descriptionTag = document.createElement('meta')
            descriptionTag.name = 'description'
            document.head.appendChild(descriptionTag)
        }

        descriptionTag.content = SEO_DESCRIPTION

        let canonicalTag = document.querySelector(
            'link[rel="canonical"]',
        ) as HTMLLinkElement | null

        if (!canonicalTag) {
            canonicalTag = document.createElement('link')
            canonicalTag.rel = 'canonical'
            document.head.appendChild(canonicalTag)
        }

        canonicalTag.href = `${window.location.origin}/courses`

        const existingSchema = document.getElementById(
            'dar-al-coran-courses-schema',
        )

        if (existingSchema) {
            existingSchema.remove()
        }

        const schemaScript = document.createElement('script')
        schemaScript.id = 'dar-al-coran-courses-schema'
        schemaScript.type = 'application/ld+json'
        schemaScript.textContent = JSON.stringify(structuredData)

        document.head.appendChild(schemaScript)

        return () => {
            schemaScript.remove()
        }
    }, [structuredData])

    return (
        <>
            <Navbar />

            <main className="bg-[#F7F6F2] text-[#1C1C1E]">
                {/* HERO */}
                <section
                    aria-labelledby="courses-heading"
                    className="relative overflow-hidden border-b border-[#E7E4DC] bg-[#FBFBFA]"
                >
                    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-10 lg:py-28">
                        <div className="max-w-2xl">
                            <div className="mb-7 inline-flex items-center gap-3">
                                <span className="h-px w-9 bg-[#2563EB]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
                                    Dar Al Coran · Nos formations
                                </span>
                            </div>

                            <h1
                                id="courses-heading"
                                className="font-display text-4xl font-medium leading-[1.12] tracking-tight text-[#1C1C1E] sm:text-5xl lg:text-6xl"
                            >
                                Apprendre le Coran,
                                <span className="block text-[#2563EB]">
                                    approfondir sa pratique.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-8 text-[#62645E] sm:text-lg">
                                Des cours en ligne en direct pour apprendre le
                                Coran et découvrir les bases de la jurisprudence
                                islamique, avec un programme adapté aux enfants,
                                aux adolescents et aux adultes.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="#programmes"
                                    className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#2563EB] px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                                >
                                    Choisir mon niveau
                                </a>

                                <a
                                    href="#pedagogie"
                                    className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#D8D8CE] bg-transparent px-7 py-3 text-sm font-semibold text-[#30332D] transition-colors duration-200 hover:border-[#2563EB] hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                                >
                                    Découvrir notre pédagogie
                                </a>
                            </div>

                            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#E7E4DC] pt-7">
                                <div>
                                    <p className="font-display text-2xl text-[#2563EB]">
                                        2
                                    </p>
                                    <p className="mt-1 text-xs text-[#777970]">
                                        séances par semaine
                                    </p>
                                </div>

                                <span className="hidden h-9 w-px bg-[#E2DED4] sm:block" />

                                <div>
                                    <p className="font-display text-2xl text-[#2563EB]">
                                        1h30
                                    </p>
                                    <p className="mt-1 text-xs text-[#777970]">
                                        par séance
                                    </p>
                                </div>

                                <span className="hidden h-9 w-px bg-[#E2DED4] sm:block" />

                                <div>
                                    <p className="font-display text-2xl text-[#2563EB]">
                                        3
                                    </p>
                                    <p className="mt-1 text-xs text-[#777970]">
                                        publics accompagnés
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Visuel éditorial sans image décorative artificielle */}
                        <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
                            <div className="relative overflow-hidden rounded-lg border border-[#E5E1D7] bg-[#EDECE4] p-5 sm:p-7">
                                <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full border-b border-l border-[#D8D5C9]" />

                                <div className="relative flex min-h-82.5 flex-col justify-between sm:min-h-97.5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#667064]">
                                            Apprendre avec régularité
                                        </span>
                                        <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
                                    </div>

                                    <div className="py-10">
                                        <p className="font-display text-4xl leading-tight text-[#1C1C1E] sm:text-5xl">
                                            Un apprentissage
                                            <span className="block italic text-[#2563EB]">
                                                à chaque étape.
                                            </span>
                                        </p>

                                        <div className="mt-8 h-px w-16 bg-[#93C5FD]" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-lg border border-[#DCD9CF] bg-[#FBFBFA]/70 p-4">
                                            <p className="text-xs text-[#777970]">
                                                Matière
                                            </p>
                                            <p className="mt-2 text-sm font-semibold text-[#30332D]">
                                                Coran
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-[#DCD9CF] bg-[#FBFBFA]/70 p-4">
                                            <p className="text-xs text-[#777970]">
                                                Matière
                                            </p>
                                            <p className="mt-2 text-sm font-semibold text-[#30332D]">
                                                Jurisprudence
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-3 -z-10 h-full w-full rounded-lg border border-[#D9D2C2] sm:-bottom-5 sm:-left-5" />
                        </div>
                    </div>
                </section>

                {/* PROGRAMMES */}
                <section
                    id="programmes"
                    aria-labelledby="programmes-heading"
                    className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="mb-12 grid gap-5 md:grid-cols-[1fr_0.65fr] md:items-end">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
                                    Les programmes
                                </p>

                                <h2
                                    id="programmes-heading"
                                    className="mt-4 font-display text-3xl font-medium tracking-tight text-[#1C1C1E] sm:text-4xl"
                                >
                                    Un parcours selon votre âge
                                </h2>
                            </div>

                            <p className="max-w-lg text-sm leading-7 text-[#686B63] md:justify-self-end">
                                Chaque programme s’adresse à un public précis.
                                Consultez les contenus et les horaires pour
                                identifier le groupe qui vous correspond.
                            </p>
                        </div>

                        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {MOCK_COURSES.length > 0 ? (
                                MOCK_COURSES.map((course) => (
                                    <CourseCard
                                        key={course.id}
                                        course={course}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full rounded-lg border border-dashed border-[#D8D8CE] bg-[#FBFBFA] px-6 py-14 text-center">
                                    <h3 className="font-display text-2xl text-[#1C1C1E]">
                                        Aucun programme disponible
                                    </h3>
                                    <p className="mt-3 text-sm text-[#686B63]">
                                        Les programmes seront affichés ici dès
                                        leur publication.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* PEDAGOGIE / REASSURANCE */}
                <section
                    id="pedagogie"
                    aria-labelledby="pedagogie-heading"
                    className="scroll-mt-24 border-y border-[#E5E1D7] bg-[#FBFBFA] py-20 sm:py-24"
                >
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="max-w-2xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
                                Notre organisation
                            </p>

                            <h2
                                id="pedagogie-heading"
                                className="mt-4 font-display text-3xl font-medium leading-tight text-[#1C1C1E] sm:text-4xl"
                            >
                                Un cadre régulier pour progresser
                            </h2>

                            <p className="mt-5 text-base leading-8 text-[#686B63]">
                                La régularité et un cadre adapté facilitent
                                l’apprentissage. Les cours sont organisés en
                                groupes selon l’âge des participants, avec des
                                horaires définis pour chaque programme.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-0 border-y border-[#E5E1D7] sm:grid-cols-2 lg:grid-cols-4">
                            <div className="border-b border-[#E5E1D7] py-7 sm:border-r sm:px-6 lg:border-b-0">
                                <span className="font-display text-3xl text-[#2563EB]">
                                    01
                                </span>
                                <h3 className="mt-4 text-base font-semibold text-[#252822]">
                                    Cours en direct
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-[#73766D]">
                                    Des séances en ligne avec un enseignant,
                                    selon le planning du groupe.
                                </p>
                            </div>

                            <div className="border-b border-[#E5E1D7] py-7 sm:px-6 lg:border-b-0 lg:border-r">
                                <span className="font-display text-3xl text-[#2563EB]">
                                    02
                                </span>
                                <h3 className="mt-4 text-base font-semibold text-[#252822]">
                                    Deux séances par semaine
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-[#73766D]">
                                    Un rythme régulier pour entretenir les
                                    apprentissages.
                                </p>
                            </div>

                            <div className="border-b border-[#E5E1D7] py-7 sm:border-b-0 sm:border-r sm:px-6">
                                <span className="font-display text-3xl text-[#2563EB]">
                                    03
                                </span>
                                <h3 className="mt-4 text-base font-semibold text-[#252822]">
                                    1h30 par séance
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-[#73766D]">
                                    Un temps de cours défini pour chaque
                                    rencontre.
                                </p>
                            </div>

                            <div className="py-7 sm:px-6">
                                <span className="font-display text-3xl text-[#2563EB]">
                                    04
                                </span>
                                <h3 className="mt-4 text-base font-semibold text-[#252822]">
                                    Groupes limités
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-[#73766D]">
                                    Jusqu’à 15 élèves par groupe, selon les
                                    capacités indiquées.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col gap-4 rounded-lg border border-[#E5E1D7] bg-[#F7F6F2] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
                                    Deux matières complémentaires
                                </p>
                                <h3 className="mt-2 font-display text-2xl text-[#1C1C1E]">
                                    Coran et jurisprudence islamique
                                </h3>
                                <p className="mt-2 max-w-2xl text-sm leading-7 text-[#686B63]">
                                    Les programmes associent l’apprentissage du
                                    Coran à l’étude des bases de la jurisprudence.
                                </p>
                            </div>

                            <a
                                href="#programmes"
                                className="inline-flex shrink-0 items-center justify-center rounded-lg border border-[#2563EB] px-5 py-3 text-sm font-semibold text-[#2563EB] transition-colors hover:bg-[#2563EB] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                            >
                                Voir les programmes
                            </a>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section
                    aria-labelledby="faq-heading"
                    className="py-20 sm:py-24 lg:py-28"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-10">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
                                Besoin de précisions ?
                            </p>

                            <h2
                                id="faq-heading"
                                className="mt-4 font-display text-3xl font-medium leading-tight text-[#1C1C1E] sm:text-4xl"
                            >
                                Questions fréquentes
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#686B63]">
                                Retrouvez les réponses aux questions les plus
                                courantes sur le fonctionnement de nos cours.
                            </p>

                            <a
                                href="/register"
                                className="mt-7 inline-flex items-center text-sm font-semibold text-[#2563EB] underline decoration-[#BFDBFE] underline-offset-4 transition-colors hover:text-[#1D4ED8]"
                            >
                                Accéder à l’inscription
                            </a>
                        </div>

                        <div className="border-t border-[#E5E1D7]">
                            {FAQ_ITEMS.map((item, index) => {
                                const isOpen = openFaq === index
                                const answerId = `faq-answer-${index}`

                                return (
                                    <div
                                        key={item.question}
                                        className="border-b border-[#E5E1D7]"
                                    >
                                        <h3>
                                            <button
                                                type="button"
                                                aria-expanded={isOpen}
                                                aria-controls={answerId}
                                                onClick={() =>
                                                    setOpenFaq(
                                                        isOpen ? null : index,
                                                    )
                                                }
                                                className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563EB]"
                                            >
                                                <span className="text-base font-semibold leading-7 text-[#252822]">
                                                    {item.question}
                                                </span>

                                                <span
                                                    aria-hidden="true"
                                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DCD9CF] text-lg text-[#2563EB] transition-transform duration-200 ${
                                                        isOpen
                                                            ? 'rotate-45'
                                                            : ''
                                                    }`}
                                                >
                                                    +
                                                </span>
                                            </button>
                                        </h3>

                                        <div
                                            id={answerId}
                                            hidden={!isOpen}
                                            className="pb-6 pr-10 text-sm leading-7 text-[#686B63]"
                                        >
                                            {item.answer}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section className="border-t border-[#E5E1D7] bg-[#1E3A8A]">
                    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10">
                        <div className="max-w-2xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">
                                Dar Al Coran
                            </p>

                            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
                                Trouvez le programme qui vous correspond.
                            </h2>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-[#D9E2DB]">
                                Consultez les niveaux, les matières et les
                                horaires, puis choisissez le parcours adapté à
                                votre situation.
                            </p>
                        </div>

                        <a
                            href="/register"
                            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-[#DBEAFE] px-7 py-3 text-sm font-semibold text-[#1E3A8A] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E3A8A]"
                        >
                            Commencer mon inscription
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Courses