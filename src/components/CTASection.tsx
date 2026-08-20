import Button from './Button'

const CTASection = () => {
    return (
        <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

                <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">

                {/* Badge */}
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-blue-300">
                    Prêt à commencer ?
                </span>

                {/* Heading */}
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Commencez votre parcours
                    <span className="block bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                        dès aujourd'hui.
                    </span>
                </h2>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                    Rejoignez-nous et développez vos compétences grâce à
                    des cours accessibles, structurés et adaptés à votre rythme.
                </p>

                {/* CTA */}
                <div className="mt-8 flex justify-center">
                    <Button href="/register">
                        S'inscrire maintenant
                    </Button>
                </div>

            </div>
        </section>
    )
}

export default CTASection