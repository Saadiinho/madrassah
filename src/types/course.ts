export type CourseLevel = 'Enfant' | 'Adolescent' | 'Adulte'

export interface Course {
    id: number
    title: string
    description: string
    image: string
    level: CourseLevel
    duration: string
    lessons: number
}