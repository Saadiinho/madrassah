const HeroVisual = () => {
    return (
        <div className="relative mx-auto w-full max-w-2xl">

            {/* Décoration */}
            <div className="absolute -inset-6 rounded-[2rem] bg-linear-to-r from-blue-500/20 to-violet-500/20 blur-3xl" />

            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
                <img
                    src="/images/hero-visual.jpg"
                    alt="Apprentissage du Coran en ligne"
                    className="h-full w-full object-cover"
                />
            </div>

        </div>
    )
}

export default HeroVisual