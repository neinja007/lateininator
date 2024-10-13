import { Settings } from '@/types/other';
import axios from 'axios';

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
    onClick: () => axios.post('/api/points', { points: 0, method: 'set' }),
    buttonText: 'Punkte zurücksetzen',
    color: 'red',
    invalidateQueries: 'points'
  },
  PRIMARY_COLOR: {
    type: 'color',
    name: 'Primäre Farbe',
    description: 'Ändert die Farbe von Knöpfen, vom Logo, und von anderen Elementen.'
  },
  NAME_CHANGE: {
    type: 'input',
    name: 'Namen ändern',
    description:
      'Verändere deinen Benutzernamen. Ihre Daten bleiben nach der Änderung erhalten. Es kann sein, dass Sie die Seite neu laden müssen, um Ihre Änderungen zu sehen.'
  },
  BACKGROUND_PATTERN: {
    type: 'list',
    name: 'Hintergrundmuster',
    description: 'Wenn diese Einstellung aktiviert ist, wird ein Hintergrundmuster angezeigt.',
    options: {
      false: 'Kein Muster',
      dotted: 'Gepunktet'
    },
    invalidateQueries: 'settings'
  }
};
