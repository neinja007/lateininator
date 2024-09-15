import Link from '@/components/Link';
import TutorialHeading from '@/components/TutorialHeading';

const Page = () => {
  return (
    <div>
      <TutorialHeading heading='Wörter Verwalten'>
        Füge hier <b>Wörter</b> hinzu, die es <b>noch nicht auf dem Lateininator gibt</b>. Diese kannst du dann in
        deinen{' '}
        <b>
          {' '}
          <Link href='/user/collections' className='text-blue-400'>
            Kollektionen
          </Link>{' '}
          verwenden
        </b>{' '}
        und auch <b>abfragen</b>.
      </TutorialHeading>
    </div>
  );
};

export default Page;
