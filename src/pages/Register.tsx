import { useEffect } from 'react'

import Navbar from '../components/Navbar'
import RegistrationForm from '../components/RegistrationForm'
import Footer from '../components/Footer'
import { NAME } from '../constants/info'

const Register = () => {
    useEffect(() => {
        document.title = 'Inscription aux cours de Coran en ligne | Dar Al Coran'

        let description = document.querySelector(
            'meta[name="description"]'
        ) as HTMLMetaElement | null

        if (!description) {
            description = document.createElement('meta')
            description.name = 'description'
            document.head.appendChild(description)
        }

        description.content =
            'Inscrivez-vous aux cours de Coran en ligne de Dar Al Coran. Des cours adaptés aux enfants, adolescents et adultes pour apprendre et progresser à votre rythme.'
    }, [])

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-slate-50">

                {/* Header */}
                <section
                    aria-labelledby="register-title"
                    className="relative overflow-hidden border-b border-slate-200 bg-white"
                >
                    {/* Background decoration */}
                    <div
                        className="pointer-events-none absolute inset-0"
                        aria-hidden="true"
                    >
                        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
                        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
                    </div>

                    <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">

                        <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
                            Inscription aux cours
                        </span>

                        <h1
                            id="register-title"
                            className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
                        >
                            Inscrivez-vous à nos cours de Coran en ligne
                            <span className="mt-2 block text-blue-600">
                                {NAME.first} {NAME.highlight}
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                            Vous souhaitez apprendre le Coran, améliorer votre
                            récitation ou approfondir vos connaissances ?
                            Rejoignez Dar Al Coran et bénéficiez de cours en
                            ligne adaptés à votre âge et à votre niveau.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                Enfants
                            </span>

                            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                Adolescents
                            </span>

                            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                Adultes
                            </span>
                        </div>
                    </div>
                </section>

                {/* Registration form */}
                <section
                    aria-labelledby="registration-form-title"
                    className="px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
                >
                    <div className="mx-auto max-w-4xl">

                        <div className="mb-8 text-center">
                            <h2
                                id="registration-form-title"
                                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
                            >
                                Complétez votre inscription
                            </h2>

                            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                                Renseignez les informations demandées dans
                                le formulaire ci-dessous afin de soumettre
                                votre demande d'inscription.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                            <RegistrationForm />
                        </div>

                        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-slate-500">
                            Une fois votre demande envoyée, notre équipe
                            pourra prendre connaissance de votre inscription
                            et vous recontacter pour la suite.
                        </p>

                    </div>
                </section>

            </main>

            <Footer />
        </>
    )
}

export default Register