import { Link } from 'react-router-dom'
import { icons } from '../../../constants'
const MobileNavigation = ({ setNavOpen, setMode }) => {
  return (
    <div className='lg:hidden  z-[9999999]  shadow-lg border-t border-t-stone-200 fixed bottom-0 bg-white h-[60px] flex items-center justify-between w-full px-4 text-stone-900'>
      <Link to='/'>
        <div className='flex flex-col justify-center items-center text-base space-y-1'>
          <span>
            <img src={icons.home} alt='home' />
          </span>
          <span className='text-xs'>Home</span>
        </div>
      </Link>

      <div className='flex flex-col text-stone-500 justify-center items-center text-base gap-2'>
        <span>
          <img src={icons.search} alt='search' />
        </span>
        <span className='text-xs'>Search</span>
      </div>

      <Link to='/map'>
        <div className='flex flex-col text-stone-500 justify-center items-center text-base gap-2'>
          <span>
            <img src={icons.globe} alt='globe' />
          </span>
          <span className='text-xs'>Map</span>
        </div>
      </Link>

      <Link to='/contact'>
        <div className='flex flex-col text-stone-500 justify-center items-center text-base gap-2'>
          <span>
            <img src={icons.message} alt='message' />
          </span>
          <span className='text-xs'>Inquiry</span>
        </div>
      </Link>

      <div
        className='flex flex-col text-stone-500 justify-center items-center text-base gap-2'
        onClick={() => {
          setNavOpen(true)
          setMode('mobile')
        }}
      >
        <span>
          <img src={icons.menu} alt='menu' />
        </span>
        <span className='text-xs'>Menu</span>
      </div>
    </div>
  )
}
export default MobileNavigation
