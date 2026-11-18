import {
    BookOpen,
    ClipboardList,
    Video,
} from 'lucide-react'

import type { LucideIcon } from 'lucide-react'

export interface HowItWorksStep {
    number: string
    title: string
    description: string
    icon: LucideIcon
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
    {
        number: '01',
        title: 'Choisissez votre formation',
        description:
            'Sélectionnez le programme adapté à votre âge et à vos objectifs : enfants, adolescents ou adultes.',
        icon: BookOpen,
    },
    {
        number: '02',
        title: 'Inscrivez-vous',
        description:
            'Complétez le formulaire d’inscription avec vos informations et précisez votre niveau de connaissance du Coran.',
        icon: ClipboardList,
    },
    {
        number: '03',
        title: 'Participez à vos cours',
        description:
            'Retrouvez votre enseignant en visioconférence pour deux séances de 1h30 par semaine, avec des échanges et des questions-réponses en direct.',
        icon: Video,
    },
]