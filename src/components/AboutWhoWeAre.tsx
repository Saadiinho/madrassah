import { ABOUT_WHO_WE_ARE } from '../constants/aboutWhoWeAre'

const AboutWhoWeAre = () => {
    return (
        <section className="bg-white py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">

                {/* Header */}
                <div className="text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        {ABOUT_WHO_WE_ARE.badge}
                    </span>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {ABOUT_WHO_WE_ARE.title}
                    </h2>
                </div>

                {/* Content */}
                <div className="mx-auto mt-10 max-w-3xl space-y-5">
                    {ABOUT_WHO_WE_ARE.paragraphs.map((paragraph) => (
                        <p
                            key={paragraph}
                            className="text-base leading-7 text-slate-600"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default AboutWhoWeAre