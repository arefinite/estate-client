import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="w-screen h-screen justify-center flex flex-col items-center">
      <div className="heading" >404 | Not Found</div>
      <div>
        <Link to='/'>
        <button className='bg-black text-white w-full md:w-56 py-3 mt-8 px-4 '>
            Back Home
            </button>
    </Link>
      </div>
    </div>
  )
}
export default NotFound