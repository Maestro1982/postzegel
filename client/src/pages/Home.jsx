import SearchInput from '../components/SearchInput';
import StampCard from '../components/StampCard';
import { stamps } from '../constants';

const Home = () => {
  return (
    <div className='h-screen mx-auto px-8'>
      <div>
        <SearchInput />
      </div>
      <div className='flex flex-wrap items-center gap-2 mt-5'>
        {stamps.map((stamp) => (
          <StampCard key={stamp.id} {...stamp} />
        ))}
      </div>
    </div>
  );
};
export default Home;
