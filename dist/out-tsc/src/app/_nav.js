"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navItems = [
    {
        title: true,
        name: 'Processus Comptable'
    },
    {
        name: 'Consultations',
        url: 'formulaire',
        icon: 'icon-note',
        children: [
            {
                name: 'Nouvelle Consultations',
                url: 'consultations',
                icon: 'icon-note'
            },
            {
                name: 'Devis reçus ',
                url: 'consultations/devis',
                icon: 'icon-note'
            }
        ]
    },
    {
        name: 'Bon De Commande',
        url: 'bon-de-commande',
        icon: 'icon-note'
    },
    {
        divider: true
    },
    {
        title: true,
        name: 'Employees',
    },
    {
        name: 'Liste',
        url: 'employees',
        icon: 'icon-people'
    },
    {
        name: 'Gestion ',
        url: 'GestE',
        icon: 'icon-pencil'
    },
    {
        divider: true
    },
    {
        title: true,
        name: 'Fournisseurs',
    },
    {
        name: 'Liste',
        url: 'fournisseurs',
        icon: 'icon-people'
    },
    {
        name: 'Gestion ',
        url: 'GestF',
        icon: 'icon-pencil'
    }
];
//# sourceMappingURL=_nav.js.map