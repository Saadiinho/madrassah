import type { Course } from '../types/course'
import Button from './Button'

interface CourseCardProps {
    course: Course
}

const CourseCard = ({ course }: CourseCardProps) => {
    return (
        <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Image */}
            <div className="aspect-16/10 overflow-hidden bg-slate-100">
                <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-6">

                {/* Level */}
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    {course.level}
                </span>

                <h2 className="mt-4 text-xl font-bold text-slate-900">
                    {course.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                    {course.description}
                </p>

                {/* Information */}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-5">

                    <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">
                            Cours
                        </span>

                        <span className="font-medium text-slate-900">
                            {course.lessons} fois / semaine
                        </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">
                            Durée
                        </span>

                        <span className="font-medium text-slate-900">
                            {course.duration}
                        </span>
                    </div>

                </div>

                {/* Subjects */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {course.subjects.map((subject) => (
                        <span
                            key={subject}
                            className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                        >
                            {subject}
                        </span>
                    ))}
                </div>

                {/* Schedule */}
                <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Horaires
                    </p>

                    <div className="mt-2 space-y-1">
                        {course.schedule.map((schedule) => (
                            <p
                                key={schedule}
                                className="text-sm text-slate-600"
                            >
                                {schedule}
                            </p>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                    <Button
                        href={`/courses/${course.id}`}
                        variant="outline"
                        className="w-full"
                    >
                        Voir le programme
                    </Button>
                </div>

            </div>
        </article>
    )
}

export default CourseCard