import { Color } from '@/types/other';
import {
  BookCheck,
  BookMarked,
  BookOpenText,
  CircleDot,
  Crosshair,
  Gem,
  LayoutDashboard,
  LogIn,
  LogOut,
  Newspaper,
  PencilLine,
  Replace,
  SpellCheck,
  User,
  X
} from 'lucide-react';

export type Route = {
  label: string;
  href: string;
  icon: typeof X;
  color?: Color;
  children?: Route[];
  authStatus?: 'signedIn' | 'signedOut';
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
    href: '/premium/overview',
    icon: Gem,
    color: 'pink'
  },
  {
    label: '{name}',
    href: '/account',
    authStatus: 'signedIn',
    icon: User,
    children: [
      {
        label: 'Konto Verwalten',
        href: '/manage',
        authStatus: 'signedIn',
        icon: User
      },
      {
        label: 'Abmelden',
        href: '/sign-out',
        authStatus: 'signedIn',
        icon: LogOut
      }
    ]
  },
  {
    label: 'Anmelden',
    href: '/account/sign-in',
    authStatus: 'signedOut',
    icon: LogIn
  }
];
