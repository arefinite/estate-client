import DubaiSection from '../components/home/DubaiSection'
import Breadcrumb from '../components/shared/BreadCrumb'

import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import SearchBox from '../components/SearchBox'
import { houseData } from '../data/houseData'
import { Link } from 'react-router-dom'

const DubaiAreas = () => {
  return (
    <section>
      <MobileFixedHeader link='/' text='Back' icon='back' share />
      <main className='container mx-auto lg:pt-16'>
        <Breadcrumb link1='/' link1Text='Home' link2Text='Dubai Areas' />
        <DubaiSection title='Dubai Areas' >
        <div className='max-w-96 mx-auto px-4 md:px-0'>
          <SearchBox placeholder='Search Areas...' />
          </div>
          </DubaiSection>
        <div className='md:container md:mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-2 gap-4 '>
          {houseData.map(house => (
            <Link to='/dubai-area-detail' key={house.id}>
                <div
              
              className='border-b border-b-slate-200 md:border-0 '
            >
              <div className='pb-4'>
                <div>
                  <img
                    src={house.url}
                    alt={house.id}
                    className='h-80 object-cover w-full '
                  />
                </div>
                <div className='mt-2 px-4 md:px-2  '>
                  <div className='flex justify-between'>
                    <div className='font-bold'>IGO Society House</div>
                    <div className='text-stone-400 underline'><small>View Map</small></div>
                  </div>
                  <div className='text-stone-400 underline'>
                    <small>450 Properties</small>
                  </div>
                 <button className='bg-black text-white w-full py-3 mt-4 md:hidden'>Explore More</button>
                </div>
              </div>
            </div>
          </Link>
          ))}
        </div>
      </main>

    </section>
  )
}
export default DubaiAreas