import Breadcrumb from '../components/shared/BreadCrumb'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import { images } from '../constants'

const SellProperty = () => {
  return (
    <>
      <MobileFixedHeader icon='back' text='back' link='/' />
      <main className='lg:pt-16'>
        <div className='container mx-auto'>
          {' '}
          <Breadcrumb
            link1='/'
            link1Text='Home'
            link2Text='Sell Your Property'
          />
        </div>
        <div className='h-[700px] hidden md:block relative'>
          <img
            src={images.sell}
            className='h-[700px] w-full object-cover object'
            alt=''
          />
          <div className='absolute inset-0 bg-black opacity-40'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl'>
            SELL YOUR PROPERTY
          </div>
        </div>
        <div className='container mx-auto md:max-w-[700px]'>
          <div className='px-4 md:px-0 mt-6'>
            <h1 className='md:hidden'>Sell Your Property</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              doloribus doloremque quaerat exercitationem saepe nihil! Totam
              tempora, commodi veniam amet sed id itaque deleniti minus et nobis
              ad! Ab magni necessitatibus corrupti.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              praesentium deserunt! Iure qui repudiandae dolorum, iusto est eos
              rerum dignissimos.
            </p>
            <div className='md:flex md:justify-center'>
              <div className='flex flex-col md:w-1/2  mt-8'>
                <form
                  onSubmit={e => e.preventDefault()}
                  className='flex flex-col gap-4 dev'
                >
                  <input
                    type='text'
                    placeholder='Full Name'
                    className='p-2 border border-slate-300 w-full outline-none'
                    required
                  />
                
                  <div className='border border-slate-300'>
                    <select
                      style={{
                        color: '#666',
                        backgroundColor: '#fff',
                        outline: 'none',
                        border: '0',
                      }}
                    >
                      <option>+971</option>
                      <option>+1</option>
                      <option>+54</option>
                    </select>
                    <input
                      type='number'
                      placeholder='Number'
                      className='p-2 border-none outline-none'
                      required
                    />
                  </div>
                  <input
                    type='email'
                    placeholder='Email'
                    className='p-2 border border-slate-300 w-full outline-none'
                    required
                  />
                  <select className='p-2 pr-4 border border-slate-300 outline-none '>
                    <option value=''>Property For</option>
                    <option value=''>Rent</option>
                    <option value=''>Sell</option>
                    <option value=''>Manage</option>
                  </select>
                  <select className='p-2 pr-4 border border-slate-300 outline-none '>
              <option value=''>Property Type</option>
              <option value=''>Apartment</option>
              <option value=''>Villa</option>
              <option value=''>Townhouse</option>
              <option value=''>Penthouse</option>
            </select>
                  <input
                    type='text'
                    placeholder='Location'
                    className='p-2 border border-slate-300 w-full outline-none'
                    required
                  />
                  <select className='p-2 pr-4 border border-slate-300 outline-none '>
              <option value=''>Bedrooms</option>
              <option value=''>Studio</option>
              <option value=''>1 Bedroom</option>
              <option value=''>2 Bedrooms</option>
              <option value=''>3 Bedrooms</option>
              <option value=''>4 Bedrooms +</option>
            </select>
                  <input
                    type='text'
                    placeholder='Size (Sq.Ft.)'
                    className='p-2 border border-slate-300 w-full outline-none'
                    required
                  />
                  <input
                    type='submit'
                    value='Submit'
                    className='p-2 border border-slate-300 bg-black text-white outline-none cursor-pointer'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default SellProperty
