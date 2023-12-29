import { FaXmark } from 'react-icons/fa6'
import NavigationItems from './NavigationItems'

const Navigation = ({ navOpen, setNavOpen, mode }) => {
  console.log(mode)
  return (
    <>
      {mode === 'desktop' && (
        <>
          <div
            className={`fixed shadow-2xl overflow-auto overscroll-contain top-0 right-0 bg-slate-100 opacity-90 w-[250px] z-[3333] h-screen transition-transform ease-in-out duration-500 ${
              navOpen ? '' : 'transform translate-x-[250px] '
            }`}
          >
            <div className='absolute right-5 top-5'>
              <FaXmark
                className='cursor-pointer'
                onClick={() => setNavOpen(false)}
              />
            </div>

            <NavigationItems setNavOpen={setNavOpen} />
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
