import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'

import { houseData } from '../data/houseData'

import Breadcrumb from '../components/shared/BreadCrumb'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
const buttons = ['Near Burj Khalifa', 'Neax Expo Dubai', 'Waterfront', 'Near Golf', 'Beachfront', 'Luxury Living']
const DubaiProjects = () => {

  return (
    <section>
      <MobileFixedHeader link='/' text='Back' icon='back' share />

      <main className='container mx-auto md:pt-16'>
        <Breadcrumb
          link1='/dubai-areas'
          link1Text='Home'
          link2Text='Dubai Projects'
          
        />
        <div>
          <div className='px-4 md:px-0 space-y-2'>
           
              <h1 className='heading md:text-center mt-8'>Dubai Projects</h1>
            
            <div className='md:text-center w-full md:max-w-[900px] mx-auto text-left'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum rem aspernatur ea minus! Id consequuntur dignissimos
                libero consequatur aperiam? Aspernatur.
              </p>
            </div>
          </div>
        </div>
        <div className='mt-4 px-4 md:px-0'>
        <Swiper 
				slidesPerView={'2'}
                spaceBetween={7}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 7,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 7,
              },
              1024: {
                slidesPerView:8,
                spaceBetween: 7,
                }
              
            }}
				className='mySwiper'
			>
				{buttons.map((button, i) => (
					<SwiperSlide key={i}>
						<button
							key={i}
							className='px-4 h-12 w-full rounded-full border border-stone-300 hover:bg-stone-950 hover:text-slate-200 outline-none cursor-pointer flex items-center justify-center'
						>
							{button}
						</button>
					</SwiperSlide>
				))}
			</Swiper>
        </div>

        <div className='md:container md:mx-auto grid grid-cols-1 mt-2 md:grid-cols-4 md:gap-2 gap-4 mt-8 '>
          {houseData.map(house => (
            <div
              key={house.id}
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
                  </div>
                  <div className='text-stone-400 '>
                    <small>Downtown Dubai</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

   
    </section>
  )
}
export default DubaiProjects
