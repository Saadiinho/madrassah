import { Link } from 'react-router-dom'
import {NAME} from "../constants/info.ts";

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">

                <div className="grid gap-10 md:grid-cols-4">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-violet-600 shadow-md shadow-blue-500/20">
                                <span className="text-lg font-bold text-white">
                                    D
                                </span>
                            </div>

                            <span className="text-lg font-bold tracking-tight text-slate-900">
                            {NAME.first}{' '}
                                <span className="text-blue-600">
                                {NAME.highlight}
                            </span>
                        </span>
                        </Link>

                        <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
                            Une plateforme simple et accessible pour apprendre,
                            progresser et développer de nouvelles compétences
                            à votre rythme.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                            Navigation
                        </h3>

                        <nav className="mt-4 flex flex-col gap-3">
                            <Link
                                to="/"
                                className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                            >
                                Accueil
                            </Link>

                            <Link
                                to="/courses"
                                className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                            >
                                Nos cours
                            </Link>

                            <Link
                                to="/about"
                                className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                            >
                                À propos
                            </Link>

                            <Link
                                to="/register"
                                className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                            >
                                S'inscrire
                            </Link>
                        </nav>
                    </div>

                    {/* Informations */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                            Informations
                        </h3>

                        <nav className="mt-4 flex flex-col gap-3">
                            <Link
                                to="/contact"
                                className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                            >
                                Contact
                            </Link>

                            <Link
                                to="/privacy"
                                className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                            >
                                Politique de confidentialité
                            </Link>

                            <Link
                                to="/legal"
                                className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                            >
                                Mentions légales
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} {NAME.first}{' '}{NAME.highlight}. Tous droits réservés.
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-500">
                            Apprenez. Progressez. Réussissez.
                        </span>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer