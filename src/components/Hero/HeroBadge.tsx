import type { ReactNode } from 'react'
import {FaMosque} from "react-icons/fa6";
interface HeroBadgeProps {
    children: ReactNode
}

const HeroBadge = ({ children }: HeroBadgeProps) => {
    return (
        <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-100 bg-linear-to-r from-blue-50 to-violet-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 shadow-sm shadow-blue-100/50 sm:text-sm">

            {/* Status indicator */}
            <span className="relative flex hrink-0">
                                                    <FaMosque className="h-8 w-8 " />

            </span>

            <span>{children}</span>

        </div>
    )
}

export default HeroBadge