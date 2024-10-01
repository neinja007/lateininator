import Heading from '@/components/Heading';
import { Word } from '@/types/word';
import { getLexicalForm } from '@/utils/word/getLexicalForm';
import BackToDictionaryButton from './BackToDictionaryButton';
import { MAPPER } from '@/utils/other/mapper';

type HeaderProps = { word: Word };

type HeaderLoadingProps = { word?: undefined };

const Header = ({ word }: HeaderProps | HeaderLoadingProps) => {
  return (
    <div>
      <div className='float-start mb-2 sm:absolute'>
        <BackToDictionaryButton />
      </div>
      <div className='flex w-full justify-end lg:justify-center'>
        <Heading
          heading={
            word
              ? `${word?.name} ${getLexicalForm(word) || ''} (${MAPPER.extended.type.singular[word.type]})`
              : 'Wörterbuch'
          }
        >
          Hier findest du <b>alle Informationen</b> zum {word ? MAPPER.extended.type.singular[word.type] : 'Wort'}{' '}
          &quot;
          {word?.name}
          &quot;.
        </Heading>
      </div>
    </div>
  );
};

export default Header;
