import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

import Breadcrumb from '../components/shared/BreadCrumb'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import { images } from '../constants'
import { houseData } from '../data/houseData'
import { Link } from 'react-router-dom'

const BlogDetail = () => {
  return (
    <>
      <MobileFixedHeader icon='back' share text='back' link='/' />
      <main className='lg:pt-16'>
        <div className='container mx-auto'>
          <Breadcrumb
            link1='/'
            link1Text='Home'
            link2Text='Blogs'
            link2='/blogs'
            link3
            link3Text='Blog Detail'
          />
        </div>
        <div className='h-[700px] hidden md:block relative'>
          <img
            src={images.sell}
            className='h-[700px] w-full object-cover'
            alt=''
          />
        </div>
        <div className='container mx-auto m-6 max-w-[700px]'>
          <div className='px-4 md:px-0'>
            <h1 className='heading'>
              Ultra-Luxury Waterfront Residences Direct Burj Khalifa Views
            </h1>
            <span className='text-xs'>11 June, 2023</span>
            <hr className='my-4' />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              doloribus doloremque quaerat exercitationem saepe nihil! Totam
              tempora, commodi veniam amet sed id itaque deleniti minus et nobis
              ad! Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
              cupiditate atque sequi doloremque.
            </p>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              doloribus doloremque quaerat exercitationem saepe nihil! Totam
              tempora, commodi veniam amet sed id itaque deleniti minus et nobis
              ad! Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
              cupiditate atque sequi doloremque.
            </p>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              doloribus doloremque quaerat exercitationem saepe nihil! Totam
              tempora, commodi veniam amet sed id itaque deleniti minus et nobis
              ad! Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
              cupiditate atque sequi doloremque.
            </p>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              doloribus doloremque quaerat exercitationem saepe nihil! Totam
              tempora, commodi veniam amet sed id itaque deleniti minus et nobis
              ad! Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
              cupiditate atque sequi doloremque.
            </p>
            <p className='mt-8'>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              doloribus doloremque quaerat exercitationem saepe nihil! Totam
              tempora, commodi veniam amet sed id itaque deleniti minus et nobis
              ad! Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
              cupiditate atque sequi doloremque.
            </p>
          </div>
          <div className='mt-8'>
            <h1 className='heading px-4 md:px-0 md:text-center'>
              Similar Post
            </h1>
          </div>
        </div>
        <div className='container mx-auto'>
          <div className='border-b border-b-slate-200 md:border-0 md:px-4 xl:px-0'>
            <Swiper
              style={{ '--swiper-pagination-color': '#000' }}
              slidesPerView={1}
              spaceBetween={7}
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
                },
              }}
              modules={[Pagination]}
              className='mySwiper'
            >
              {houseData.map(house => (
                <SwiperSlide key={house.id}>
                  <Link to='/dubai-area-detail'>
                    <div className='h-[30rem]'>
                      <div>
                        <img
                          src={house.url}
                          alt={house.id}
                          className='aspect-square object-cover '
                        />
                      </div>
                      <div className='mt-2 px-4 md:px-0 '>
                        <span className='font-bold'>{house.title}</span>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </main>
    </>
  )
}
export default BlogDetail
