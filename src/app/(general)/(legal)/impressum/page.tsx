import Heading from '@/components/Heading';
import Link from '@/components/Link';

export default function ImpressumPage() {
  return (
    <div className='flex flex-col gap-2'>
      <Heading heading='Impressum' />
      <p>
        Dies ist die Impressum-Seite von Lateininator. Hier finden Sie alle wichtigen Informationen über die Website und
        die Personen, die hinter der Website stehen.
      </p>
      <p>
        <b>Land:</b> Österreich
      </p>
      <p>
        <b>E-Mail:</b> <Link href='mailto:support@lateininator.com'>support@lateininator.com</Link> (Entwickler-Adresse:{' '}
        <Link href='mailto:contact@neinja.dev'>contact@neinja.dev</Link>)
      </p>
      <p>
        <b>Entwickler-Webseite:</b> <Link href='https://neinja.dev'>neinja.dev</Link>
      </p>
      <p>
        <b>Projekt Information:</b> Privates Projekt von <Link href='https://neinja.dev'>neinja.dev</Link>, ohne
        Bezahlungen etc.
      </p>
    </div>
  );
}
