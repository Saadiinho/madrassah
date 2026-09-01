import type { HowItWorksStep } from '../constants/howItWorks.ts'

interface HowItWorksStepProps {
    step: HowItWorksStep
}

export const HowItWorksStep = ({ step }: HowItWorksStepProps) => {
    return (
        <article className="relative text-center">

            {/* Number */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-violet-600 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
                {step.number}
            </div>

            {/* Content */}
            <h3 className="mt-6 text-xl font-bold text-slate-900">
                {step.title}
            </h3>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-600">
                {step.description}
            </p>
        </article>
    )
}

