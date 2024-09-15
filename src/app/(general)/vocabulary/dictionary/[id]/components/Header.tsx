import TutorialHeading from '@/components/TutorialHeading';
import { Word } from '@/types/word';
import { getLexicalForm } from '@/utils/word/getLexicalForm';
import BackToDictionaryButton from './BackToDictionaryButton';
import { MAPPER } from '@/utils/other/mapper';

type HeaderProps = { word: Word; loading: false };

type HeaderLoadingProps = { word?: undefined; loading: true };

const Header = ({ word, loading }: HeaderProps | HeaderLoadingProps) => {
  return (
    <div>
      <div className='absolute float-start'>
        <BackToDictionaryButton />
      </div>
      <div className='flex w-full justify-center'>
        <TutorialHeading
          heading={
            word ? `${MAPPER.extended.type.singular[word.type]}: ${word?.name} ${getLexicalForm(word)}` : 'Wörterbuch'
          }
        >
          Hier findest du alle Informationen zum Wort &quot;{word?.name}&quot;.
        </TutorialHeading>
      </div>
    </div>
  );
};

export default Header;
