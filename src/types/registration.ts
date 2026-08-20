export type QuranKnowledgeLevel =
    | 'Aucune'
    | 'Débutant'
    | 'Intermédiaire'
    | 'Avancé'

export type CourseLevel =
    | 'Enfant'
    | 'Adolescent'
    | 'Adulte'

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