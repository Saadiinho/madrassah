import { useState } from 'react'
import { Play, Sparkles } from 'lucide-react'

// Remplacer par l’URL d’intégration de la vidéo lorsqu’elle sera disponible.
const VIDEO_EMBED_URL = 'https://pub-71a7ef4eaa5b46b0b822179329a3cf1c.r2.dev/video_recitation/recitaion_1.mp4'

const StudentRecitation = () => {
    const [playing, setPlaying] = useState(false)

    return (
        <section
            aria-labelledby="student-recitation-title"
            className="relative overflow-hidden bg-blue-50/60 py-20 sm:py-24 lg:py-28"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
            />

            <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                        <Sparkles size={14} />
                        La voix de nos élèves
                    </span>

                    <h2
                        id="student-recitation-title"
                        className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
                    >
                        Écoutez une récitation de nos élèves
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                        Chaque progrès se construit avec de la pratique et un accompagnement adapté.
                        Découvrez la récitation d’un élève de Dar Al Coran.
                    </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-blue-100 bg-slate-950 shadow-xl shadow-blue-900/10">
                    <div className="relative aspect-video">
                        {VIDEO_EMBED_URL ? (
                            <>
                                {!playing && (
                                    <button
                                        type="button"
                                        onClick={() => setPlaying(true)}
                                        aria-label="Lire la récitation de l’élève"
                                        className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/30 transition hover:bg-slate-950/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-blue-400"
                                    >
                                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-105">
                                            <Play size={26} fill="currentColor" className="ml-1" />
                                        </span>
                                    </button>
                                )}
                                <iframe
                                    src={playing ? VIDEO_EMBED_URL : undefined}
                                    title="Récitation du Coran par un élève de Dar Al Coran"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="h-full w-full"
                                />
                            </>
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-slate-900 via-blue-950 to-blue-900 px-6 text-center text-white">
                                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-blue-200">
                                    <Play size={26} />
                                </span>
                                <p className="mt-5 font-display text-xl sm:text-2xl">
                                    Récitation bientôt disponible
                                </p>
                                <p className="mt-2 text-sm text-blue-100/80">
                                    La vidéo d’un de nos élèves sera publiée ici.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StudentRecitation
