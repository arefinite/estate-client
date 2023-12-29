
import { Link } from 'react-router-dom'
import { images } from '../constants'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import Breadcrumb from '../components/shared/BreadCrumb'
import DubaiSection from '../components/home/DubaiSection'
import SearchBox from '../components/SearchBox'

const DubaiDevelopers = () => {
  return (
    <section>
      <MobileFixedHeader link='/' text='Back' icon='back' share />

      <main className='container mx-auto lg:pt-16'>
        <Breadcrumb link1='/' link1Text='Home' link2Text='Dubai Developers' />
        <DubaiSection title='Dubai Developers' >
        <div className='max-w-96 mx-auto px-4 md:px-0'>
          <SearchBox placeholder='Search Developers' />
          </div>
          </DubaiSection>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 px-4 md:px-0'>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:md:h-32 h-24 flex justify-center items-center'>
              <img src={images.omniyat} alt='' className='md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.emaar} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.damac} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.meraas} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.omniyat} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.emaar} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.damac} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.meraas} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.omniyat} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.emaar} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.damac} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.meraas} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.omniyat} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.emaar} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.damac} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.meraas} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.omniyat} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.emaar} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.damac} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
          <Link to='/dubai-developer-detail'>
            <div className='border p-4 md:h-32 h-24 flex justify-center items-center'>
              <img src={images.meraas} alt='' className=' md:w-2/3 w-full' />
            </div>
          </Link>
        </div>
      </main>
    </section>
  )
}
export default DubaiDevelopers