import { CiSearch } from "react-icons/ci"

const SearchDeveloper = ({placeholder}) => {
  return (
    <div >
      <div className='flex gap-1 items-center'>
        <div className={`flex items-center flex-grow h-12 overflow-hidden 'shadow-none' bg-white border border-stone-200 p-2 rounded-full`}>
          <CiSearch className='text-xl font-bold ml-1' />
          <input
            className='ml-1 items-center outline-none bg-white text-stone-400 flex-grow min-w-0 w-80'
            type='text'
            placeholder={placeholder}
          />
        </div>
       
      </div>
    </div>
  )
}
export default SearchDeveloper