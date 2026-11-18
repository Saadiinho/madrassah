import type { Feature } from '../../constants/features'

interface FeatureCardProps {
    feature: Feature
}

const colorVariants = {
    purple: {
        background: 'bg-blue-50/70',
        border: 'border-blue-100',
        icon: 'bg-blue-100 text-blue-600',
        hover: 'hover:border-blue-300 hover:shadow-blue-100',
        accent: 'bg-blue-500',
    },

    blue: {
        background: 'bg-blue-50/70',
        border: 'border-blue-100',
        icon: 'bg-blue-100 text-blue-600',
        hover: 'hover:border-blue-300 hover:shadow-blue-100',
        accent: 'bg-blue-500',
    },

    orange: {
        background: 'bg-blue-50/70',
        border: 'border-blue-100',
        icon: 'bg-blue-100 text-blue-600',
        hover: 'hover:border-blue-300 hover:shadow-blue-100',
        accent: 'bg-blue-500',
    },

    green: {
        background: 'bg-blue-50/70',
        border: 'border-blue-100',
        icon: 'bg-blue-100 text-blue-600',
        hover: 'hover:border-blue-300 hover:shadow-blue-100',
        accent: 'bg-blue-500',
    },

    pink: {
        background: 'bg-blue-50/70',
        border: 'border-blue-100',
        icon: 'bg-blue-100 text-blue-600',
        hover: 'hover:border-blue-300 hover:shadow-blue-100',
        accent: 'bg-blue-500',
    },

    indigo: {
        background: 'bg-blue-50/70',
        border: 'border-blue-100',
        icon: 'bg-blue-100 text-blue-600',
        hover: 'hover:border-blue-300 hover:shadow-blue-100',
        accent: 'bg-blue-500',
    },
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
    const Icon = feature.icon
    const colors = colorVariants[feature.color]

    return (
        <article
            className={`
                group relative overflow-hidden rounded-2xl
                border ${colors.border}
                ${colors.background}
                p-6 sm:p-7
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl ${colors.hover}
            `}
        >

            {/* Top accent */}
            <div
                aria-hidden="true"
                className={`absolute left-0 top-0 h-1 w-full ${colors.accent}`}
            />

            {/* Icon */}
            <div
                className={`
                    mb-6 flex h-14 w-14 items-center justify-center
                    rounded-2xl ${colors.icon}
                    transition-transform duration-300
                    group-hover:scale-110
                `}
            >
                <Icon size={26} strokeWidth={1.8} />
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold leading-snug text-slate-900">
                {feature.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
                {feature.description}
            </p>

        </article>
    )
}

export default FeatureCard
