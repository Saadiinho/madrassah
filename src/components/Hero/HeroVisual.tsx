const HeroVisual = () => {
    return (
        <div className="relative w-full">

            {/* Image container */}
            <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-2xl shadow-blue-950/10">

                <img
                    src="/images/hero-visual.jpg"
                    alt="Apprentissage et lecture du Coran"
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle overlay */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/10 via-transparent to-white/5"
                />

            </div>

        </div>
    )
}

export default HeroVisual