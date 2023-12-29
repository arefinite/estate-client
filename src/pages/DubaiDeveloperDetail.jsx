import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'

import { houseData } from '../data/houseData'

import RegisterInterest from '../components/RegisterInterest'
import { useState } from 'react'
import CommonModal from '../components/shared/CommonModal'
import Breadcrumb from '../components/shared/BreadCrumb'
import { images } from '../constants'
import ProjectForSale from '../components/home/slider/ProjectForSale'
import { Link } from 'react-router-dom'

const DubaiDeveloperDetail = () => {
  const [showModal, setShowModal] = useState(false)
  if (showModal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
  return (
    <section>
      <MobileFixedHeader link='/' text='Back' icon='back' share />

      <main className='container mx-auto md:pt-16'>
        <Breadcrumb
          link1='/'
          link1Text='Home'
          link2Text='Dubai Developers'
          link2='/dubai-developers'
          link3
          link3Text='Dubai Developer'
        />
        <div>
          <div className='md:text-center mt-6 md:mt-20 px-4 md:px-0 space-y-4'>
            <div className='p-6 md:p-0 flex-1  grid place-content-center md:border-0 border border-slate-300 w-full'>
              <img
                src={images.emaar}
                alt=''
                className='md:w-full h-12 md:mx-auto'
              />
            </div>
            <div className='w-full md:max-w-[900px] mx-auto text-left'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum rem aspernatur ea minus! Id consequuntur dignissimos
                libero consequatur aperiam? Aspernatur.
              </p>
              <p className='mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, eaque eius. Tenetur laborum neque sunt eius velit
                dignissimos dolore, doloremque optio eum repellat? Quae corporis
                enim, rem sint aut dicta optio, voluptate nobis, nulla eaque
                unde voluptates voluptatem? unde voluptates voluptatem?
              </p>
            </div>
            <button
              className='bg-black text-white w-full md:w-56 py-3 '
              onClick={() => setShowModal(true)}
            >
              Register Interest
            </button>
          </div>

          {/* { registerInterest && <div><RegisterInterest/></div>} */}
          <div className='mt-8 px-4 md:px-0'>
          <ProjectForSale />
          </div>
        </div>
        <h1 className='md:text-center heading px-4 md:px-0'>
          Emaar Properties For Sale
        </h1>
        <div className='md:container md:mx-auto grid grid-cols-1 mt-2 md:grid-cols-4 md:gap-2 gap-4 '>
          {houseData.map(house => (
            <Link to='/project-detail' key={house.id}>
              <div className='border-b border-b-slate-200 md:border-0 '>
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
                      <span className='font-bold'>IGO Society House</span>
                    </div>
                    <span className='text-stone-400 '>
                      <small>Downtown Dubai</small>
                    </span>
                    <div className='mt-2'>
                      <small>From</small>{' '}
                      <span className='font-bold'>AED 320,000,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <div className='hidden md:block'>
        {showModal && (
          <CommonModal setShowModal={setShowModal}>
            <RegisterInterest />
          </CommonModal>
        )}
      </div>

    </section>
  )
}
export default DubaiDeveloperDetail
