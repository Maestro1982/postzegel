const StampCard = ({ country, price, year, image }) => {
  return (
    <div className='card flex flex-col items-center mb-2'>
      <img src='/post_1.jpg' alt='image' className='object-cover' />
      <span className='text-[14px] text-[#53131e] font-semibold'>€{price}</span>
      <span className='text-[12px] text-[#53131e]'>
        {country} {year}
      </span>
    </div>
  );
};
export default StampCard;
