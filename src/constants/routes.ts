import { Color, RouteStatus } from '@/types/other';
import {
  ALargeSmall,
  Bike,
  BookCheck,
  BookMarked,
  BookOpenText,
  Box,
  Gem,
  House,
  LayoutDashboard,
  LineChart,
  LogIn,
  Newspaper,
  PencilLine,
  Replace,
  Ruler,
  Settings,
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
  status?: RouteStatus;
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
    label: 'Endungen',
    href: '/flexion',
    icon: Replace,
    children: [
      { label: 'Nomen', href: '/noun', color: 'blue', icon: House },
      { label: 'Verben', href: '/verb', color: 'red', icon: Bike },
      { label: 'Adjektive', href: '/adjective', color: 'green', icon: Ruler }
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
      { label: 'Wortschatz', href: '/collections', color: 'purple', icon: Box, status: 'signedIn' },
      { label: 'Wörter', href: '/words', color: 'blue', icon: ALargeSmall, status: 'staff' },
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
