import Heading from '@/components/Heading';
import Link from '@/components/Link';
import NextLink from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className='flex flex-col gap-2'>
      <Heading heading='Datenschutzerklärung' />
      <p>
        <NextLink href='/privacy-policy/en' className='text-blue-600 hover:underline dark:text-blue-400'>
          English version
        </NextLink>
      </p>
      <p>
        <b>Zuletzt aktualisiert:</b> 30.01.2026
      </p>
      <p>
        Wir schätzen Ihre Privatsphäre. Diese Datenschutzerklärung erklärt, welche Informationen wir sammeln, wie sie
        verwendet werden und Ihre Rechte.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>1. Informationen, die wir sammeln</h2>
      <p>Wenn Sie diese Website nutzen, sammeln wir folgende Informationen:</p>
      <ul className='ml-6 list-disc'>
        <li>E-Mail-Adresse (wird zur Authentifizierung verwendet)</li>
        <li>Benutzername</li>
        <li>Kontenerstellungsdatum</li>
      </ul>
      <p>Es werden keine weiteren persönlichen Informationen gesammelt.</p>

      <h2 className='mt-4 text-xl font-semibold'>2. Wie wir Ihre Informationen verwenden</h2>
      <p>Wir verwenden die von uns gesammelten Informationen nur, um:</p>
      <ul className='ml-6 list-disc'>
        <li>Ihr Konto zu authentifizieren</li>
        <li>Die Website bereitzustellen und zu verbessern</li>
      </ul>
      <p>Wir verkaufen, teilen oder verteilen Ihre persönlichen Informationen nicht.</p>

      <h2 className='mt-4 text-xl font-semibold'>3. Analysen</h2>
      <p>Wir verwenden Vercel Web Analytics, um anonyme Nutzungsdaten zu sammeln. Dazu gehören:</p>
      <ul className='ml-6 list-disc'>
        <li>Seitenaufrufe</li>
        <li>Gerätetyp</li>
        <li>Verweisende Websites</li>
      </ul>
      <p>
        Über Analysen werden keine persönlichen Informationen gesammelt. Vercel Web Analytics verwendet keine Cookies
        und verfolgt Sie nicht über Websites hinweg.
      </p>

      <h2 className='mt-4 text-xl font-semibold'>4. Ihre Rechte</h2>
      <p>
        Sie können jederzeit die Löschung Ihres Kontos und aller zugehörigen Daten anfordern, indem Sie uns unter{' '}
        <Link href='mailto:contact@neinja.dev'>contact@neinja.dev</Link> kontaktieren. Auf Anfrage löschen wir Ihre
        Daten umgehend.
      </p>
      <p>Sie haben auch das Recht, sich bezüglich Ihrer Daten an die österreichische Datenschutzbehörde zu wenden.</p>

      <h2 className='mt-4 text-xl font-semibold'>5. Kontakt</h2>
      <p>Wenn Sie Fragen zu dieser Datenschutzerklärung oder Ihren Daten haben, kontaktieren Sie:</p>
      <p>
        <b>neinja.dev</b>
      </p>
      <p>
        <b>E-Mail:</b> <Link href='mailto:contact@neinja.dev'>contact@neinja.dev</Link>
      </p>
      <p>
        <b>Land:</b> Österreich
      </p>
    </div>
  );
}
