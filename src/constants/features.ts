import {
    Video,
    MessageCircle,
    Users,
    BookOpen,
    GraduationCap,
    Globe,
} from 'lucide-react'

import type { LucideIcon } from 'lucide-react'

export interface Feature {
    icon: LucideIcon
    title: string
    description: string
    color: 'purple' | 'blue' | 'orange' | 'green' | 'pink' | 'indigo'
}

export const FEATURES: Feature[] = [
    {
        icon: Video,
        title: 'Des cours en visioconférence',
        description:
            'Participez à de véritables cours en ligne, en direct avec un enseignant. Apprenez et progressez dans un cadre interactif.',
        color: 'purple',
    },
    {
        icon: MessageCircle,
        title: 'Des échanges en direct',
        description:
            'Posez vos questions, échangez avec votre enseignant et bénéficiez de réponses pendant vos séances.',
        color: 'blue',
    },
    {
        icon: Users,
        title: 'Un apprentissage adapté à chaque âge',
        description:
            'Des formations pensées pour accompagner les enfants, les adolescents et les adultes selon leurs besoins.',
        color: 'orange',
    },
    {
        icon: BookOpen,
        title: 'L’apprentissage du Coran',
        description:
            'Découvrez et approfondissez vos connaissances du Coran grâce à un enseignement structuré et progressif.',
        color: 'green',
    },
    {
        icon: GraduationCap,
        title: 'La jurisprudence islamique',
        description:
            'Initiez-vous aux bases du Fiqh et développez vos connaissances en jurisprudence islamique.',
        color: 'pink',
    },
    {
        icon: Globe,
        title: 'Accessible partout',
        description:
            'Suivez vos cours en ligne depuis votre domicile, où que vous soyez dans un pays francophone.',
        color: 'indigo',
    },
]