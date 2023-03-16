import { AiOutlineSearch } from 'react-icons/ai';

const SearchInput = () => {
  return (
    <div className='mt-20 text-center flex justify-center items-center'>
      <input
        type='text'
        name='search'
        placeholder='Zoeken...'
        className='border-[2px] border-[#53131e] pl-1 rounded-md w-56 md:w-96 outline-none h-10'
      />
      <AiOutlineSearch className='-ml-6' size='1.25rem' />
    </div>
  );
};
export default SearchInput;
