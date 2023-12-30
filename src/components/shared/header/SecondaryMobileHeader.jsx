import { FaXmark } from 'react-icons/fa6'
import { IoIosArrowBack, IoIosShareAlt, IoMdDownload } from 'react-icons/io'
import { Link } from 'react-router-dom'

const SecondaryMobileHeader = ({
  link,
  icon,
  text,
  download,
  share,
  name,
  nav = false,
  setNavOpen,
  setShowLightBox,
  setShowFilter
}) => {
  
  return (
    <div
      className={`flex justify-center sticky h-16 top-0 bg-white border-b border-slate-200 md:border-none z-[50] `}
    >
      <div>
        <div className='flex justify-between'>
          <button className='absolute left-4 top-6'>
            {nav ? (
              <div
                className='flex gap-1'
                onClick={() => {
                  setNavOpen && setNavOpen(false)
                }}
              >
                <FaXmark />
              </div>
            ) : (
              <Link to={link}>
                <div className='flex gap-1'>
                    {icon === 'back' ? (
                      <IoIosArrowBack />
                    ) : icon === 'delete' ? (
                        <FaXmark onClick={() => { setShowLightBox && setShowLightBox(false);  setShowFilter && setShowFilter(false)}} />
                  ) : null}

                  <div className='relative  bottom-1'>{text}</div>
                </div>
              </Link>
            )}
          </button>
          <h1 className='p-[17px] md:p-0 heading'>{name}</h1>
          <div className='flex gap-4 items-center absolute right-4 top-4 ml-8 '>
            <span>
              {download && <IoMdDownload style={{ fontSize: '2rem' }} />}
            </span>
            <span>
              {share && <IoIosShareAlt style={{ fontSize: '2rem' }} />}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SecondaryMobileHeader
