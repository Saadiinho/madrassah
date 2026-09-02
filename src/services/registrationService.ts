import { api } from './api'
import type { RegistrationFormData } from '../types/registration'

interface RegistrationResponse {
    message: string
}

export const createRegistration = (
    data: RegistrationFormData
): Promise<RegistrationResponse> => {
    return api<RegistrationResponse>('/registrations', {
        method: 'POST',
        body: data,
    })
}