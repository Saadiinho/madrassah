import {
    CheckCircle2,
    ArrowRight,
    Sparkles,
} from 'lucide-react'

import Button from './Button'
import HeroBadge from './HeroBadge'
import HeroVisual from './HeroVisual'

import { HERO_CONTENT } from '../constants/hero'


const Hero = () => {
    return (
        <section
            aria-labelledby="hero-title"
            className="relative isolate overflow-hidden bg-white"
        >
            {/* Background decorations */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-400/10 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-indigo-400/5 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">

                {/* Main content */}
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

                    {/* LEFT CONTENT */}
                    <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">

                        {/* Badge */}
                        <div className="flex justify-center lg:justify-start">
                            <HeroBadge>
                                {HERO_CONTENT.badge}
                            </HeroBadge>
                        </div>

                        {/* Heading */}
                        <h1
                            id="hero-title"
                            className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                        >
                            {HERO_CONTENT.title}

                            <span className="mt-2 block bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                                {HERO_CONTENT.titleHighlight}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
                            {HERO_CONTENT.description}
                        </p>

                        {/* CTA */}
                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

                            <Button
                                href={HERO_CONTENT.primaryAction.href}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    {HERO_CONTENT.primaryAction.label}
                                    <ArrowRight size={18} />
                                </span>
                            </Button>

                            <Button
                                href={HERO_CONTENT.secondaryAction.href}
                                variant="outline"
                            >
                                {HERO_CONTENT.secondaryAction.label}
                            </Button>

                        </div>

                        {/* Trust indicators */}
                        <div className="mt-9 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-slate-600 lg:justify-start">

                            <div className="flex items-center gap-2">
                                <CheckCircle2
                                    size={16}
                                    className="shrink-0 text-green-500"
                                />
                                <span>Enfants, adolescents et adultes</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <CheckCircle2
                                    size={16}
                                    className="shrink-0 text-green-500"
                                />
                                <span>Apprentissage en ligne</span>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative mx-auto w-full max-w-xl">

                        {/* Decorative background */}
                        <div
                            aria-hidden="true"
                            className="absolute -inset-5 rounded-4xl bg-linear-to-br from-blue-500/10 via-violet-500/10 to-indigo-500/10 blur-2xl"
                        />

                        {/* Main image */}
                        <div className="relative">
                            <HeroVisual />

                            {/* Floating card */}
                            <div className="absolute -bottom-8 left-3 right-3 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-md sm:-left-8 sm:right-12 sm:p-5">

                                <div className="mb-3 flex items-center gap-2">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-violet-600 text-white">
                                        <Sparkles size={18} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium text-slate-400">
                                            {HERO_CONTENT.visualCard.eyebrow}
                                        </p>

                                        <p className="text-sm font-bold text-slate-900">
                                            {HERO_CONTENT.visualCard.title}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-2 sm:grid-cols-2">

                                    {HERO_CONTENT.visualCard.items.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600"
                                        >
                                            <CheckCircle2
                                                size={14}
                                                className="shrink-0 text-violet-600"
                                            />

                                            {item}
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom highlights */}
                <div className="mt-24 grid gap-4 border-t border-slate-100 pt-8 sm:grid-cols-3 lg:mt-28">

                    {HERO_CONTENT.highlights.map((highlight) => (
                        <div
                            key={highlight.label}
                            className="flex items-center justify-center gap-4 rounded-2xl px-4 py-5 text-center transition-colors hover:bg-slate-50 sm:justify-start sm:text-left"
                        >

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-100 to-violet-100 text-lg font-bold text-violet-700">
                                {highlight.value}
                            </div>

                            <div>
                                <p className="text-2xl font-bold text-slate-900">
                                    {highlight.value}
                                </p>

                                <p className="text-sm text-slate-500">
                                    {highlight.label}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Hero