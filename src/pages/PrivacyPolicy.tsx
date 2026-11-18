import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { PRIVACY_POLICY } from '../constants/privacyPolicy'

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />

            <main className="bg-white">
                <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">

                    {/* Header */}
                    <div className="border-b border-slate-200 pb-8">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            {PRIVACY_POLICY.title}
                        </h1>

                        <p className="mt-3 text-sm text-slate-500">
                            Dernière mise à jour : {PRIVACY_POLICY.lastUpdated}
                        </p>
                    </div>

                    {/* Introduction */}
                    <section className="mt-10">
                        <div className="space-y-3">
                            {PRIVACY_POLICY.introduction.map(
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

                    {/* Responsable du traitement */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {PRIVACY_POLICY.controller.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.controller.paragraphs.map(
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

                    {/* Données collectées */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {PRIVACY_POLICY.dataCollected.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.dataCollected.paragraphs.map(
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

                    {/* Finalités */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {PRIVACY_POLICY.purposes.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.purposes.paragraphs.map(
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

                    {/* Base légale */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {PRIVACY_POLICY.legalBasis.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.legalBasis.paragraphs.map(
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

                    {/* Données obligatoires */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {PRIVACY_POLICY.requiredData.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.requiredData.paragraphs.map(
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

                    {/* Destinataires */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {PRIVACY_POLICY.recipients.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.recipients.paragraphs.map(
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

                    {/* Transferts */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {PRIVACY_POLICY.transfers.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.transfers.paragraphs.map(
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

                    {/* Conservation */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {PRIVACY_POLICY.retention.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.retention.paragraphs.map(
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

                    {/* Sécurité */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {PRIVACY_POLICY.security.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.security.paragraphs.map(
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

                    {/* Mineurs */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {PRIVACY_POLICY.minors.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.minors.paragraphs.map(
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

                    {/* Droits */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {PRIVACY_POLICY.rights.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.rights.paragraphs.map(
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

                    {/* CNIL */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {PRIVACY_POLICY.complaint.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.complaint.paragraphs.map(
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
                            {PRIVACY_POLICY.cookies.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.cookies.paragraphs.map(
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

                    {/* Modifications */}
                    <section className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-900">
                            {PRIVACY_POLICY.changes.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.changes.paragraphs.map(
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
                            {PRIVACY_POLICY.contact.title}
                        </h2>

                        <div className="mt-4 space-y-3">
                            {PRIVACY_POLICY.contact.paragraphs.map(
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

export default PrivacyPolicy