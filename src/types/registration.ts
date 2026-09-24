export type QuranKnowledgeLevel =
    | 'aucune'
    | 'debutant'
    | 'intermediaire'
    | 'avance'

export type CourseLevel =
    | 'enfant'
    | 'adolescent'
    | 'adulte'

export interface RegistrationFormData {
    lastName: string
    firstName: string
    birthDate: string
    phone: string
    email: string

    desiredLevel: CourseLevel
    quranKnowledge: QuranKnowledgeLevel

    legalRepresentativeLastName: string
    legalRepresentativeFirstName: string
    legalRepresentativePhone: string
    legalRepresentativeEmail: string

    acceptedTerms: boolean
}