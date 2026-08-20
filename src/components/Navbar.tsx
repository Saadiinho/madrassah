import { useState } from 'react'
import Button from './Button'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((previous) => !previous)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex h-16 items-center justify-between md:h-18">

                    {/* Logo */}
                    <a
                        href="/"
                        onClick={closeMenu}
                        className="flex items-center gap-2"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-violet-600 shadow-md shadow-blue-500/20">
                            <span className="text-lg font-bold text-white">
                                O
                            </span>
                        </div>

                        <span className="text-lg font-bold tracking-tight text-slate-900">
                            Online<span className="text-blue-600">Course</span>
                        </span>
                    </a>

                    {/* Desktop navigation */}
                    <nav className="hidden items-center gap-8 md:flex">
                        <a
                            href="/"
                            className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                        >
                            Accueil
                        </a>

                        <a
                            href="/courses"
                            className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                        >
                            Nos cours
                        </a>

                        <a
                            href="/about"
                            className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                        >
                            À propos
                        </a>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button href="/register">
                            S'inscrire
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-label={
                            isMenuOpen
                                ? 'Fermer le menu'
                                : 'Ouvrir le menu'
                        }
                        aria-expanded={isMenuOpen}
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
                    >
                        <span className="relative block h-5 w-5">

                            {/* Top line */}
                            <span
                                className={`absolute left-0 top-1 block h-0.5 w-5 bg-current transition-all duration-200 ${
                                    isMenuOpen
                                        ? 'translate-y-2 rotate-45'
                                        : ''
                                }`}
                            />

                            {/* Middle line */}
                            <span
                                className={`absolute left-0 top-2.5 block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                                    isMenuOpen
                                        ? 'opacity-0'
                                        : 'opacity-100'
                                }`}
                            />

                            {/* Bottom line */}
                            <span
                                className={`absolute left-0 top-4 block h-0.5 w-5 bg-current transition-all duration-200 ${
                                    isMenuOpen
                                        ? '-translate-y-1.5 -rotate-45'
                                        : ''
                                }`}
                            />

                        </span>
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    className={`overflow-hidden transition-all duration-300 md:hidden ${
                        isMenuOpen
                            ? 'max-h-96 pb-5 opacity-100'
                            : 'max-h-0 opacity-0'
                    }`}
                >
                    <nav className="flex flex-col gap-1 border-t border-slate-200 pt-4">

                        <a
                            href="/"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600"
                        >
                            Accueil
                        </a>

                        <a
                            href="/courses"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600"
                        >
                            Nos cours
                        </a>

                        <a
                            href="/about"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600"
                        >
                            À propos
                        </a>

                        {/* Mobile CTA */}
                        <Button
                            href="/register"
                            onClick={closeMenu}
                            className="mt-3 w-full"
                        >
                            S'inscrire
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar