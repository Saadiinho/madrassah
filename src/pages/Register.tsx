import Navbar from '../components/Navbar'
import RegistrationForm from '../components/RegistrationForm'
import Footer from "../components/Footer.tsx";

const Register = () => {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-slate-50">
                {/* Header */}
                <section className="relative overflow-hidden border-b border-slate-200 bg-white">
                    {/* Background decoration */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

                        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
                    </div>

                    <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
                        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                            Inscription
                        </span>

                        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Rejoignez Online
                            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                                Course
                            </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                            Remplissez le formulaire ci-dessous afin de
                            commencer votre parcours d'apprentissage.
                        </p>
                    </div>
                </section>

                {/* Registration form */}
                <section className="px-4 py-12 sm:px-6 sm:py-16">
                    <div className="mx-auto max-w-4xl">
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                            <RegistrationForm />
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Register