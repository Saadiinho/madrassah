import type { HowItWorksStep } from '../../constants/howItWorks'

interface HowItWorksStepProps {
    step: HowItWorksStep
}

export const HowItWorksStepCard = ({
                                       step,
                                   }: HowItWorksStepProps) => {
    const Icon = step.icon

    return (
        <article className="group relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/5 sm:p-8">

            {/* Top content */}
            <div className="flex items-center justify-between">

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-50 to-violet-100 text-violet-600 transition-all duration-300 group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white">

                    <Icon
                        size={26}
                        strokeWidth={1.8}
                        aria-hidden="true"
                    />

                </div>

                {/* Step number */}
                <span className="text-4xl font-extrabold tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-violet-100">
                    {step.number}
                </span>

            </div>

            {/* Content */}
            <div className="mt-7">

                <h3 className="text-xl font-bold leading-snug text-slate-900">
                    {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                </p>

            </div>

            {/* Bottom accent */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-6 right-6 h-1 origin-left scale-x-0 rounded-full bg-linear-to-r from-blue-600 to-violet-600 transition-transform duration-300 group-hover:scale-x-100"
            />

        </article>
    )
}