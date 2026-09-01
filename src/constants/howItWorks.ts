export interface HowItWorksStep {
    number: string
    title: string
    description: string
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
    {
        number: '01',
        title: 'Choisissez votre niveau',
        description:
            'Choisissez le programme qui correspond à votre âge : enfants, adolescents ou adultes.',
    },
    {
        number: '02',
        title: 'Inscrivez-vous',
        description:
            'Remplissez le formulaire d’inscription avec vos informations et indiquez votre niveau de connaissance du Coran.',
    },
    {
        number: '03',
        title: 'Commencez vos cours',
        description:
            'Suivez deux cours en ligne de 1h30 par semaine et progressez progressivement dans votre apprentissage du Coran et de la jurisprudence.',
    },
]