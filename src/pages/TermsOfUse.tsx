import { TERMS_OF_USE } from '../constants/termsOfUse'
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const TermsOfUse = () => {
    const sections = [
        TERMS_OF_USE.identity,
        TERMS_OF_USE.purpose,
        TERMS_OF_USE.access,
        TERMS_OF_USE.courses,
        TERMS_OF_USE.registration,
        TERMS_OF_USE.minors,
        TERMS_OF_USE.organization,
        TERMS_OF_USE.payment,
        TERMS_OF_USE.cancellation,
        TERMS_OF_USE.conduct,
        TERMS_OF_USE.intellectualProperty,
        TERMS_OF_USE.userContent,
        TERMS_OF_USE.responsibility,
        TERMS_OF_USE.externalLinks,
        TERMS_OF_USE.personalData,
        TERMS_OF_USE.confidentiality,
        TERMS_OF_USE.modification,
        TERMS_OF_USE.applicableLaw,
        TERMS_OF_USE.contact,
    ]

    return (
        <>
        <Navbar />
        <main className="bg-white">
            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">

                {/* Header */}
                <header className="mb-12 border-b border-slate-200 pb-8">
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Dar Al Coran
                    </span>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {TERMS_OF_USE.title}
                    </h1>

                    <p className="mt-4 text-sm text-slate-500">
                        Dernière mise à jour : {TERMS_OF_USE.lastUpdated}
                    </p>
                </header>

                {/* Introduction */}
                <div className="mb-12 space-y-4">
                    {TERMS_OF_USE.introduction.map((paragraph) => (
                        <p
                            key={paragraph}
                            className="text-base leading-7 text-slate-600"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="text-xl font-semibold text-slate-900">
                                {section.title}
                            </h2>

                            <div className="mt-4 space-y-4">
                                {section.paragraphs.map((paragraph) => (
                                    <p
                                        key={paragraph}
                                        className="text-base leading-7 text-slate-600"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default TermsOfUse