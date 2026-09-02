import { useState } from 'react'
import Button from './Button'
import FormField from './FormField'

import { createRegistration } from '../services/registrationService'

import type { RegistrationFormData } from '../types/registration'

const RegistrationForm = () => {
    const [formData, setFormData] = useState<RegistrationFormData>({
        lastName: '',
        firstName: '',
        birthDate: '',
        phone: '',
        email: '',

        desiredLevel: 'Adulte',
        quranKnowledge: 'Aucune',

        legalRepresentativeLastName: '',
        legalRepresentativeFirstName: '',
        legalRepresentativePhone: '',
        legalRepresentativeEmail: '',

        acceptedTerms: false,
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [successMessage, setSuccessMessage] = useState('')

    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = event.target

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }))
    }

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()
        console.log(formData)
        setErrorMessage('')
        setSuccessMessage('')

        if (!formData.acceptedTerms) {
            setErrorMessage(
                'Vous devez accepter les Conditions Générales d’Utilisation.'
            )

            return
        }

        try {
            setIsSubmitting(true)

            const response = await createRegistration(formData)

            setSuccessMessage(
                response.message ||
                'Votre inscription a été envoyée avec succès.'
            )

            console.log('Inscription réussie :', response)

        } catch (error) {
            console.error(
                'Erreur lors de l’inscription :',
                error
            )

            setErrorMessage(
                'Une erreur est survenue lors de l’envoi de votre inscription. Veuillez réessayer.'
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8"
        >
            {/* Message de succès */}
            {successMessage && (
                <div
                    className="
                        rounded-xl
                        border border-green-200
                        bg-green-50
                        p-4
                        text-sm text-green-700
                    "
                >
                    {successMessage}
                </div>
            )}

            {/* Message d'erreur */}
            {errorMessage && (
                <div
                    className="
                        rounded-xl
                        border border-red-200
                        bg-red-50
                        p-4
                        text-sm text-red-700
                    "
                >
                    {errorMessage}
                </div>
            )}

            {/* Informations personnelles */}
            <section>
                <h2 className="text-xl font-semibold text-slate-900">
                    Informations personnelles
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Renseignez vos informations personnelles.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">

                    <FormField
                        id="lastName"
                        name="lastName"
                        label="Nom"
                        placeholder="Votre nom"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />

                    <FormField
                        id="firstName"
                        name="firstName"
                        label="Prénom"
                        placeholder="Votre prénom"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />

                    <FormField
                        id="birthDate"
                        name="birthDate"
                        label="Date de naissance"
                        type="date"
                        value={formData.birthDate}
                        onChange={handleChange}
                        required
                    />

                    <FormField
                        id="phone"
                        name="phone"
                        label="Numéro de téléphone"
                        type="tel"
                        placeholder="06 00 00 00 00"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <FormField
                        id="email"
                        name="email"
                        label="Adresse e-mail"
                        type="email"
                        placeholder="vous@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                </div>
            </section>

            {/* Formation */}
            <section>
                <h2 className="text-xl font-semibold text-slate-900">
                    Formation
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Indiquez le niveau de formation souhaité.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">

                    {/* Niveau souhaité */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="desiredLevel"
                            className="text-sm font-medium text-slate-700"
                        >
                            Niveau souhaité

                            <span className="ml-1 text-[var(--color-primary)]">
                                *
                            </span>
                        </label>

                        <select
                            id="desiredLevel"
                            name="desiredLevel"
                            value={formData.desiredLevel}
                            onChange={handleChange}
                            required
                            className="
                                h-11 rounded-xl
                                border border-slate-200
                                bg-white px-4
                                text-sm text-slate-900
                                outline-none
                                transition-all
                                focus:border-[var(--color-primary)]
                                focus:ring-4
                                focus:ring-[var(--color-primary)]/10
                            "
                        >
                            <option value="Enfant">
                                Enfant
                            </option>

                            <option value="Adolescent">
                                Adolescent
                            </option>

                            <option value="Adulte">
                                Adulte
                            </option>
                        </select>
                    </div>

                    {/* Connaissance du Coran */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="quranKnowledge"
                            className="text-sm font-medium text-slate-700"
                        >
                            Connaissance du Coran

                            <span className="ml-1 text-[var(--color-primary)]">
                                *
                            </span>
                        </label>

                        <select
                            id="quranKnowledge"
                            name="quranKnowledge"
                            value={formData.quranKnowledge}
                            onChange={handleChange}
                            required
                            className="
                                h-11 rounded-xl
                                border border-slate-200
                                bg-white px-4
                                text-sm text-slate-900
                                outline-none
                                transition-all
                                focus:border-[var(--color-primary)]
                                focus:ring-4
                                focus:ring-[var(--color-primary)]/10
                            "
                        >
                            <option value="Aucune">
                                Aucune
                            </option>

                            <option value="Débutant">
                                Débutant
                            </option>

                            <option value="Intermédiaire">
                                Intermédiaire
                            </option>

                            <option value="Avancé">
                                Avancé
                            </option>
                        </select>
                    </div>

                </div>
            </section>

            {/* Représentant légal */}
            <section>
                <h2 className="text-xl font-semibold text-slate-900">
                    Représentant légal
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Ces informations sont nécessaires pour les participants mineurs.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">

                    <FormField
                        id="legalRepresentativeLastName"
                        name="legalRepresentativeLastName"
                        label="Nom du représentant légal"
                        placeholder="Nom"
                        value={formData.legalRepresentativeLastName}
                        onChange={handleChange}
                    />

                    <FormField
                        id="legalRepresentativeFirstName"
                        name="legalRepresentativeFirstName"
                        label="Prénom du représentant légal"
                        placeholder="Prénom"
                        value={formData.legalRepresentativeFirstName}
                        onChange={handleChange}
                    />

                    <FormField
                        id="legalRepresentativePhone"
                        name="legalRepresentativePhone"
                        label="Téléphone du représentant légal"
                        type="tel"
                        placeholder="06 00 00 00 00"
                        value={formData.legalRepresentativePhone}
                        onChange={handleChange}
                    />

                    <FormField
                        id="legalRepresentativeEmail"
                        name="legalRepresentativeEmail"
                        label="E-mail du représentant légal"
                        type="email"
                        placeholder="parent@example.com"
                        value={formData.legalRepresentativeEmail}
                        onChange={handleChange}
                    />

                </div>
            </section>

            {/* Conditions */}
            <div className="border-t border-slate-200 pt-6">
                <div className="flex items-start gap-3">

                    <input
                        id="acceptedTerms"
                        name="acceptedTerms"
                        type="checkbox"
                        checked={formData.acceptedTerms}
                        onChange={(event) =>
                            setFormData((previous) => ({
                                ...previous,
                                acceptedTerms: event.target.checked,
                            }))
                        }
                        required
                        className="
                            mt-1 h-4 w-4 shrink-0
                            rounded border-slate-300
                            accent-[var(--color-primary)]
                        "
                    />

                    <label
                        htmlFor="acceptedTerms"
                        className="text-sm leading-6 text-slate-600"
                    >
                        J'ai pris connaissance et j'accepte les{' '}

                        <a
                            href="/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                font-medium
                                text-[var(--color-primary)]
                                underline
                                underline-offset-2
                            "
                        >
                            Conditions Générales d'Utilisation (CGU)
                        </a>

                        {' '}ainsi que le{' '}

                        <a
                            href="/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                font-medium
                                text-[var(--color-primary)]
                                underline
                                underline-offset-2
                            "
                        >
                            traitement de mes données personnelles
                        </a>.

                        <span className="ml-1 text-[var(--color-primary)]">
                            *
                        </span>
                    </label>

                </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
                <Button
                    type="submit"
                    className={isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}
                >
                    {isSubmitting
                        ? 'Envoi en cours...'
                        : "S'inscrire"
                    }
                </Button>
            </div>

        </form>
    )
}

export default RegistrationForm