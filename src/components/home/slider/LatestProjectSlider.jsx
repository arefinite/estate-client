import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'


import { Pagination } from 'swiper/modules'
import { houseData } from '../../../data/houseData'
import { Link } from 'react-router-dom'

const LatestProjectSlider = () => {
  return (
    <div className='border-b border-b-slate-200 md:border-0 md:px-4 xl:px-0'>
      <Swiper
        style={{ '--swiper-pagination-color': '#000' }}
        slidesPerView={1}
        spaceBetween={7}
        pagination={{
          clickable: true,
        }}
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
            slidesPerView: 3,
            spaceBetween: 7,
            },
          1280: {
            slidesPerView: 4,
            spaceBetween: 7,
          }
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {houseData.map(house => (
          <SwiperSlide key={house.id}>
            <Link to='/project-detail'>
            <div className='h-[26rem]'>
              <div>
                <img
                  src={house.url}
                  alt={house.id}
                  className='h-80 object-cover w-full '
                />
              </div>
              <div className='mt-2 px-4 md:px-0 '>
                <p className='font-bold'>IGO Society House</p>
                <p className='text-stone-400'>
                  <small>Downtown Dubai</small>
                </p>
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default LatestProjectSlider
