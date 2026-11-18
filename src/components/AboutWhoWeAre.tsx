import { BookOpen, Heart, GraduationCap } from 'lucide-react'
import { ABOUT_WHO_WE_ARE } from '../constants/aboutWhoWeAre'

const values = [
    {
        icon: BookOpen,
        title: 'La transmission du Coran',
        description:
            'Partager notre connaissance du Coran et contribuer à sa transmission au plus grand nombre.',
    },
    {
        icon: Heart,
        title: 'La bienveillance',
        description:
            'Accueillir chaque élève avec patience et l’accompagner selon son rythme et son niveau.',
    },
    {
        icon: GraduationCap,
        title: 'Un apprentissage progressif',
        description:
            'Proposer un parcours structuré pour permettre à chacun de développer ses connaissances.',
    },
]

const AboutWhoWeAre = () => {
    return (
        <section
            aria-labelledby="who-we-are-title"
            className="bg-white py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Introduction */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        {ABOUT_WHO_WE_ARE.badge}
                    </span>

                    <h2
                        id="who-we-are-title"
                        className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                    >
                        {ABOUT_WHO_WE_ARE.title}
                    </h2>

                    <div className="mt-8 space-y-5 text-left text-base leading-8 text-slate-600 sm:text-lg">
                        {ABOUT_WHO_WE_ARE.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* Our values */}
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {values.map((value) => {
                        const Icon = value.icon

                        return (
                            <article
                                key={value.title}
                                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5 sm:p-8"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <Icon size={24} strokeWidth={1.8} />
                                </div>

                                <h3 className="mt-5 text-lg font-bold text-slate-900">
                                    {value.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {value.description}
                                </p>
                            </article>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default AboutWhoWeAre