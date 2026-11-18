import {Link} from 'react-router-dom'
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
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-blue-600 shadow-md shadow-blue-500/20">
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
                            Dar Al Coran est un institut proposant des cours de Coran et de jurisprudence islamique en ligne. Nos formations en visioconférence s'adressent aux enfants, aux adolescents et aux adultes, avec des enseignants en direct et un accompagnement adapté à chaque niveau.
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
                                Nos formations
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
                                to="/terms"
                                className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                            >
                                Conditions générales d'utilisation
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
                        © {new Date().getFullYear()} {NAME.first}{' '}{NAME.highlight}. Tous droits réservés
                    </p>

                    <a
                        href="https://saadrafiqul.alwaysdata.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-blue-600"
                    >
                        Site conçu et développé par{' '}
                        <span className="font-semibold text-blue-600">
                            Saad Rafiqul
                        </span>
                    </a>

                </div>

            </div>
        </footer>
    )
}

export default Footer