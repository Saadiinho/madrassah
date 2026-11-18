import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { LEGAL_NOTICE } from '../constants/legalNotice'

const LegalNotice = () => {
    return (
        <>
            <Navbar />

            <main className="bg-white">
                <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">

                    {/* Header */}
                    <div className="border-b border-slate-200 pb-8">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            {LEGAL_NOTICE.title}
                        </h1>

                        <p className="mt-3 text-sm text-slate-500">
                            Dernière mise à jour : {LEGAL_NOTICE.lastUpdated}
                        </p>
                    </div>

                    {/* Éditeur */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {LEGAL_NOTICE.editor.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {LEGAL_NOTICE.editor.paragraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-sm leading-7 text-slate-600"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </section>

                    {/* Hébergement */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {LEGAL_NOTICE.hosting.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {LEGAL_NOTICE.hosting.paragraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-sm leading-7 text-slate-600"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </section>

                    {/* Objet */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {LEGAL_NOTICE.purpose.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {LEGAL_NOTICE.purpose.paragraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-sm leading-7 text-slate-600"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </section>

                    {/* Propriété intellectuelle */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {LEGAL_NOTICE.intellectualProperty.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {LEGAL_NOTICE.intellectualProperty.paragraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-sm leading-7 text-slate-600"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </section>

                    {/* Responsabilité */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {LEGAL_NOTICE.responsibility.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {LEGAL_NOTICE.responsibility.paragraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-sm leading-7 text-slate-600"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </section>

                    {/* Données personnelles */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {LEGAL_NOTICE.personalData.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {LEGAL_NOTICE.personalData.paragraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-sm leading-7 text-slate-600"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </section>

                    {/* Cookies */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {LEGAL_NOTICE.cookies.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {LEGAL_NOTICE.cookies.paragraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-sm leading-7 text-slate-600"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {LEGAL_NOTICE.contact.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {LEGAL_NOTICE.contact.paragraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-sm leading-7 text-slate-600"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </>
    )
}

export default LegalNotice