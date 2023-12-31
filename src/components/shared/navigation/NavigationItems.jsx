import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

import { NavLink } from 'react-router-dom'
import SecondaryMobileHeader from '../header/SecondaryMobileHeader'
const NavigationItems = ({ setNavOpen, mode }) => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  return (
    <nav>
      {mode === 'mobile' && (
        <SecondaryMobileHeader
          link='/'
          icon='delete'
          name='Menu'
          nav
          setNavOpen={setNavOpen}
        />
      )}

      <div className=''>
        <div className='mt-6 px-4 py-2 navigation'>
          <NavLink to='/latest-projects' onClick={() => setNavOpen(false)}>
            {' '}
            <span>Latest Projects</span>
          </NavLink>
        </div>

        <div className='px-4 py-2 navigation'>
          <NavLink to='/luxury-projects' onClick={() => setNavOpen(false)}>
            {' '}
            <span>Luxury Projects</span>
          </NavLink>
        </div>

        <div
          className='px-4 py-2 '
          onClick={() => {
            setShow1(prev => !prev)
            // setShow2(false)
            // setShow3(false)
          }}
        >
          <span className='flex items-center gap-2'>
            Dubai Projects For Sale{' '}
            {show1 ? (
              <IoIosArrowUp style={{ color: '#808080' }} />
            ) : (
              <IoIosArrowDown style={{ color: '#808080' }} />
            )}
          </span>
        </div>
        {show1 && (
          <div className='dropdown '>
            <ul className=' leading-10'>
              <NavLink to='/apartments' onClick={() => setNavOpen(false)}>
                <li className='px-4 navigation'>Apartments</li>
              </NavLink>

              <NavLink to='/villa' onClick={() => setNavOpen(false)}>
                <li className='px-4 navigation'>Vila</li>
              </NavLink>

              <NavLink to='/penthouse' onClick={() => setNavOpen(false)}>
                <li className='px-4 navigation'>Penthouse</li>
              </NavLink>

              <NavLink to='/townhouse' onClick={() => setNavOpen(false)}>
                <li className='px-4 navigation'>Townhouse</li>
              </NavLink>

              <NavLink to='/land' onClick={() => setNavOpen(false)}>
                <li className='px-4 navigation'>Land Plots</li>
              </NavLink>
            </ul>
          </div>
        )}
        <div
          className='px-4 py-2'
          onClick={() => {
            setShow2(prev => !prev)
            // setShow1(false)
            // setShow3(false)
          }}
        >
          <span className='flex items-center gap-2'>
            Dubai Areas{' '}
            {show2 ? (
              <IoIosArrowUp style={{ color: '#808080' }} />
            ) : (
              <IoIosArrowDown style={{ color: '#808080' }} />
            )}
          </span>
        </div>
        {show2 && (
          <div className='dropdown'>
            <ul className=' leading-10'>
              <NavLink
                to='/dubai-area-detail'
                onClick={() => setNavOpen(false)}
              >
                {' '}
                <li className='px-4 navigation'>Palm Jumeirah</li>
              </NavLink>

              <NavLink
                to='/dubai-area-detail'
                onClick={() => setNavOpen(false)}
              >
                {' '}
                <li className='px-4 navigation'>Downtown Dubai</li>
              </NavLink>

              <NavLink
                to='/dubai-area-detail'
                onClick={() => setNavOpen(false)}
              >
                {' '}
                <li className='px-4 navigation'>Dubai Hills Estate</li>
              </NavLink>

              <NavLink
                to='/dubai-area-detail'
                onClick={() => setNavOpen(false)}
              >
                {' '}
                <li className='px-4 navigation'>Dubai Creek Harbour</li>
              </NavLink>

              <NavLink
                to='/dubai-area-detail'
                onClick={() => setNavOpen(false)}
              >
                {' '}
                <li className='px-4 navigation'>Business Bay</li>
              </NavLink>

              <li className='px-4 navigation'>
                <NavLink to='/dubai-areas' onClick={() => setNavOpen(false)}>
                  View All
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        <div
          className='px-4 py-2'
          onClick={() => {
            setShow3(prev => !prev)
            // setShow1(false)
            // setShow2(false)
          }}
        >
          <span className='flex items-center gap-2'>
            Explore{' '}
            {show3 ? (
              <IoIosArrowUp style={{ color: '#808080' }} />
            ) : (
              <IoIosArrowDown style={{ color: '#808080' }} />
            )}
          </span>
        </div>
        {show3 && (
          <div className='dropdown'>
            <ul className=' leading-10'>
              <NavLink to='explore/why-dubai' onClick={() => setNavOpen(false)}>
                <li className='px-4 navigation'>Why Dubai</li>
              </NavLink>
              <NavLink
                to='explore/invest-in-dubai-real-estate'
                onClick={() => setNavOpen(false)}
              >
                <li className='px-4 navigation'>Invest in Dubai Real Estate</li>
              </NavLink>
              <NavLink
                to='explore/dubai-fact-numbers'
                onClick={() => setNavOpen(false)}
              >
                <li className='px-4 navigation'>Dubai Fact Numbers</li>
              </NavLink>
              <NavLink
                to='explore/guide-to-off-plan'
                onClick={() => setNavOpen(false)}
              >
                <li className='px-4 navigation'>Guide To Off Plan</li>
              </NavLink>
              <NavLink
                to='explore/why-invest-in-off-plan'
                onClick={() => setNavOpen(false)}
              >
                <li className='px-4 navigation'>Why Invest In Off Plan</li>
              </NavLink>
              <NavLink
                to='explore/guide-on-renting'
                onClick={() => setNavOpen(false)}
              >
                <li className='px-4 navigation'>Guide on Renting</li>
              </NavLink>
              <NavLink
                to='explore/guide-on-selling'
                onClick={() => setNavOpen(false)}
              >
                <li className='px-4 navigation'>Guide to Selling</li>
              </NavLink>
            </ul>
          </div>
        )}

        <div className='px-4 py-2 navigation'>
          <span className='flex items-center gap-2'>
            <NavLink to='/dubai-developers' onClick={() => setNavOpen(false)}>
              Dubai Developers
            </NavLink>
          </span>
        </div>

        <div className='px-4 py-2 navigation'>
          <NavLink to='/blogs' onClick={() => setNavOpen(false)}>
            <span className='flex items-center gap-2'>Blogs</span>
          </NavLink>
        </div>

        <div className='px-4 py-2 navigation'>
          <NavLink to='/sell-your-property' onClick={() => setNavOpen(false)}>
            <span className='flex items-center gap-2'>Sell Your Property</span>
          </NavLink>
        </div>

        <div className='px-4 py-2 navigation'>
          <NavLink to='/about' onClick={() => setNavOpen(false)}>
            <span className='flex items-center gap-2'>About Us</span>
          </NavLink>
        </div>
        <div className='px-4 py-2 navigation'>
          <NavLink to='/contact' onClick={() => setNavOpen(false)}>
            <span className='flex items-center gap-2'>Contact Us</span>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavigationItems
