import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'
import MobileNavigation from '../components/shared/navigation/MobileNavigation'
import { useState } from 'react'
import Navigation from '../components/shared/navigation/Navigation'
import Wrapper from '../components/Wrapper'

const RootLayout = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [mode, setMode] = useState('desktop')

  if (navOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
  return (
    <Wrapper>
      <Header setNavOpen={setNavOpen} navOpen={navOpen} />
      <Outlet />
      <Footer />
      <MobileNavigation
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        setMode={setMode}
      />
      <Navigation
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        mode={mode}
      />
    </Wrapper>
  )
}
export default RootLayout