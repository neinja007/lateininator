import Heading from '@/components/Heading';
import Link from '@/components/Link';
import NextLink from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className='flex flex-col gap-2'>
      <Heading heading='Nutzungsbedingungen' />
      <p>
        <NextLink href='/terms-of-service/en' className='text-blue-600 hover:underline dark:text-blue-400'>
          English version
        </NextLink>
      </p>
      <p>
        <b>Zuletzt aktualisiert:</b> 30.01.2026
      </p>
      <p>
        Willkommen bei Lateininator! Diese Nutzungsbedingungen regeln Ihre Nutzung unserer Website und Dienste. Durch
        die Nutzung unserer Website stimmen Sie diesen Bedingungen zu.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>1. Beschreibung des Dienstes</h2>
      <p>Lateininator ist eine Online-Plattform zum Erlernen der lateinischen Sprache. Unser Service umfasst:</p>
      <ul className='ml-6 list-disc'>
        <li>
          <b>Vokabeltrainer:</b> Ein interaktives Tool zum Üben von Übersetzungen zwischen Latein und anderen Sprachen
        </li>
        <li>
          <b>Wörterbuch:</b> Eine umfassende Datenbank lateinischer Wörter mit Übersetzungen und grammatikalischen
          Informationen
        </li>
        <li>
          <b>Flexionsübungen:</b> Tools zum Üben von Deklinationen (Nomen), Komparationen (Adjektive) und Konjugationen
          (Verben)
        </li>
        <li>
          <b>Grammatikübungen:</b> Verschiedene Übungen und Zusammenfassungen zur lateinischen Grammatik
        </li>
        <li>
          <b>Sammlungen:</b> Möglichkeit, eigene Wortsammlungen zu erstellen und zu verwalten
        </li>
        <li>
          <b>Punktesystem:</b> Ein Gamification-System, das Ihre Fortschritte belohnt
        </li>
        <li>
          <b>Premium-Funktionen:</b> Erweiterte Funktionen für Premium-Abonnenten
        </li>
      </ul>

      <h2 className='mt-4 text-xl font-semibold'>2. Benutzerkonten und Authentifizierung</h2>
      <p>
        Um bestimmte Funktionen zu nutzen, müssen Sie ein Benutzerkonto erstellen. Wir verwenden{' '}
        <Link href='https://clerk.com' target='_blank' rel='noopener noreferrer'>
          Clerk
        </Link>{' '}
        für die Authentifizierung und Verwaltung von Benutzerkonten. Bei der Registrierung müssen Sie:
      </p>
      <ul className='ml-6 list-disc'>
        <li>Eine gültige E-Mail-Adresse angeben</li>
        <li>Einen Benutzernamen wählen</li>
        <li>Ihre Identität bestätigen</li>
      </ul>
      <p>
        Sie sind verantwortlich für die Sicherheit Ihres Kontos und müssen alle Aktivitäten unter Ihrem Konto
        überwachen. Sie müssen uns sofort benachrichtigen, wenn Sie eine unbefugte Nutzung Ihres Kontos vermuten.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>3. Premium-Abonnements</h2>
      <p>
        Lateininator bietet Premium-Abonnements an, die erweiterte Funktionen freischalten. Bei Fragen zu Abonnements
        kontaktieren Sie uns bitte unter <Link href='mailto:support@lateininator.com'>support@lateininator.com</Link>.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>4. Benutzergenerierte Inhalte</h2>
      <p>Sie können eigene Inhalte erstellen, einschließlich:</p>
      <ul className='ml-6 list-disc'>
        <li>Wortsammlungen (Collections)</li>
        <li>Wortlisten</li>
        <li>Benutzerdefinierte Wörter und Übersetzungen</li>
      </ul>
      <p>
        Sie behalten das Eigentum an Ihren Inhalten, gewähren uns jedoch eine Lizenz zur Nutzung, Speicherung und
        Anzeige dieser Inhalte im Rahmen des Dienstes. Sie sind verantwortlich dafür, dass Ihre Inhalte:
      </p>
      <ul className='ml-6 list-disc'>
        <li>Nicht gegen geltende Gesetze verstoßen</li>
        <li>Keine Rechte Dritter verletzen</li>
        <li>Nicht beleidigend, diffamierend oder schädlich sind</li>
        <li>Keine Malware oder schädlichen Code enthalten</li>
      </ul>

      <h2 className='mt-4 text-xl font-semibold'>5. Akzeptable Nutzung</h2>
      <p>Sie verpflichten sich, unseren Service nicht zu:</p>
      <ul className='ml-6 list-disc'>
        <li>Für illegale Zwecke zu nutzen</li>
        <li>Zu versuchen, unbefugten Zugriff auf Systeme oder Daten zu erlangen</li>
        <li>Den Service zu überlasten oder zu stören</li>
        <li>Automatisierte Systeme (Bots, Scraper) ohne unsere ausdrückliche Genehmigung zu verwenden</li>
        <li>Inhalte zu verbreiten, die gegen diese Bedingungen verstoßen</li>
        <li>Andere Benutzer zu belästigen oder zu schikanieren</li>
      </ul>
      <p>
        Verstöße gegen diese Regeln können zur sofortigen Sperrung Ihres Kontos führen, ohne Anspruch auf
        Rückerstattung.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>6. Geistiges Eigentum</h2>
      <p>
        Alle Rechte an der Lateininator-Website, einschließlich Design, Code, Logos und Marken, sind Eigentum von
        neinja.dev oder deren Lizenzgebern. Die verwendeten Technologien umfassen:
      </p>
      <ul className='ml-6 list-disc'>
        <li>
          <Link href='https://nextjs.org' target='_blank' rel='noopener noreferrer'>
            Next.js
          </Link>{' '}
          (React-Framework)
        </li>
        <li>
          <Link href='https://react.dev' target='_blank' rel='noopener noreferrer'>
            React
          </Link>{' '}
          (UI-Bibliothek)
        </li>
        <li>
          <Link href='https://tailwindcss.com' target='_blank' rel='noopener noreferrer'>
            Tailwind CSS
          </Link>{' '}
          (Styling)
        </li>
        <li>
          <Link href='https://prisma.io' target='_blank' rel='noopener noreferrer'>
            Prisma
          </Link>{' '}
          (Datenbank-ORM)
        </li>
        <li>
          <Link href='https://tanstack.com/query' target='_blank' rel='noopener noreferrer'>
            TanStack Query
          </Link>{' '}
          (Datenabfrage und -verwaltung)
        </li>
        <li>
          <Link href='https://lucide.dev' target='_blank' rel='noopener noreferrer'>
            Lucide Icons
          </Link>{' '}
          (Icons)
        </li>
        <li>
          <Link href='https://vercel.com' target='_blank' rel='noopener noreferrer'>
            Vercel
          </Link>{' '}
          (Hosting und Analytics)
        </li>
      </ul>
      <p>
        Sie dürfen unsere Website nicht kopieren, modifizieren, verteilen oder kommerziell nutzen, ohne unsere
        ausdrückliche schriftliche Genehmigung.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>7. Drittanbieter-Dienste</h2>
      <p>Unser Service nutzt verschiedene Drittanbieter-Dienste, die ihre eigenen Nutzungsbedingungen haben:</p>
      <ul className='ml-6 list-disc'>
        <li>
          <b>Clerk:</b> Für Authentifizierung und Benutzerverwaltung. Ihre Nutzung unterliegt den{' '}
          <Link href='https://clerk.com/legal' target='_blank' rel='noopener noreferrer'>
            Clerk-Nutzungsbedingungen
          </Link>
        </li>
        <li>
          <b>Vercel Analytics:</b> Für anonyme Nutzungsstatistiken. Weitere Informationen finden Sie in unserer{' '}
          <Link href='/privacy-policy/de'>Datenschutzerklärung</Link>
        </li>
        <li>
          <b>Neon Database:</b> Für die Datenbank-Hosting-Services (PostgreSQL)
        </li>
      </ul>

      <h2 className='mt-4 text-xl font-semibold'>8. Verfügbarkeit des Dienstes</h2>
      <p>
        Wir bemühen uns, einen zuverlässigen Service anzubieten, können jedoch keine Garantie für ununterbrochene
        Verfügbarkeit geben. Der Service kann aus folgenden Gründen vorübergehend nicht verfügbar sein:
      </p>
      <ul className='ml-6 list-disc'>
        <li>Wartungsarbeiten</li>
        <li>Technische Probleme</li>
        <li>Höhere Gewalt</li>
        <li>Änderungen am Service</li>
      </ul>
      <p>
        Wir behalten uns das Recht vor, den Service jederzeit zu ändern, zu suspendieren oder einzustellen, mit oder
        ohne Vorankündigung.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>9. Haftungsausschluss</h2>
      <p>
        Der Service wird &quot;wie besehen&quot; und &quot;wie verfügbar&quot; bereitgestellt. Wir übernehmen keine
        Gewährleistung für:
      </p>
      <ul className='ml-6 list-disc'>
        <li>Die Genauigkeit oder Vollständigkeit der bereitgestellten Informationen</li>
        <li>Die kontinuierliche Verfügbarkeit des Dienstes</li>
        <li>Die Abwesenheit von Fehlern oder Viren</li>
        <li>Die Eignung des Dienstes für Ihre spezifischen Zwecke</li>
      </ul>
      <p>
        In keinem Fall haften wir für indirekte, zufällige, besondere oder Folgeschäden, die aus der Nutzung oder
        Unmöglichkeit der Nutzung unseres Dienstes entstehen.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>10. Kündigung</h2>
      <p>
        Sie können Ihr Konto jederzeit löschen, indem Sie uns unter{' '}
        <Link href='mailto:support@lateininator.com'>support@lateininator.com</Link> kontaktieren. Wir behalten uns das
        Recht vor, Konten zu suspendieren oder zu löschen, die gegen diese Nutzungsbedingungen verstoßen, ohne
        Vorankündigung und ohne Anspruch auf Rückerstattung.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>11. Änderungen der Nutzungsbedingungen</h2>
      <p>
        Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Wesentliche Änderungen werden wir
        Sie per E-Mail oder durch eine Mitteilung auf der Website benachrichtigen. Ihre fortgesetzte Nutzung des
        Dienstes nach solchen Änderungen stellt Ihre Zustimmung zu den geänderten Bedingungen dar.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>12. Geltendes Recht</h2>
      <p>
        Diese Nutzungsbedingungen unterliegen österreichischem Recht. Streitigkeiten werden vor den zuständigen
        österreichischen Gerichten verhandelt.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>13. Kontakt</h2>
      <p>Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie bitte:</p>
      <p>
        <b>neinja.dev</b>
      </p>
      <p>
        <b>E-Mail:</b> <Link href='mailto:support@lateininator.com'>support@lateininator.com</Link> (Entwickler-Adresse:{' '}
        <Link href='mailto:contact@neinja.dev'>contact@neinja.dev</Link>)
      </p>
      <p>
        <b>Land:</b> Österreich
      </p>
    </div>
  );
}
