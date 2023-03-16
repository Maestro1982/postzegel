import SearchInput from '../components/SearchInput';
import StampCard from '../components/StampCard';
import { stamps } from '../constants';

const Home = () => {
  return (
    <div className='h-screen'>
      <div>
        <SearchInput />
      </div>
      <div className='mt-12 flex flex-wrap gap-1'>
        {stamps.map((stamp) => (
          <StampCard key={stamp.id} {...stamp} />
        ))}
      </div>
    </div>
  );
};
export default Home;
