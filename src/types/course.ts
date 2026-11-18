export type CourseLevel = 'Enfant' | 'Adolescent' | 'Adulte'

export interface CourseGroup {
    id: number
    name: string
    schedule: string[]
    availableSeats: number
}

export interface Course {
    id: number
    title: string
    description: string
    image: string

    level: CourseLevel

    duration: string
    lessons: number

    subjects: string[]
    groups: CourseGroup[]
}