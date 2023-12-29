import { Link } from "react-router-dom"

const Breadcrumb = ({link1,link1Text, link2, link2Text, link3, link3Text}) => {
  return (
      <div className="px-4 md:px-0 text-xs my-8">
          <Link to={link1 ? link1 : '/'}> {link1Text} / </Link>
          <Link to={link2}> {link2Text}  </Link> 
          {
              link3 && (<>
              / <Link to={link3}> {link3Text}</Link>
              </>)
          }
    </div>
  )
}
export default Breadcrumb