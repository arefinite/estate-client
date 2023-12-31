import { useEffect, useState } from 'react'
import Logo from './Logo'
import Navs from './Navs'
import Search from './Search'
import { useLocation } from 'react-router-dom'

const Header = ({ setNavOpen, navOpen, showFilter, setShowFilter }) => {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])
  return (
    <div className='z-40'>
      <div
        className={`w-full z-[99999] fixed  py-2  md:py-4 bg-white ${
          !scrolled && pathname === '/'
            ? 'lg:bg-transparent '
            : 'lg:bg-white border-b border-stone-200 shadow-sm'
        } lg:px-4 xl:px-0 `}
      >
        <header className='lg:container lg:mx-auto relative z-[99999]'>
          <section
            className={`lg:container lg:mx-auto lg:flex  lg:justify-between items-center relative z-[99999]`}
          >
            <Logo showFilter={showFilter} setShowFilter={setShowFilter} />
            <Search setShowFilter={setShowFilter} showFilter={showFilter} />
            <Navs
              showFilter={showFilter}
              setShowFilter={setShowFilter}
              scrolled={scrolled}
              setNavOpen={setNavOpen}
              navOpen={navOpen}
            />
          </section>
        </header>
      </div>
      {showFilter && (
        <div
          onClick={() => setShowFilter(false)}
          className={`${
            showFilter &&
            'fixed bg-black opacity-80 h-full z-50 w-full inset-0 '
          }`}
        ></div>
      )}
    </div>
  )
}
export default Header
