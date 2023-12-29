import Breadcrumb from '../components/shared/BreadCrumb'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import { images } from '../constants'

const Contact = () => {
  return (
    <>
      <MobileFixedHeader icon='back' text='back' link='/' />
      <main className='lg:pt-16'>
        <div className='container mx-auto'>
          <Breadcrumb link1='/' link1Text='Home' link2Text='Contact Us' />
        </div>
        <div className='h-[500px] hidden md:block relative'>
          <img
            src={images.contact}
            className='h-[500px] w-full object-cover object'
            alt=''
          />
          <div className='absolute inset-0 bg-black opacity-40'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl'>
            CONTACT US
          </div>
        </div>
        <div className='md:max-w-[700px] container mx-auto'>
          <div className='px-4 md:px-0 mt-6'>
            <h1 className='md:hidden'>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              doloribus doloremque quaerat exercitationem saepe nihil! Totam
              tempora, commodi veniam amet sed id itaque deleniti minus et nobis
              ad! Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
              cupiditate atque sequi doloremque.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              doloribus doloremque quaerat exercitationem saepe nihil! Totam
              tempora, commodi veniam amet sed id itaque deleniti.
            </p>
            <div className='md:flex md:justify-center'>
              <div className='flex flex-col md:w-1/2 mt-8 '>
                <form
                  onSubmit={e => e.preventDefault()}
                  className='flex flex-col gap-4'
                >
                  <input
                    type='text'
                    placeholder='Full Name'
                    className='p-2 border border-slate-300 w-full outline-none'
                    required
                  />
                  <input
                    type='email'
                    placeholder='Email'
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

                  <textarea
                    name=''
                    id=''
                    cols='30'
                    rows='10'
                    className='p-2 border border-slate-300 w-full outline-none'
                    required
                  ></textarea>

                  <input
                    type='submit'
                    value='Send Message'
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
export default Contact
