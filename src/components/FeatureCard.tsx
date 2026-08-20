import type { Feature } from '../constants/features'

interface FeatureCardProps {
    feature: Feature
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
    return (
        <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-900/5">
            {/* Icon */}
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-50 to-violet-50 text-2xl transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-slate-900">
                {feature.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.description}
            </p>
        </article>
    )
}

export default FeatureCard