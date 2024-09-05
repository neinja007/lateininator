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
  Newspaper,
  PencilLine,
  Replace,
  Settings,
  SpellCheck,
  User,
  WholeWord,
  X
} from 'lucide-react';

export type Route = {
  label: string;
  href: string;
  icon: typeof X;
  color?: Color;
  children?: Route[];
  status?: 'signedIn' | 'signedOut' | 'premium' | 'notPremium';
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
    label: 'Premium',
    href: '/premium/overview',
    icon: Gem,
    color: 'pink',
    status: 'notPremium'
  },
  {
    label: '{name}',
    href: '/user',
    status: 'signedIn',
    icon: User,
    children: [
      { label: 'Wortschatz', href: '/manage-vocabulary', color: 'purple', icon: WholeWord, status: 'signedIn' },
      { label: 'Einstellungen', href: '/settings', color: 'blue', icon: Settings, status: 'signedIn' },
      { label: 'Statistiken', href: '/statistics', color: 'green', icon: LineChart, status: 'signedIn' }
    ]
  },
  {
    label: 'Anmelden',
    href: '/auth/sign-in',
    status: 'signedOut',
    icon: LogIn,
    color: 'green'
  }
];
