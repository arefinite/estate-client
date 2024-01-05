import Copyright from "./Copyright"
import FooterNavigation from "./FooterNavigation"
import QuickLinks from "./QuickLinks"

const Footer = ({setShowModal}) => {
  return (
      <footer className="w-full bg-black text-white md:px-4 xl:px-0 mt-8">
          <FooterNavigation />
      <QuickLinks setShowModal={ setShowModal} />
          <Copyright/>
    </footer>
  )
}
export default Footer