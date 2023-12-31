// import { useState } from 'react'
import Breadcrumb from '../components/shared/BreadCrumb'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { houseData } from '../data/houseData'
import { FaRegCheckCircle } from 'react-icons/fa'
import ProjectForSale from '../components/home/slider/ProjectForSale'
import { images } from '../constants'
import { useState } from 'react'
import CommonModal from '../components/shared/CommonModal'
import RegisterInterest from '../components/RegisterInterest'

const DubaiAreaDetail = () => {
  const [showModal, setShowModal] = useState(false)
  if (showModal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
  return (
    <>
      <MobileFixedHeader icon='back' share text='back' link='/dubai-areas' />
      <main className='lg:pt-20'>
        <div className='h-[700px] hidden md:block relative'>
          <img
            src={images.sell}
            className='h-[700px] w-full object-cover object'
            alt=''
          />
          <div className='absolute inset-0 bg-black opacity-40'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl'>
            DOWN TOWN DUBAI
          </div>
        </div>
        <div className='container mx-auto'>
          <div className='px-4 md:px-0'>
            <div className='md:text-center '>
              <div className='w-full md:max-w-[700px] mx-auto text-left'>
                <div className='-mx-4 md:mx-0 flex justify-between items-center'>
                <Breadcrumb
                  link1='/'
                  link1Text='Home'
                  link2Text='Dubai Areas'
                  link3
                  link2 = '/dubai-areas'
                  link3Text='Down Town Dubai'
                  />
                  <div className='underline'>View Map</div>
                </div>
                <h1 className='heading md:text-center mt-8'>Down Town Dubai</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum rem aspernatur ea minus! Id consequuntur dignissimos
                  libero consequatur aperiam? Aspernatur.
                </p>
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, eaque eius. Tenetur laborum neque sunt eius velit
                  dignissimos dolore, doloremque optio eum repellat? Quae
                  corporis enim, rem sint aut dicta optio, voluptate nobis,
                  nulla eaque unde voluptates voluptatem? unde voluptates
                  voluptatem?
                </p>
                <div className='flex justify-center'>
                  <button className='bg-black text-white w-full md:w-56 py-3 mb-6 mt-4 ' onClick={()=>setShowModal(true)}>
                    Register Interest
                  </button>
                </div>
                <div>
                  <h1 className=' py-2 my-4 heading'>Nearby Locations</h1>
                  <ul className='space-y-2'>
                    <li>
                      <span className='flex gap-2 items-center'>
                        <FaRegCheckCircle />
                        <span className='text-slate-700 font-bold'>
                          5 Minutes
                        </span>
                        to Burj Khalifa Downtown
                      </span>
                    </li>
                    <li>
                      <span className='flex gap-2 items-center'>
                        <FaRegCheckCircle />
                        <span className='text-slate-700 font-bold'>
                          10 Minutes
                        </span>
                        to Palm Jumeirah
                      </span>
                    </li>
                    <li>
                      <span className='flex gap-2 items-center'>
                        <FaRegCheckCircle />
                        <span className='text-slate-700 font-bold'>
                          10 Minutes
                        </span>
                        to Burj Al Arab
                      </span>
                    </li>
                    <li>
                      <span className='flex gap-2 items-center'>
                        <FaRegCheckCircle />
                        <span className='text-slate-700 font-bold'>
                          10 Minutes
                        </span>
                        to DXB Intl Airport
                      </span>
                    </li>
                    <li>
                      <span className='flex gap-2 items-center'>
                        <FaRegCheckCircle />
                        <span className='text-slate-700 font-bold'>
                          30 Minutes
                        </span>
                        to Dubai Marina
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='mt-8 md:text-center'>
                  <h1 className='heading'>Properties in Downtown Dubai</h1>
                  <ProjectForSale />
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <div className='lg:container lg:mx-auto grid grid-cols-1 md:grid-cols-4 xl:grind-cols-4 lg:gap-2 gap-4 md:px-4 xl:px-0'>
              {houseData.map(house => (
                <Link to='/dubai-projects' key={house.id}>
                     <div
                  
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
                      <div className='font-bold'>IGO Society House</div>
                      <div className='text-stone-400'>
                        <small>Downtown Dubai</small>
                      </div>
                    </div>
                  </div>
                </div>
             </Link>
              ))}
            </div>
        <div>
        {showModal && (
          <CommonModal setShowModal={setShowModal}>
            <RegisterInterest value='Downtown Dubai' />
          </CommonModal>
        )}
      </div>
      </main>
    </>
  )
}
export default DubaiAreaDetail
