import { CiSearch } from 'react-icons/ci'
import { PiSlidersFill } from 'react-icons/pi'
import { useLocation } from 'react-router-dom'
import SearchFilter from '../../SearchFilter'
import SearchFilterMobile from '../../SearchFilterMobile'

const Search = ({showFilter,setShowFilter}) => {
  const { pathname } = useLocation()
  // if (showFilter) {
  //   document.body.style.overflow = 'hidden'
  // } else {
  //   document.body.style.overflow = 'auto'
  // }
  return (
    <div
      className={`${
        pathname !== '/'
          ? 'hidden lg:block'
          : 'block lg:flex-1 lg:w-screen px-4  p-0 '
      }`}
    >
      <div className='flex gap-1 items-center relative'>
        <div
          className={`flex items-center md:min-w-[500px] flex-grow h-12 overflow-hidden 'shadow-md'  bg-white border border-stone-200 p-2 rounded-full`}
        >
          <CiSearch className='text-xl font-bold ml-1' />
          <input
            className='ml-1 items-center outline-none bg-white text-stone-400 flex-grow min-w-0 w-80'
            type='search'
            placeholder='Search Properties, Area...'
          />
        </div>
        <div onClick={() => setShowFilter(prev => !prev)} className='cursor-pointer h-12 w-12 bg-black rounded-full p-3 text-white flex items-center justify-center text-2xl'>
          <PiSlidersFill  />
        </div>
      </div>
      {showFilter && (
        <>
          <div className='hidden md:block'>
          <div className='absolute bg-white md:min-w-[500px] top-14 rounded-3xl p-6 shadow-lg'>
          <SearchFilter />
          </div>
         </div>
          <div className='md:hidden'>
            <SearchFilterMobile setShowFilter={setShowFilter} />
        </div>
        </>
      )}
    </div>
  )
}
export default Search
