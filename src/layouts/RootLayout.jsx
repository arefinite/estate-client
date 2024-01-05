import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'
import MobileNavigation from '../components/shared/navigation/MobileNavigation'
import { useEffect, useState } from 'react'
import Navigation from '../components/shared/navigation/Navigation'
import Wrapper from '../components/Wrapper'
import {useLocation} from 'react-router-dom'
import CommonModal from '../components/shared/CommonModal'
import Subscribe from '../components/Subscribe'
const RootLayout = () => {
  const {pathname} = useLocation()
  const [navOpen, setNavOpen] = useState(false)
  const [mode, setMode] = useState('desktop')
  const [showFilter, setShowFilter] = useState(false)
  const [showModal,setShowModal] = useState(false)

  if (navOpen || showModal) {
    document.body.style.scroll = 'disable'
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  function useImperativeDisableScroll({ element, disabled }) {
    useEffect(() => {
        if (!element) {
            return
        }

        element.style.overflowY = disabled ? 'hidden' : 'scroll'

        return () => {
            element.style.overflowY = 'scroll'
        }
    }, [disabled,element])
}
useImperativeDisableScroll({ element: document.body, disabled: showModal })

  console.log(showModal);
  return (
    <Wrapper>
      <Header
        setNavOpen={setNavOpen}
        navOpen={navOpen}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
      />

      <Outlet />
      {pathname !== '/search' && <Footer showModal={showModal} setShowModal={setShowModal} />}
    {pathname !== '/search' &&   <MobileNavigation
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        setMode={setMode}
        setShowFilter={setShowFilter}
      />}
      <Navigation navOpen={navOpen} setNavOpen={setNavOpen} mode={mode} />
      {showModal && (
        <CommonModal setShowModal={setShowModal}>
          <Subscribe value='' setShowModal={setShowModal} />
        </CommonModal>
      )}
    </Wrapper>
  )
}
export default RootLayout
