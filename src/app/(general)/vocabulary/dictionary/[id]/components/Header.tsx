import Heading from '@/components/Heading';
import { Word } from '@/types/word';
import BackToDictionaryButton from './BackToDictionaryButton';
import { MAPPER } from '@/utils/other/mapper';
import Badge from '@/components/Badge';
import { mapTypeToColor } from '@/constants/other';

type HeaderProps = { word: Word };

const Header = ({ word }: HeaderProps) => {
  return (
    <div>
      <div className='grid w-full grid-cols-2 gap-4 lg:grid-cols-3'>
        <BackToDictionaryButton />
        <div>
          <Heading className='!text-left lg:!text-center' heading={word.name}>
            Hier findest du <b>alle Informationen</b> zum {MAPPER.extended.type.singular[word.type]} &quot;
            {word.name}
            &quot;.
          </Heading>
        </div>
        <div className='text-right'>
          <Badge color={mapTypeToColor[word.type]} text={MAPPER.extended.type.singular[word.type]} big />
        </div>
      </div>
    </div>
  );
};

export default Header;
