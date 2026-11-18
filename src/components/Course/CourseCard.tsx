import type { Course } from '../../types/course'
import Button from '../Button'
import {
    CalendarDays,
    Clock3,
    Users,
    BookOpen,
    ArrowUpRight,
} from 'lucide-react'

interface CourseCardProps {
    course: Course
}

const CourseCard = ({ course }: CourseCardProps) => {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#E3E0D7] bg-[#FBFBFA] transition-all duration-300 hover:-translate-y-1 hover:border-[#93C5FD] focus-within:border-[#2563EB]">
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#EDECE4]">
                <img
                    src={course.image}
                    alt={`Cours de Coran et de jurisprudence pour ${course.level.toLowerCase()}s`}
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="400"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center rounded-md border border-[#E7E0CF] bg-[#F7F1E4] px-3 py-1.5 text-xs font-semibold text-[#1D4ED8]">
                        {course.level}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div>
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-2xl font-medium leading-tight text-[#1C1C1E] transition-colors group-hover:text-[#2563EB]">
                            {course.title}
                        </h3>

                        <span
                            aria-hidden="true"
                            className="mt-1 text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        >
                            <ArrowUpRight size={19} strokeWidth={1.5} />
                        </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[#686B63]">
                        {course.description}
                    </p>
                </div>

                {/* Metadata */}
                <div className="mt-6 grid grid-cols-2 border-y border-[#E9E6DE] py-4">
                    <div className="pr-3">
                        <div className="flex items-center gap-2 text-[#85877F]">
                            <CalendarDays size={15} strokeWidth={1.7} />
                            <span className="text-xs">Fréquence</span>
                        </div>

                        <p className="mt-2 text-sm font-semibold text-[#30332D]">
                            {course.lessons} fois / semaine
                        </p>
                    </div>

                    <div className="border-l border-[#E9E6DE] pl-4">
                        <div className="flex items-center gap-2 text-[#85877F]">
                            <Clock3 size={15} strokeWidth={1.7} />
                            <span className="text-xs">Durée</span>
                        </div>

                        <p className="mt-2 text-sm font-semibold text-[#30332D]">
                            {course.duration} / séance
                        </p>
                    </div>
                </div>

                {/* Subjects */}
                <div className="mt-5">
                    <div className="mb-3 flex items-center gap-2">
                        <BookOpen
                            size={15}
                            className="text-[#2563EB]"
                            strokeWidth={1.7}
                        />

                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777970]">
                            Matières enseignées
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {course.subjects.map((subject) => (
                            <span
                                key={subject}
                                className="rounded-md border border-[#DBEAFE] bg-[#EFF6FF] px-3 py-1.5 text-xs font-medium text-[#1D4ED8]"
                            >
                                {subject}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Groups */}
                <div className="mt-6 flex-1 border-t border-[#E9E6DE] pt-5">
                    <div className="mb-4 flex items-center gap-2">
                        <Users
                            size={16}
                            className="text-[#2563EB]"
                            strokeWidth={1.7}
                        />

                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777970]">
                            Groupes et horaires
                        </h4>
                    </div>

                    <div className="space-y-3">
                        {course.groups.map((group) => (
                            <div
                                key={group.id}
                                className="rounded-md border border-[#E7E4DC] bg-[#F7F6F2] p-4 transition-colors duration-200 hover:border-[#BFDBFE]"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <p className="text-sm font-semibold text-[#30332D]">
                                        {group.name}
                                    </p>

                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DBEAFE] px-2.5 py-1 text-[11px] font-semibold text-[#1D4ED8]">
                                        <span
                                            aria-hidden="true"
                                            className="h-1.5 w-1.5 rounded-full bg-[#3C8053]"
                                        />
                                        {group.availableSeats} places max.
                                    </span>
                                </div>

                                <div className="mt-3 space-y-2">
                                    {group.schedule.map((schedule) => (
                                        <div
                                            key={schedule}
                                            className="flex items-start gap-2 text-xs leading-5 text-[#686B63]"
                                        >
                                            <Clock3
                                                size={14}
                                                className="mt-0.5 shrink-0 text-[#2563EB]"
                                                strokeWidth={1.7}
                                            />

                                            <span>{schedule}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-6 border-t border-[#E9E6DE] pt-5">
                    <Button
                        href={`/courses/${course.id}`}
                        variant="outline"
                        className="flex w-full items-center justify-center gap-2"
                    >
                        Découvrir le programme
                        <ArrowUpRight size={16} strokeWidth={1.7} />
                    </Button>
                </div>
            </div>
        </article>
    )
}

export default CourseCard