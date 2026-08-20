const HeroVisual = () => {
    return (
        <div className="relative mx-auto w-full max-w-xl">
            {/* Background decoration */}
            <div className="absolute -inset-6 rounded-[2rem] bg-linear-to-r from-blue-500/20 to-violet-500/20 blur-3xl" />

            {/* Main card */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10">

                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <div className="mb-2 h-3 w-24 rounded-full bg-slate-200" />
                        <div className="h-2 w-16 rounded-full bg-slate-100" />
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-violet-600">
                        <span className="font-bold text-white">
                            O
                        </span>
                    </div>
                </div>

                {/* Progress */}
                <div className="mb-6 rounded-2xl bg-slate-50 p-5">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-900">
                            Votre progression
                        </span>

                        <span className="text-sm font-bold text-blue-600">
                            72%
                        </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full w-[72%] rounded-full bg-linear-to-r from-blue-600 to-violet-600" />
                    </div>
                </div>

                {/* Course cards */}
                <div className="space-y-3">

                    <div className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                            <span className="font-bold text-blue-600">
                                JS
                            </span>
                        </div>

                        <div className="min-w-0 flex-1">
                            <div className="mb-2 h-3 w-32 rounded-full bg-slate-200" />
                            <div className="h-2 w-20 rounded-full bg-slate-100" />
                        </div>

                        <span className="text-sm font-semibold text-green-600">
                            ✓
                        </span>
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                            <span className="font-bold text-violet-600">
                                TS
                            </span>
                        </div>

                        <div className="min-w-0 flex-1">
                            <div className="mb-2 h-3 w-36 rounded-full bg-slate-200" />
                            <div className="h-2 w-24 rounded-full bg-slate-100" />
                        </div>

                        <span className="text-sm font-semibold text-blue-600">
                            65%
                        </span>
                    </div>

                </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <span className="text-green-600">
                            ✓
                        </span>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Cours terminé
                        </p>

                        <p className="text-sm font-semibold text-slate-900">
                            JavaScript
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroVisual