import { Color } from '@/types/other';

export type Route = {
  label: string;
  href: string;
  color?: Color;
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
        href: '/trainer',
        color: 'yellow'
      },
      { label: 'Wörterbuch', href: '/dictionary', color: 'purple' }
    ]
  },
  {
    label: 'Flexion',
    href: '/flexion',
    children: [
      { label: 'Nomen', href: '/noun', color: 'blue' },
      { label: 'Verben', href: '/verb', color: 'red' },
      { label: 'Adjektive', href: '/adjective', color: 'green' }
    ]
  },
  {
    label: 'Grammatik',
    href: '/grammar',
    children: [
      { label: 'Zusammenfassungen', href: '/summaries', color: 'purple' },
      {
        label: 'Übungen',
        href: '/exercises',
        color: 'yellow'
      }
    ]
  },
  { label: 'Kompetenz', href: '/competence', color: 'orange' }
];
