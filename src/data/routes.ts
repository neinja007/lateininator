export type Route = {
  label: string;
  href: string;
  children?: never;
};

export type Dropdown = {
  label: string;
  href: string;
  children: Route[];
};

export const routes: (Route | Dropdown)[] = [
  { label: 'Übersicht', href: '/dashboard' },
  {
    label: 'Vokabular',
    href: '/vocabulary',
    children: [
      {
        label: 'Trainer',
        href: '/trainer'
      },
      { label: 'Wörterbuch', href: '/dictionary' }
    ]
  },
  {
    label: 'Flexion',
    href: '/flexion',
    children: [
      { label: 'Nomen', href: '/noun' },
      { label: 'Verben', href: '/verb' },
      { label: 'Adjektive', href: '/adjective' }
    ]
  },
  { label: 'Grammatik', href: '/grammar' },
  { label: 'Kompetenz', href: '/competence' }
];
