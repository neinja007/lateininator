import { SettingData } from '@/types/other';
import { SettingKey } from '@prisma/client';
import axios from 'axios';

type ClientSettings = 'RESET_POINTS';
type Settings = {
  [S in SettingKey | ClientSettings]: SettingData;
};

export const settings: Settings = {
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
  },
  RESET_POINTS: {
    type: 'button',
    name: 'Punkte zurücksetzen',
    description: 'Setzt die Punkte auf 0 zurück.',
    onClick: () => {
      axios.post('/api/points', { points: 0, method: 'set' });
    },
    buttonText: 'Punkte zurücksetzen',
    color: 'red',
    invalidateQueries: 'points'
  }
};
