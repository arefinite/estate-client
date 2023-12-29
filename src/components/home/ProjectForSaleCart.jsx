import { houseData } from '../../data/houseData'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'

const ProjectForSaleCart = () => {
  return (
    <div className='lg:container lg:mx-auto grid grid-cols-1 md:grid-cols-3 xl:grind-cols-4 lg:gap-2 gap-4 md:px-4 xl:px-0'>
      {houseData.map(house => (
        <div
          key={house.id}
          className='border-b border-b-slate-200 lg:border-0 '
        >
          <div className='pb-4'>
            <Swiper
              pagination={true}
              style={{ '--swiper-pagination-color': '#000' }}
              modules={[Pagination]}
              className='mySwiper'
            >
              {houseData.reverse().map((h, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={h.url}
                    alt={h.id}
                    className='h-80 object-cover w-full '
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className='mt-2 px-4 lg:px-0 '>
              <Link to='project-detail'><p className='font-bold'>IGO Society House</p></Link>
              <p className='text-stone-400'>
                <small>Downtown Dubai</small>
              </p>
              <p className='mt-2'>
                <small>From</small>{' '}
                <span className='font-bold'>AED 320,000,000</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ProjectForSaleCart
