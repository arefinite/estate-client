import { Link } from "react-router-dom"

const Copyright = () => {
    return (
        <div className="text-center  py-4 text-stone-500 pb-20 lg:pb-4">
            <div>&copy; {new Date().getFullYear()}. All Rights Reserved.</div>
            <Link to='/privacy-policy'>
            <div className="mt-2 opacity-80">Privacy & Policy</div>
            </Link>
      </div>
    )
  }
  export default Copyright