interface ButtonProps {
    children: React.ReactNode
    href?: string
    onClick?: () => void
    className?: string
    variant?: 'primary' | 'outline'
    type?: 'button' | 'submit' | 'reset'
}

const Button = ({
                    children,
                    href,
                    onClick,
                    className = '',
                    variant = 'primary',
                    type = 'button',
                }: ButtonProps) => {

    const baseStyles =
        'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200'

    const variants = {
        primary:
            'bg-linear-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30',

        outline:
            'border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600',
    }

    const styles = `${baseStyles} ${variants[variant]} ${className}`

    if (href) {
        return (
            <a
                href={href}
                onClick={onClick}
                className={styles}
            >
                {children}
            </a>
        )
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={styles}
        >
            {children}
        </button>
    )
}

export default Button