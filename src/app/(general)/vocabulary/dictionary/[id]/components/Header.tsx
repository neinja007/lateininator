import Heading from '@/components/Heading';
import { Word } from '@/types/word';
import BackToDictionaryButton from './BackToDictionaryButton';
import { MAPPER } from '@/utils/other/mapper';

type HeaderProps = { word: Word };

const Header = ({ word }: HeaderProps) => {
  return (
    <div>
      <div className='float-start mb-2 sm:absolute'>
        <BackToDictionaryButton />
      </div>
      <div className='flex w-full justify-end lg:justify-center'>
        <Heading heading={word.name}>
          Hier findest du <b>alle Informationen</b> zum {MAPPER.extended.type.singular[word.type]}
          &quot;
          {word.name}
          &quot;.
        </Heading>
      </div>
    </div>
  );
};

export default Header;
