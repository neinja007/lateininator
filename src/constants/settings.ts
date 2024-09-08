import { SettingData } from '@/types/other';
import { SettingKey } from '@prisma/client';

export const settings: {
  [S in SettingKey]: SettingData;
} = {
  DICTIONARY_VOCATIVE: {
    type: 'boolean',
    name: 'Vokativ im Wörterbuch anzeigen',
    description: 'Zeigt den Vokativ in den Tabellen des Wörterbuchs an. Betrifft Nomen und Adjektive.'
  },
  TESTING_VOCATIVE: {
    type: 'boolean',
    name: 'Vokativ beim Testen abfragen',
    description: 'Fragt nach dem Vokativ beim Testen ab. Dies gilt für alle Trainer.'
  },
  LANGUAGE: {
    type: 'list',
    options: {
      de: 'Deutsch',
      en: 'Englisch'
    },
    name: 'Sprache',
    description: 'Wählt die Sprache des gesamten Lateininators aus.',
    disabled: true
  }
};
