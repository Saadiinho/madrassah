import type { Course } from '../../types/course'
import Button from '../Button'
import {
    Clock,
    CalendarDays,
    Users,
    BookOpen,
    ChevronRight,
} from 'lucide-react'

interface CourseCardProps {
    course: Course
}

const CourseCard = ({ course }: CourseCardProps) => {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/5">

            {/* Image */}
            <div className="relative aspect-16/10 overflow-hidden bg-slate-100">

                <img
                    src={course.image}
                    alt={`Formation ${course.title} chez Dar Al Coran`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Level badge */}
                <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center rounded-full border border-white/70 bg-white/95 px-3 py-1.5 text-xs font-bold text-violet-700 shadow-sm backdrop-blur-sm">
                        {course.level}
                    </span>
                </div>

            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">

                {/* Title and description */}
                <div>

                    <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-violet-700">
                        {course.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                        {course.description}
                    </p>

                </div>

                {/* Course information */}
                <div className="mt-5 grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-slate-50 p-3">

                        <div className="flex items-center gap-2 text-slate-400">
                            <CalendarDays size={15} />
                            <span className="text-xs font-medium">
                                Fréquence
                            </span>
                        </div>

                        <p className="mt-2 text-sm font-bold text-slate-900">
                            {course.lessons} fois / semaine
                        </p>

                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">

                        <div className="flex items-center gap-2 text-slate-400">
                            <Clock size={15} />
                            <span className="text-xs font-medium">
                                Durée
                            </span>
                        </div>

                        <p className="mt-2 text-sm font-bold text-slate-900">
                            {course.duration}
                        </p>

                    </div>

                </div>

                {/* Subjects */}
                <div className="mt-5">

                    <div className="mb-3 flex items-center gap-2">
                        <BookOpen size={15} className="text-violet-600" />

                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Matières enseignées
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2">

                        {course.subjects.map((subject) => (
                            <span
                                key={subject}
                                className="rounded-lg border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700"
                            >
                                {subject}
                            </span>
                        ))}

                    </div>

                </div>

                {/* Groups and schedules */}
                <div className="mt-6 flex-1 border-t border-slate-100 pt-5">

                    <div className="mb-4 flex items-center gap-2">
                        <Users size={16} className="text-violet-600" />

                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Groupes et horaires
                        </h4>
                    </div>

                    <div className="space-y-3">

                        {course.groups.map((group) => (
                            <div
                                key={group.id}
                                className="rounded-xl border border-slate-100 bg-slate-50/80 p-4 transition-colors hover:border-violet-100 hover:bg-violet-50/30"
                            >

                                {/* Group name and availability */}
                                <div className="flex items-center justify-between gap-2">

                                    <p className="text-sm font-bold text-slate-900">
                                        {group.name}
                                    </p>

                                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">

                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                                        {group.availableSeats} places

                                    </span>

                                </div>

                                {/* Schedule */}
                                <div className="mt-3 space-y-2">

                                    {group.schedule.map((schedule) => (
                                        <div
                                            key={schedule}
                                            className="flex items-center gap-2 text-sm text-slate-600"
                                        >
                                            <Clock
                                                size={14}
                                                className="shrink-0 text-violet-500"
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
                <div className="mt-6 border-t border-slate-100 pt-5">

                    <Button
                        href={`/courses/${course.id}`}
                        variant="outline"
                        className="group/button flex w-full items-center justify-center gap-2"
                    >
                        Découvrir le programme

                        <ChevronRight
                            size={16}
                            className="transition-transform duration-200 group-hover/button:translate-x-1"
                        />
                    </Button>

                </div>

            </div>

        </article>
    )
}

export default CourseCard