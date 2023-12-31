import { RiWhatsappFill } from 'react-icons/ri'
import { icons } from '../../../constants'
import {Link, useLocation} from 'react-router-dom'
import { useState } from 'react'
import CommonModal from '../CommonModal'
import RegisterInterest from '../../RegisterInterest'
const Navs = ({ scrolled, setNavOpen, navOpen,showFilter,setShowFilter }) => {
  const { pathname } = useLocation()
  const [showModal, setShowModal] = useState(false)

  if (showModal || navOpen || showFilter) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  return (
    <div className='hidden lg:flex-1 lg:flex lg:justify-end z-40 relative' onClick={()=>showFilter && setShowFilter(false)}>
      {
        !navOpen && ( <div className='flex space-x-7 items-center '>
        <div>
          <RiWhatsappFill className='text-2xl cursor-pointer text-green-500' />
        </div>
       
          <div onClick={()=>setShowModal(true)}>
          <img src={!scrolled && pathname === '/' ? icons.messageWhite : icons.message} alt='message' className='cursor-pointer' />
        </div>
        
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
       {showModal && (
        <CommonModal setShowModal={setShowModal}>
          <RegisterInterest value=' We aspire your interest' />
        </CommonModal>
      )}
    </div>
  )
}
export default Navs
