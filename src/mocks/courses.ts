import type { Course } from '../types/course'

export const MOCK_COURSES: Course[] = [
    {
        id: 1,
        title: 'Niveau 1 — Enfants',
        description:
            'Un programme adapté aux enfants pour découvrir et apprendre le Coran tout en abordant les bases de la jurisprudence.',

        image: '/images/courses/children.jpg',

        level: 'Enfant',

        duration: '1h30',
        lessons: 2,

        schedule: [
            'Mercredi — 14h00 à 15h30',
            'Samedi — 10h00 à 11h30',
        ],

        subjects: [
            'Apprentissage du Coran',
            'Jurisprudence',
        ],
    },

    {
        id: 2,
        title: 'Niveau 2 — Adolescents',
        description:
            'Un programme destiné aux adolescents pour approfondir leur apprentissage du Coran et développer leurs connaissances en jurisprudence.',

        image: '/images/courses/teenagers.jpg',

        level: 'Adolescent',

        duration: '1h30',
        lessons: 2,

        schedule: [
            'Mercredi — 16h00 à 17h30',
            'Samedi — 14h00 à 15h30',
        ],

        subjects: [
            'Apprentissage du Coran',
            'Jurisprudence',
        ],
    },

    {
        id: 3,
        title: 'Niveau 3 — Adultes',
        description:
            'Un programme destiné aux adultes permettant de progresser dans l’apprentissage du Coran et d’approfondir les bases de la jurisprudence.',

        image: '/images/courses/adults.jpg',

        level: 'Adulte',

        duration: '1h30',
        lessons: 2,

        schedule: [
            'Mardi — 19h00 à 20h30',
            'Samedi — 18h00 à 19h30',
        ],

        subjects: [
            'Apprentissage du Coran',
            'Jurisprudence',
        ],
    },
]