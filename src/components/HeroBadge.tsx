interface HeroBadgeProps {
    children: React.ReactNode
}

const HeroBadge = ({ children }: HeroBadgeProps) => {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />

            <span>{children}</span>
        </div>
    )
}

export default HeroBadge