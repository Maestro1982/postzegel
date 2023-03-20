import { FaHeart } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const StampCard = ({
  image,
  catalogNumber,
  typeOfCollection,
  year,
  postFreshCatalogPrice,
  postFreshSalesPrice,
  hingeCatalogPrice,
  hingeSalesPrice,
  stampedCatalogPrice,
  stampedSalesPrice,
  onLetterCatalogPrice,
  onLetterSalesPrice,
}) => {
  const isAvailable = false;
  return (
    <div className='p-2 bg-[#ddf8db] rounded-lg shadow-lg w-72'>
      <img
        src='/post_1.jpg'
        alt='image'
        className='object-cover rounded-xl h-40 mx-auto'
      />
      <h3 className='text-[12px] font-medium text-center'>
        Cat. Nr: {catalogNumber}
      </h3>
      <h4 className='text-[11px] text-center'>{typeOfCollection}</h4>
      <h5 className='text-[11px] text-center'>{year}</h5>
      <div className='flex flex-row justify-evenly'>
        <h5 className='text-[12px]'>Cat. prijs</h5>
        <h5 className='text-[12px]'>Verk. prijs</h5>
      </div>
      <div className='flex flex-row text-justify items-center'>
        <h6 className='text-[11px]'>Postfris:</h6>
        <h6 className='text-[13px] font-medium pl-5'>
          €{postFreshCatalogPrice.toFixed(2)}
        </h6>
        <h6 className='text-[13px] font-medium pl-[75px]'>
          €{postFreshSalesPrice.toFixed(2)}
        </h6>
        <div className='pl-6 flex justify-center items-center'>
          {isAvailable ? (
            <FaHeart size={13} />
          ) : (
            <RxCross2 size={13} color='red' />
          )}
        </div>
      </div>
      <div className='flex flex-row text-justify items-center'>
        <h6 className='text-[11px]'>Scharnier:</h6>
        <h6 className='text-[13px] font-medium pl-2'>
          €{hingeCatalogPrice.toFixed(2)}
        </h6>
        <h6 className='text-[13px] font-medium pl-[78px]'>
          €{hingeSalesPrice.toFixed(2)}
        </h6>
        <div className='pl-6 flex justify-center items-center'>
          {isAvailable ? (
            <FaHeart size={13} />
          ) : (
            <RxCross2 size={13} color='red' />
          )}
        </div>
      </div>
      <div className='flex flex-row text-justify items-center'>
        <h6 className='text-[11px]'>Stempeld:</h6>
        <h6 className='text-[13px] font-medium pl-2'>
          €{stampedCatalogPrice.toFixed(2)}
        </h6>
        <h6 className='text-[13px] font-medium pl-[77px]'>
          €{stampedSalesPrice.toFixed(2)}
        </h6>
        <div className='pl-6 flex justify-center items-center'>
          {isAvailable ? (
            <FaHeart size={13} />
          ) : (
            <RxCross2 size={13} color='red' />
          )}
        </div>
      </div>
      <div className='flex flex-row text-justify items-center'>
        <h6 className='text-[11px]'>Op brief:</h6>
        <h6 className='text-[13px] font-medium pl-4'>
          €{onLetterCatalogPrice.toFixed(2)}
        </h6>
        <h6 className='text-[13px] font-medium pl-[78px]'>
          €{onLetterSalesPrice.toFixed(2)}
        </h6>
        <div className='pl-6 flex justify-center items-center'>
          {isAvailable ? (
            <FaHeart size={13} />
          ) : (
            <RxCross2 size={13} color='red' />
          )}
        </div>
      </div>
    </div>
  );
};
export default StampCard;
