import {HOW_IT_WORKS_STEPS} from '../constants/howItWorks'
import {HowItWorksStepCard} from './HowItWorks/HowItWorksStep'
import {Sparkles} from 'lucide-react'

const HowItWorks = () => {
    return (
        <section
            aria-labelledby="how-it-works-title"
            className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
        >

            {/* Background decorations */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-violet-200/20 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">

                    <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-700">

                        <Sparkles size={14} />

                        Comment ça marche ?

                    </span>

                    <h2
                        id="how-it-works-title"
                        className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
                    >
                        Apprenez le Coran en ligne{' '}
                        <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                            en quelques étapes.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                        Rejoindre Dar Al Coran est simple.
                        Choisissez votre formation, inscrivez-vous
                        et commencez à apprendre avec un enseignant
                        en direct.
                    </p>

                </div>

                {/* Steps */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">

                    {HOW_IT_WORKS_STEPS.map((step) => (
                        <HowItWorksStepCard
                            key={step.number}
                            step={step}
                        />
                    ))}

                </div>

            </div>

        </section>
    )
}

export default HowItWorks