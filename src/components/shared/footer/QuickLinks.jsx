import { Link,useLocation } from "react-router-dom"
const QuickLinks = ({ setShowModal }) => {
  const { pathname } = useLocation()
  return (
    <section className='lg:container lg:mx-auto border-b lg:border-t mt-4 lg:mt-8 py-4 border-b-white border-t-white'>
      <div className='lg:flex lg:justify-between lg:items-center'>
        <div>
          <div className='flex-row md:flex leading-10  lg:px-0 px-4 '>
            <div className='flex'>
              <Link to='/about'><span>About </span></Link>
              <div className='w-[1px] h-3 mt-[14px] bg-white mx-4'></div>
              <Link to='/blogs'><span>Latest Blogs </span></Link>
              <div className='w-[1px] h-3 mt-[14px] bg-white mx-4'></div>
            </div>

            <div className='flex'>
              { pathname !== '/project-detail' &&  <span className="cursor-pointer" onClick={()=>setShowModal(true)}>Newsletter </span>}
              <div className='w-[1px] h-3 mt-[14px] bg-white mx-4'></div>
              <span className="cursor-pointer">Sitemap</span>
              <div className='w-[1px] h-3 mt-[14px] bg-white mx-4'></div>
             <Link to='/contact'> <span>Contact Us</span></Link>
            </div>
          </div>
        </div>
        <div className='space-x-4 text-center border-t pt-4 mt-4 lg:pt-0 lg:mt-0 lg:border-t-0'>
          <span>Currency</span>
          <span>
            <select className='bg-black border-0 px-2 cursor-pointer'>
              <option value='AED'>AED</option>
              <option value='USD'>USD</option>
            </select>
          </span>
        </div>
      </div>
    </section>
  )
}
export default QuickLinks
