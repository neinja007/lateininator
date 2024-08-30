import { Color } from '@/types/other';
import {
  BookCheck,
  BookMarked,
  BookOpenText,
  CircleDot,
  Gem,
  LayoutDashboard,
  LineChart,
  LogIn,
  LogOut,
  Newspaper,
  PencilLine,
  Replace,
  Settings,
  SpellCheck,
  User,
  Vault,
  WholeWord,
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
  {
    label: 'Verwaltung',
    href: '/settings',
    icon: Settings,
    children: [
      { label: 'Wortschatz', href: '/manage-vocabulary', color: 'purple', icon: WholeWord },
      { label: 'Einstellungen', href: '/settings', color: 'blue', icon: Settings },
      { label: 'Statistiken', href: '/statistics', color: 'green', icon: LineChart }
    ]
  },
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
        icon: Vault
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
