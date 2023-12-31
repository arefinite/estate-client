import { Link } from "react-router-dom"
import {useLocation} from 'react-router-dom'
const Logo = ({showFilter,setShowFilter}) => {
  const {pathname} = useLocation()
  return (
    <div className="lg:flex-1 text-xl lg:block hidden" onClick={()=>showFilter && setShowFilter(false)}>
      <div className={`lg:flex-1 invisible text-xl ${pathname === '/' ? 'md:invisible' : 'md:visible' }`}>
      <Link to='/'>
      DUBAI OFF-PLAN PROJECTS
      </Link>
     </div>
    </div>
  )
}
export default Logo


