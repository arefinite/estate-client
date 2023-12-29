import { Link } from "react-router-dom"

const QuickLinks = () => {
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
              <span>Newsletter </span>
              <div className='w-[1px] h-3 mt-[14px] bg-white mx-4'></div>
              <span>Sitemap</span>
              <div className='w-[1px] h-3 mt-[14px] bg-white mx-4'></div>
             <Link to='/contact'> <span>Contact Us</span></Link>
            </div>
          </div>
        </div>
        <div className='space-x-4 text-center border-t pt-4 mt-4 lg:pt-0 lg:mt-0 lg:border-t-0'>
          <span>Currency</span>
          <span>
            <select className='bg-black border  border-white px-2'>
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
