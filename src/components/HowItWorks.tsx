import { HOW_IT_WORKS_STEPS } from '../constants/howItWorks.ts'
import {HowItWorksStep} from "./HowItWorksStep.tsx";

const HowItWorks = () => {
    return (
        <section className="bg-slate-50 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Comment ça marche ?
                    </span>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Commencez à apprendre en quelques étapes.
                    </h2>

                    <p className="mt-4 text-lg leading-8 text-slate-600">
                        Choisissez votre formation, apprenez à votre rythme
                        et développez de nouvelles compétences.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">

                    {/* Connecting line */}
                    <div className="absolute left-0 right-0 top-8 hidden h-px bg-linear-to-r from-blue-200 via-violet-200 to-blue-200 md:block" />

                    {HOW_IT_WORKS_STEPS.map((step) => (
                        <HowItWorksStep
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