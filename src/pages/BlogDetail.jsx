
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

import Breadcrumb from '../components/shared/BreadCrumb'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import { images } from '../constants'
import { houseData } from '../data/houseData'

const BlogDetail = () => {
  return (
    <>
          <MobileFixedHeader icon='back' share text='back' link='/'/>
     <main className='lg:pt-20'>
      <div className='h-96 hidden md:block'>
        <img
          src={images.sell}
          className='h-96 w-full object-cover object-bottom'
          alt=''
        />
      </div>
      <div className='container mx-auto'>
        <Breadcrumb link1='/' link1Text='Home' link2Text='Latest Blogs' link2='/blogs' link3Text='Blog' link3 />
        <div className='px-4 md:px-0'>
            <h1 className='heading'>Ultra-Luxury Waterfront Residences Direct Burj Khalifa Views</h1>
            <p>11 June, 2023</p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          doloribus doloremque quaerat exercitationem saepe nihil! Totam
          tempora, commodi veniam amet sed id itaque deleniti minus et nobis ad!
          Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
          cupiditate atque sequi doloremque.
          </p>
          <p className='mt-8'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          doloribus doloremque quaerat exercitationem saepe nihil! Totam
          tempora, commodi veniam amet sed id itaque deleniti minus et nobis ad!
          Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
            cupiditate atque sequi doloremque.</p>
          <p >  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          doloribus doloremque quaerat exercitationem saepe nihil! Totam
          tempora, commodi veniam amet sed id itaque deleniti minus et nobis ad!
          Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
            cupiditate atque sequi doloremque.</p>
          <p className='mt-8'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          doloribus doloremque quaerat exercitationem saepe nihil! Totam
          tempora, commodi veniam amet sed id itaque deleniti minus et nobis ad!
          Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
            cupiditate atque sequi doloremque.</p>
          <p className='mt-8'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          doloribus doloremque quaerat exercitationem saepe nihil! Totam
          tempora, commodi veniam amet sed id itaque deleniti minus et nobis ad!
          Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
          cupiditate atque sequi doloremque.</p>
          </div>
          <div className='mt-8'>
            <h1 className='heading px-4 md:px-0'>Similar Post</h1>
            <div className="lg:container lg:mx-auto grid grid-cols-1 md:grid-cols-4 xl:grind-cols-4 lg:gap-2 gap-4 md:px-4 xl:px-0">
          {
              houseData.slice(0,4).map(house => (
                  <div key={house.id} className="border-b border-b-slate-200 lg:border-0 ">
                       <div className="pb-4">
              <Swiper
                pagination={true}
                style={{ '--swiper-pagination-color': '#000' }}
                modules={[Pagination]}
                className='mySwiper'
              >
                {houseData.reverse().map((h,i) => (
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
                    <p className='font-bold'>Ultra-Luxury Waterfront Residences Direct Burj Khalifa Views
</p>
                            
                  </div>
            </div>
               </div>
              ))
          }
    </div>
          </div>
        </div>
        
    </main></>
  )
}
export default BlogDetail
