import { RiWhatsappFill } from 'react-icons/ri'
import { icons } from '../../../constants'
import {Link, useLocation} from 'react-router-dom'
const Navs = ({ scrolled, setNavOpen, navOpen }) => {
  const {pathname} = useLocation()
  return (
    <div className='hidden lg:flex-1 lg:flex lg:justify-end z-40 relative'>
      {
        !navOpen && ( <div className='flex space-x-7 items-center '>
        <div>
          <RiWhatsappFill className='text-2xl cursor-pointer text-green-500' />
        </div>
          <Link to='/contact'>
          <div>
          <img src={!scrolled && pathname === '/' ? icons.messageWhite : icons.message} alt='message' className='cursor-pointer' />
        </div>
        </Link>
          <Link to='/map'>
          <div>
          <img src={!scrolled && pathname === '/' ? icons.globeWhite : icons.globe} alt='globe' className='cursor-pointer' />
        </div>
        </Link>
        <div>
          <img
            src={!scrolled && pathname === '/' ? icons.menuWhite : icons.menu}
            onClick={()=>setNavOpen(true)}
            alt='menu'
            className='cursor-pointer'
          />
        </div>
      </div>)
     }
    </div>
  )
}
export default Navs
