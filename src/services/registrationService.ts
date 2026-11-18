import { api } from './api'
import type { RegistrationFormData } from '../types/registration'

interface RegistrationResponse {
    message: string
}

interface CreateStudentRequest {
    first_name: string
    last_name: string
    birth_date: string
    phone_number: string
    email: string
    level_wanted: string
    quran_knowledge_level: string

    parent_first_name: string | null,
    parent_last_name: string | null,
    parent_phone_number: string | null,
    parent_email: string | null,

}

export const createRegistration = (
    data: RegistrationFormData
): Promise<RegistrationResponse> => {
    const requestBody: CreateStudentRequest = {
        first_name: data.firstName,
        last_name: data.lastName,
        birth_date: data.birthDate,
        phone_number: data.phone,
        email: data.email,
        level_wanted: data.desiredLevel,
        quran_knowledge_level: data.quranKnowledge,

        parent_last_name:
        data.legalRepresentativeLastName || null,

        parent_first_name:
        data.legalRepresentativeFirstName || null,

        parent_phone_number:
        data.legalRepresentativePhone || null,

        parent_email:
        data.legalRepresentativeEmail || null,
    }

    return api<RegistrationResponse>('/students', {
        method: 'POST',
        body: requestBody,
    })
}