import { Color } from '@/types/other';
import {
  BookCheck,
  BookMarked,
  BookOpenText,
  CircleDot,
  Crosshair,
  Gem,
  LayoutDashboard,
  Newspaper,
  PencilLine,
  Replace,
  SpellCheck,
  X
} from 'lucide-react';

export type Route = {
  label: string;
  href: string;
  icon: typeof X;
  color?: Color;
  children?: Route[];
};

export const routes: Route[] = [
  { label: 'Übersicht', href: '/dashboard', icon: LayoutDashboard },
  {
    label: 'Vokabular',
    href: '/vocabulary',
    icon: BookMarked,
    children: [
      {
        label: 'Trainer',
        href: '/trainer',
        color: 'yellow',
        icon: BookCheck
      },
      { label: 'Wörterbuch', href: '/dictionary', color: 'purple', icon: BookOpenText }
    ]
  },
  {
    label: 'Flexion',
    href: '/flexion',
    icon: Replace,
    children: [
      { label: 'Nomen', href: '/noun', color: 'blue', icon: CircleDot },
      { label: 'Verben', href: '/verb', color: 'red', icon: CircleDot },
      { label: 'Adjektive', href: '/adjective', color: 'green', icon: CircleDot }
    ]
  },
  {
    label: 'Grammatik',
    href: '/grammar',
    icon: SpellCheck,
    children: [
      { label: 'Zusammenfassungen', href: '/summaries', color: 'purple', icon: Newspaper },
      {
        label: 'Übungen',
        href: '/exercises',
        color: 'yellow',
        icon: PencilLine
      }
    ]
  },
  { label: 'Kompetenz', href: '/competence', color: 'orange', icon: Crosshair },
  {
    label: 'Premium',
    href: '/premium',
    icon: Gem,
    color: 'purple'
  }
];
