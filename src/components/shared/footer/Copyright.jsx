import { Link } from "react-router-dom"

const Copyright = () => {
    return (
        <div className="text-center text-xs py-4 text-stone-500 pb-20 lg:pb-4">
            <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
            <Link to='/privacy-policy'>
            <p className="mt-2 opacity-80">Privacy & Policy</p>
            </Link>
      </div>
    )
  }
  export default Copyright