import { FaXmark } from 'react-icons/fa6'
import NavigationItems from './NavigationItems'

const Navigation = ({ navOpen, setNavOpen, mode }) => {
  return (
    <>
      {mode === 'desktop' && (
        <>
          <div
            className={`fixed  shadow-2xl overflow-auto no-scrollbar   top-0 right-0 bg-white  w-[300px] z-[333333] h-screen transition-transform ease-in-out duration-500 ${
              navOpen ? '' : 'transform translate-x-[300px] '
            }`}
          >
            <div className='flex items-center justify-end px-4 mt-6'>
              {/* <div className='bold'>Welcome!</div> */}
              <div className='cursor-pointer' onClick={()=>setNavOpen(false)}><FaXmark/></div>
            </div>
             {/* <hr className='mt-4' /> */}
            <NavigationItems setNavOpen={setNavOpen} />
          </div>
          <div
            onClick={() => setNavOpen(false)}
            className={`${
              navOpen &&
              'fixed bg-black opacity-80 h-full w-full z-[100000] inset-0'
            }`}
          ></div>
        </>
      )}
      {mode === 'mobile' && (
        <>
          <div
            className={`fixed inset-0 overflow-auto w-full  bg-white  z-[3333] h-screen transition-transform ease-in-out duration-500 ${
              navOpen ? '' : 'transform translate-x-[1111px] '
            }`}
          >
            <div className='absolute right-5 top-5'>
              <FaXmark
                className='cursor-pointer'
                onClick={() => setNavOpen(false)}
              />
            </div>

            <NavigationItems setNavOpen={setNavOpen} mode='mobile' />
          </div>
          <div
            onClick={() => setNavOpen(false)}
            className={`${
              navOpen &&
              'fixed bg-black opacity-50 h-full w-full z-[1000] inset-0'
            }`}
          ></div>
        </>
      )}
    </>
  )
}

export default Navigation
