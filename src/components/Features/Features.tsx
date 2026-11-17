import FeatureCard from './FeatureCard'
import {FEATURES} from "../../constants/features.ts";

const Features = () => {
    return (
        <section
            aria-labelledby="features-title"
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

                    <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                        Pourquoi choisir Dar Al Coran ?
                    </span>

                    <h2
                        id="features-title"
                        className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
                    >
                        Un apprentissage du Coran et du Fiqh{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                            pensé pour vous.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                        Découvrez une expérience d'apprentissage en ligne
                        interactive, avec des cours en direct et un
                        accompagnement adapté à chaque âge.
                    </p>

                </div>

                {/* Features grid */}
                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">

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