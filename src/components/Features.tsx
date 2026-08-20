import FeatureCard from './FeatureCard'
import { FEATURES } from '../constants/features'

const Features = () => {
    return (
        <section className="bg-slate-50 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Pourquoi nous choisir ?
                    </span>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Tout ce dont vous avez besoin pour apprendre efficacement.
                    </h2>

                    <p className="mt-4 text-lg leading-8 text-slate-600">
                        Une expérience d'apprentissage simple, flexible et
                        pensée pour vous aider à atteindre vos objectifs.
                    </p>
                </div>

                {/* Features */}
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {FEATURES.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            feature={feature}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Features