import Button from './Button'
import HeroBadge from './HeroBadge'
import HeroVisual from './HeroVisual'
import { HERO_CONTENT } from '../constants/hero'

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background decoration */}
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
                <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

                    {/* Content */}
                    <div className="max-w-2xl">

                        <HeroBadge>
                            {HERO_CONTENT.badge}
                        </HeroBadge>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            {HERO_CONTENT.title}

                            <span className="block bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                                {HERO_CONTENT.titleHighlight}
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                            {HERO_CONTENT.description}
                        </p>

                        {/* CTA */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Button href={HERO_CONTENT.primaryAction.href}>
                                {HERO_CONTENT.primaryAction.label}
                            </Button>

                            <Button
                                href={HERO_CONTENT.secondaryAction.href}
                                variant="outline"
                            >
                                {HERO_CONTENT.secondaryAction.label}
                            </Button>
                        </div>

                        {/* Benefits */}
                        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
                            {HERO_CONTENT.benefits.map((benefit) => (
                                <div
                                    key={benefit}
                                    className="flex items-center gap-2"
                                >
                                    <span className="text-green-500">
                                        ✓
                                    </span>

                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual */}
                    <HeroVisual />

                </div>
            </div>
        </section>
    )
}

export default Hero