export interface Feature {
    title: string
    description: string
    icon: string
}

export const FEATURES: Feature[] = [
    {
        title: 'Des cours adaptés à chaque âge',
        description:
            'Des programmes pensés pour accompagner les enfants, les adolescents et les adultes selon leur âge et leur niveau.',
        icon: '👨‍👩‍👧',
    },
    {
        title: 'Deux cours par semaine',
        description:
            'Un rythme régulier de deux cours en ligne de 1h30 par semaine pour favoriser un apprentissage progressif.',
        icon: '📚',
    },
    {
        title: 'Apprentissage du Coran',
        description:
            'Apprenez et progressez dans votre connaissance du Coran grâce à un enseignement structuré et progressif.',
        icon: '📖',
    },
]