import { Swiper, SwiperSlide } from 'swiper/react'

import { FaRegCheckCircle } from 'react-icons/fa'

import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import RegisterInt from '../components/RegisterInt'
import LatestProjectSlider from '../components/home/slider/LatestProjectSlider'
import { houseData } from '../data/houseData'
import { images } from '../constants'
import Breadcrumb from '../components/shared/BreadCrumb'
import CommonModal from '../components/shared/CommonModal'
import RegisterInterest from '../components/RegisterInterest'
import LightBox from '../components/Lightbox'
import LightBoxMobile from '../components/LightBoxMobile'


const buttons = [
  'Studio',
  '1 Kitchen',
  '3 Balcony',
  '1 Living',
  '2 Bedroom',
  '1 Dining',
]

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [showModal, setShowModal] = useState(false)
  const [showLightBox, setShowLightBox] = useState(false)
  if (showModal || showLightBox) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
  console.log(showLightBox);

  return (
    <div>
      <MobileFixedHeader link='/' icon='back' text='Back' download share />
      <div className='relative h-[500px]'>
        <div className='lg:pt-20'>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            style={{ '--swiper-pagination-color': '#000' }}
            className='mySwiper'
          >
            {houseData.map(house => (
              <SwiperSlide key={house.id}>
                <Link>
                  <img
                    className='w-full h-[500px] object-cover '
                    src={house.url}
                    alt=''
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='text-center absolute z-[9] top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-white text-transparent  md:text-6xl'>
          <p>VELA DORCHESTER </p>
          <p>COLLECTION</p>
        </div>
      </div>

      <div className='container md:mt-24 px-4 md:px-0 mx-auto md:max-w-[700px]'>
        <div className='-mx-4 md:-mx-0'>
          <div className='px-4 md:px-0'>
          <div
            onClick={() => setShowLightBox(true)}
            className='relative bottom-16 z-20 text-white bg-slate-900 max-w-32 text-center rounded-2xl opacity-80  py-2 cursor-pointer text-xs'
          >
            Show All Photos
          </div>
         </div>
          <Breadcrumb link1='/' link1Text='Home' link2Text='Project Details' />
        </div>
        <h1 className='heading'>
          Bugatti Branded Ultra-Luxury Residences in Business Bay
        </h1>
        <div className='flex justify-between pb-4 pt-2 font-bold text-sm'>
          <span>Business Bay</span>
          <span className='text-stone-400 underline'>View Map</span>
        </div>

        <div className='md:flex justify-between mt-4 hidden items-center'>
          <div className='space-y-2'>
            <div>Price From AED 390,000,000</div>
            <div>Handover Q4,2026</div>
          </div>
          <div>
            <button
              className='bg-black text-white w-full md:w-56 py-3 '
              onClick={() => setShowModal(true)}
            >
              Register Interest
            </button>
          </div>
        </div>

        <div className='py-4 space-y-2'>
          <div>Bedrooms: Studio 1,2 & 3</div>
          <div>Project Type: Apartments</div>
        </div>
        <div>
          <h1 className='heading text-justify mt-4'>Project Details</h1>
          <p className='text-justify'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            unde eius voluptas quisquam iste nemo quos suscipit tempore quaerat
            placeat! So y lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Incidunt, unde eius voluptas quisquam iste nemo quos suscipit
            tempore quaerat placeat! So y ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt, unde eius voluptas
          </p>
          <p className='text-justify'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            unde eius voluptas quisquam iste nemo quos suscipit tempore quaerat
            placeat! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt, unde eius voluptas quisquam iste nemo quos suscipit
            tempore quaerat placeat!
          </p>
        </div>
        <hr className='my-4' />
        <div>
          <h1 className='heading py-2 mt-2'>Amenities</h1>
          <div className='md: gap-4  grid grid-cols-1 md:grid-cols-3'>
            <div>Swimming Pool</div>
            <div>Concierge Service</div>
            <div>Gymnasium</div>
            <div>High-Speed Internet</div>
            <div>Jacuzzi</div>
            <div>Kids Club</div>
            <div>Meeting Room</div>
            <div>Restaurant</div>
            <div>Video Security</div>
          </div>
          <Link to='/amenities'>
            <span className='underline block pt-4'>See All Amenities</span>
          </Link>
        </div>
        <hr className='my-4' />
        <h1 className='heading py-2 mt-2'>Floor Plan:</h1>
        <div className='my-4'>
          <Swiper
            slidesPerView={'3'}
            spaceBetween={6}
            modules={[Pagination]}
            className='mySwiper'
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
                slidesPerView: 4,
                spaceBetween: 7,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 7,
              },
            }}
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
        <div className='flex justify-center'>
          <img src={images.floor} alt='' />
        </div>

        <hr className='my-4 ' />
        <h1 className='heading py-2 mt-2'>Payment Plan</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-4 py-4'>
          <div className='border p-4'>
            <span className='font-bold text-2xl pl-8 pr-2'>10%</span>
            <span>Booking</span>
          </div>
          <div className='border p-4'>
            <span className='font-bold text-2xl pl-8 pr-2'>40%</span>
            <span>On Construction</span>
          </div>

          <div className='border p-4'>
            <span className='font-bold text-2xl pl-8 pr-2'>50%</span>
            <span>Handover in Q4 2025</span>
          </div>
        </div>
        <Link to=''>
          <div className='text-center'>
            <button className='w-full md:max-w-[300px]  bg-black text-white p-3 mt-4'>
              Request More Information
            </button>
          </div>
        </Link>
        <div>
          <h1 className='heading py-4 mt-8 '>Nearby Locations</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <span className='flex gap-2 items-center'>
                <FaRegCheckCircle />
                <span className=' font-bold'>5 Minutes</span>to Burj Khalifa
                Downtown
              </span>
            </div>
            <div>
              <span className='flex gap-2 items-center'>
                <FaRegCheckCircle />
                <span className=' font-bold'>10 Minutes</span>to Palm Jumeirah
              </span>
            </div>
            <div>
              <span className='flex gap-2 items-center'>
                <FaRegCheckCircle />
                <span className=' font-bold'>10 Minutes</span> to Burj Al Arab
              </span>
            </div>
            <div>
              <span className='flex gap-2 items-center'>
                <FaRegCheckCircle />
                <span className='font-bold'>10 Minutes</span>to DXB Intl Airport
              </span>
            </div>
            <div>
              <span className='flex gap-2 items-center'>
                <FaRegCheckCircle />
                <span className='font-bold'>15 Minutes</span>to Dubai Atlas
              </span>
            </div>
            <div>
              <span className='flex gap-2 items-center'>
                <FaRegCheckCircle />
                <span className=' font-bold'>30 Minutes</span> to Dubai Marina
              </span>
            </div>
          </div>
        </div>
        <hr className='my-4' />
        <div>
          <div>
            <h1 className='heading py-2 my-4'>About Location Business Bay</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <div className='-mx-4 md:-mx-0'>
                  <img
                    src='./images/img1.jpg'
                    className='h-64 w-full object-cover'
                    alt=''
                  />
                </div>
              </div>
              <div>
                {' '}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem minima, vel fuga alias deserunt voluptates voluptatum
                  laboriosam fugit odit blanditiis?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem minima, vel fuga alias deserunt voluptates voluptatum
                  laboriosam fugit odit blanditiis?
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-4' />
        <div>
          <h1 className=' py-2 my-4 heading'>Developed By Omniyat</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In odio
            debitis iure enim at laboriosam maxime ipsum adipisci dignissimos
            voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. In odio debitis iure enim at laboriosam maxime ipsum adipisci
            dignissimos voluptatem?
          </p>
          <div className='flex justify-center'>
            <img
              src={images.omniyat}
              className='my-12 h-20 w-full object-contain'
              alt=''
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className=' py-2 my-4 heading container mx-auto px-4 md:px-0 md:text-center'>
          Similar Properties
        </h1>
        <div className='container mx-auto'>
          <LatestProjectSlider />
        </div>
      </div>

      <RegisterInt setShowModal={setShowModal} />
      {showModal && (
        <CommonModal setShowModal={setShowModal}>
          <RegisterInterest value='Vela Dorchester Collection' />
        </CommonModal>
      )}
      {
        showLightBox && (
          <>
          <div className='hidden md:block'>
             <CommonModal setShowLightBox={setShowLightBox}>
            <LightBox/>
          </CommonModal>
          </div>
          <div className='md:hidden'>
              <LightBoxMobile setShowLightBox={setShowLightBox} />
            </div>
          </>
        )
      }
    </div>
  )
}

export default ProjectDetails
