interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
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
        name: 'Rechercher une consultation',
        url: 'recherche',
        icon: 'icon-note'
      },
      {
        name: 'Devis reçus ',
        url: 'devis',
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
    divider: true
  },

  {
    
    name: ' Nos Fournisseurs',
  children : [
  {
    name: 'Liste',
    url: 'fournisseurs',
    icon: 'icon-people'
  },
  {
    name: 'Gestion ',
    url: 'GestFournisseurs',
    icon: 'icon-pencil'
  }
]},
  {
   
    name: ' Commission PV',
    children : [
  {
    name: 'Liste',
    url: 'employees',
    icon: 'icon-people'
  },
  {
    name: 'Gestion ',
    url: '*/register',
    icon: 'icon-pencil'
  },
]}

];
