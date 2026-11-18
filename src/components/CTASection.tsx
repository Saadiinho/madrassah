import Button from './Button'
import {
    ArrowRight,
    Video,
    Users,
    MessageCircle,
    Sparkles,
} from 'lucide-react'

const CTASection = () => {
    return (
        <section
            aria-labelledby="cta-title"
            className="relative isolate overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-32"
        >

            {/* Background decorations */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >

                {/* Blue glow */}
                <div className="absolute -left-40 -top-40 h-125 w-125 rounded-full bg-blue-600/20 blur-[120px]" />

                {/* Violet glow */}
                <div className="absolute -bottom-60 -right-40 h-150 w-150 rounded-full bg-blue-600/20 blur-[130px]" />

                {/* Center glow */}
                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

            </div>

            {/* Content */}
            <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-blue-200 shadow-lg shadow-blue-500/5 backdrop-blur-sm">

                    <Sparkles
                        size={15}
                        className="text-blue-300"
                    />

                    Votre apprentissage commence ici

                </div>

                {/* Heading */}
                <h2
                    id="cta-title"
                    className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
                >
                    Faites le premier pas vers votre apprentissage du Coran.

                    <span className="mt-3 block bg-linear-to-r from-blue-400 via-blue-400 to-blue-300 bg-clip-text text-transparent">
                        Apprenez, progressez, transmettez.
                    </span>
                </h2>

                {/* Description */}
                <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    Rejoignez Dar Al Coran et apprenez le Coran ainsi
                    que les sciences islamiques avec des enseignants
                    en direct. Des cours en visioconférence,
                    des échanges et un accompagnement adapté
                    à chaque âge et à chaque niveau.
                </p>

                {/* CTA */}
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                    <Button
                        href="/register"
                        className="group flex items-center justify-center gap-2"
                    >
                        Commencer mon inscription

                        <ArrowRight
                            size={17}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />

                    </Button>

                </div>

                {/* Benefits */}
                <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-5 border-t border-white/10 pt-9">

                    <div className="flex items-center gap-2.5 text-sm text-slate-300">

                        <Video
                            size={18}
                            className="text-blue-400"
                        />

                        <span>Cours en direct</span>

                    </div>

                    <div className="flex items-center gap-2.5 text-sm text-slate-300">

                        <MessageCircle
                            size={18}
                            className="text-blue-400"
                        />

                        <span>Questions et échanges</span>

                    </div>

                    <div className="flex items-center gap-2.5 text-sm text-slate-300">

                        <Users
                            size={18}
                            className="text-blue-400"
                        />

                        <span>Enfants, adolescents et adultes</span>

                    </div>

                </div>

            </div>

            {/* Bottom decorative line */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-blue-500/50 to-transparent"
            />

        </section>
    )
}

export default CTASection
