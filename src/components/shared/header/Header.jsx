import { useEffect, useState } from 'react'
import Logo from './Logo'
import Navs from './Navs'
import Search from './Search'

const Header = ({ setNavOpen, navOpen,showFilter,setShowFilter }) => {
  const [scrolled, setScrolled] = useState(false)

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
    <div
      className={`w-full z-30 fixed  py-2  md:py-4 bg-white ${
        scrolled
          ? 'lg:bg-white border-b border-stone-200 shadow-lg'
          : 'lg:bg-transparent'
      } lg:px-4 xl:px-0 `}
    >
      <header className='lg:container lg:mx-auto relative z-20 '>
        <section
          className={`lg:container lg:mx-auto lg:flex  lg:justify-between items-center`}
        >
          <Logo />
          <Search setShowFilter={setShowFilter} showFilter={showFilter} />
          <Navs scrolled={scrolled} setNavOpen={setNavOpen} navOpen={navOpen} />
        </section>
      </header>
    </div>
  )
}
export default Header
