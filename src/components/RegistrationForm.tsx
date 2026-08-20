import { useState } from 'react'
import Button from './Button'
import FormField from './FormField'
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

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }))
    }

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        if (!formData.acceptedTerms) {
            return
        }

        console.log(formData)

        // Plus tard :
        // appel vers le backend
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8"
        >
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
                        label="Nom"
                        placeholder="Votre nom"
                        required
                    />

                    <FormField
                        id="firstName"
                        label="Prénom"
                        placeholder="Votre prénom"
                        required
                    />

                    <FormField
                        id="birthDate"
                        label="Date de naissance"
                        type="date"
                        required
                    />

                    <FormField
                        id="phone"
                        label="Numéro de téléphone"
                        type="tel"
                        placeholder="06 00 00 00 00"
                        required
                    />

                    <FormField
                        id="email"
                        label="Adresse e-mail"
                        type="email"
                        placeholder="vous@example.com"
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

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="desiredLevel"
                            className="text-sm font-medium text-slate-700"
                        >
                            Niveau souhaité
                            <span className="ml-1 text-blue-600">
                                *
                            </span>
                        </label>

                        <select
                            id="desiredLevel"
                            name="desiredLevel"
                            value={formData.desiredLevel}
                            onChange={handleChange}
                            required
                            className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
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

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="quranKnowledge"
                            className="text-sm font-medium text-slate-700"
                        >
                            Connaissance du Quran
                            <span className="ml-1 text-blue-600">
                                *
                            </span>
                        </label>

                        <select
                            id="quranKnowledge"
                            name="quranKnowledge"
                            value={formData.quranKnowledge}
                            onChange={handleChange}
                            required
                            className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
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
                    Ces informations sont nécessaires pour les
                    participants mineurs.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">

                    <FormField
                        id="legalRepresentativeLastName"
                        label="Nom du représentant légal"
                        placeholder="Nom"
                    />

                    <FormField
                        id="legalRepresentativeFirstName"
                        label="Prénom du représentant légal"
                        placeholder="Prénom"
                    />

                    <FormField
                        id="legalRepresentativePhone"
                        label="Téléphone du représentant légal"
                        type="tel"
                        placeholder="06 00 00 00 00"
                    />

                    <FormField
                        id="legalRepresentativeEmail"
                        label="E-mail du représentant légal"
                        type="email"
                        placeholder="parent@example.com"
                    />

                </div>
            </section>

            {/* Terms and conditions */}
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
                        className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 accent-blue-600 focus:ring-2 focus:ring-blue-500/20"
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
                            className="font-medium text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-700"
                        >
                            Conditions Générales d'Utilisation (CGU)
                        </a>
                        {' '}ainsi que le{' '}
                        <a
                            href="/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-700"
                        >
                            traitement de mes données personnelles
                        </a>
                        .
                        <span className="ml-1 text-blue-600">*</span>
                    </label>
                </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
                <Button type="submit">
                    S'inscrire
                </Button>
            </div>
        </form>
    )
}

export default RegistrationForm