interface IProject {
    name: string;
    tasks: string[];
}
export interface IWorkExperience {
    name: string;
    url: string;
    jobPosition: string;
    period: string;
    project: IProject[];
}

export const WORK_INFO: IWorkExperience[] = [
    {
        name: 'TIENDEO.COM',
        url: 'https://www.tiendeo.com/',
        jobPosition: 'Frontend Developer',
        period: 'Junio 2019 — Presente',
        project: [
            {
                name: 'HyperLocal WebApp',
                tasks: [
                    'Creación de un SaaS con la finalidad de publicar campañas de publicidad en "Google Ads" y "Facebook Ads"',
                    'Creación del proyecto en TypeScript con "Create-React-App"',
                    'Definición de las reglas de Linter con TSLint y Prettier',
                    'CI/CD con Gitlab CI y Jenkins',
                    'Integración con "Google Maps"',
                    'Diseño de componentes y funcionalidades con "Material-Ui"',
                    'Parte de un equipo Agile con Scrum/KANBAN siguiendo un tablero de Jira',
                ],
            },
            {
                name: 'Cashback y Deals WebApp',
                tasks: [
                    ' Convertir la WebApp en una PWA con NextJS',
                    ' Implantación de ESLint y Prettier en los proyectos de ReactJS para definir y utilizar reglas conjuntas sobre el formato de código',
                    ' Auditoria de Performance de las WebApps existentes',
                    ' Desarrollo y mantenimiento de nuevas features',
                    ' Implantación de StoryBook para facilitar la integración de los diseñadores y maquetadores con el equipo de frontend',
                ],
            },
        ],
    },
    {
        name: 'YAENCONTRE.COM',
        url: 'https://www.yaencontre.com/',
        jobPosition: 'Frontend Developer',
        period: 'Junio 2018 — Febrero 2019',
        project: [
            {
                name: 'Migración portal legacy',
                tasks: [
                    'Creación de un SaaS con la finalidad de publicar campañas de publicidad en "Google Ads" y "Facebook Ads"',
                    'Creación del proyecto en TypeScript con "Create-React-App"',
                    'Definición de las reglas de Linter con TSLint y Prettier',
                    'CI/CD con Gitlab CI y Jenkins',
                    'Integración con "Google Maps"',
                    'Diseño de componentes y funcionalidades con "Material-Ui"',
                    'Parte de un equipo Agile con Scrum/KANBAN siguiendo un tablero de Jira',
                ],
            },
        ],
    },
    {
        name: 'K-LAGAN',
        url: 'https://www.k-lagan.com/',
        jobPosition: `Frontend Developer(ReactJS) & Junior MobileApp Developer(React-Native)`,
        period: 'Junio 2018 — Febrero 2019',
        project: [
            {
                name: 'Creacion y desarrollo de nuevos proyectos',
                tasks: [
                    ' Creación de una Web-App capaz de establecer Videollamadas y chat entre usuarios',
                    'Creación de landing con NextJS',
                    'Creación de una Mobile-App(IOS, Android) con React-Native para establecer video-llamada y chat entre usuarios',
                ],
            },
        ],
    },
];
