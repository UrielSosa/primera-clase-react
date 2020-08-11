export const links = [
        {
            text: 'Inicio', 
            link: '/',
            clase: 'active',
            icon: 'icon_house_alt'
        },
        {
            text: 'Formularios',
            link: '/form',
            clase: 'sub-menu',
            icon: 'icon_document_alt',
            child: [
                {
                    text: 'Elementos',
                    link: '/elementos'
                },
                {
                    text: 'Validaciones',
                    link: '/validaciones'
                }
            ]
        },
        {
            text: 'UI',
            link: '/ui',
            clase: 'sub-menu',
            icon: 'icon_desktop',
            child: [
                {
                    text: 'Elementos',
                    link: '/elementos'
                },
                {
                    text: 'Botones',
                    link: '/botones'
                },
                {
                    text: 'Grilla',
                    link: '/grilla'
                }
            ]
        },
        {
            text: 'Herramientas',
            link: '/herramientas',
            icon: 'icon_genius'
        },
        {
            text: 'Graficos',
            link: '/graficos',
            icon: 'icon_piechart'
        },
        {
            text: 'Tablas',
            link: '/tablas',
            clase: 'sub-menu',
            icon: 'icon_table',
            child: [
                {
                    text: 'Tablas basicas',
                    link: '/tables-basic'
                }
            ]
        },
];

export function arrow(child){
    return child ? '<span className="menu-arrow arrow_carrot-right"></span>' : 'error';
}