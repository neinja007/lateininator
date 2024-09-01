import Heading from '@/components/Heading';
import Badge from '@/components/Badge';
import { Word } from '@/types/word';
import { getLexicalForm } from '@/utils/word/getLexicalForm';
import BackToDictionaryButton from './BackToDictionaryButton';

type HeaderProps = { word: Word };

const Header = ({ word }: HeaderProps) => {
  return (
    <div className='min-h-12 grid-cols-2 justify-center sm:flex sm:gap-4 md:grid lg:grid-cols-3'>
      <BackToDictionaryButton />
      <Heading>
        <span className='mt-4 flex justify-center sm:mt-0 sm:justify-end lg:justify-center'>
          {word.name} {getLexicalForm(word)}
          <div className='ml-3 md:text-right'>
            <Badge text={word.type} />
          </div>
        </span>
      </Heading>
    </div>
  );
};

export default Header;
