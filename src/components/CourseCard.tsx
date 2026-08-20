import type { Course } from '../types/course'
import Button from './Button'

interface CourseCardProps {
    course: Course
}

const CourseCard = ({ course }: CourseCardProps) => {
    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10">

            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                    src={course.image}
                    alt={`Cours ${course.title}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Level badge */}
                <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
                        {course.level}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900">
                    {course.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                    {course.description}
                </p>

                {/* Metadata */}
                <div className="mt-5 flex items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                        <span>◷</span>
                        {course.duration}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-300" />

                    <span>
                        {course.lessons} leçons
                    </span>
                </div>

                {/* CTA */}
                <div className="mt-6">
                    <Button
                        href={`/courses/${course.id}`}
                        variant="outline"
                        className="w-full"
                    >
                        Voir le cours
                    </Button>
                </div>

            </div>
        </article>
    )
}

export default CourseCard