import { Link } from 'react-router-dom'
import Breadcrumb from '../components/shared/BreadCrumb'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import { images } from '../constants'

const Blogs = () => {
  return (
    <>
      <MobileFixedHeader icon='back' share text='back' link='/' />
      <main className='lg:pt-16'>
        <div className='container mx-auto'>
          <Breadcrumb link1='/' link1Text='Home' link2Text='Latest Blogs' />
        </div>
        <div className='h-[500px] hidden md:block relative'>
          <img
            src={images.blogs}
            className='h-[500px] w-full object-cover object'
            alt=''
          />
          <div className='absolute inset-0 bg-black opacity-40'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl'>
            LATEST BLOGS
          </div>
        </div>
        <div className='container mx-auto md:max-w-[700px]'>
          <div className='px-4 md:px-0 mt-6'>
            <h1 className='md:hidden'>Latest Blog</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              doloribus doloremque quaerat exercitationem saepe nihil! Totam
              tempora, commodi veniam amet sed id itaque deleniti minus et nobis
              ad! Ab magni necessitatibus corruptio.
            </p>
            <div className='flex flex-col gap-6 mt-8'>
              <Link to='/blog-details'>
                <div className='flex h-48 items-center gap-2 boxShadow'>
                  <div>
                    <img
                      src='./images/img1.jpg'
                      alt=''
                      className=' h-48 object-cover'
                    />
                  </div>
                  <div className=' flex flex-col justify-center'>
                    <h1>
                      Lorem ipsum dolor sit, amet consectetur 
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur 
                    </p>
                    <p>Read More</p>
                  </div>
                
                </div>
              </Link>
              <Link to='/blog-details'>
                <div className='flex h-48 items-center gap-2 boxShadow'>
                  <div>
                    <img
                      src='./images/img1.jpg'
                      alt=''
                      className=' h-48 object-cover'
                    />
                  </div>
                  <div className=' flex flex-col justify-center'>
                    <h1>
                      Lorem ipsum dolor sit, amet consectetur 
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur 
                    </p>
                    <p>Read More</p>
                  </div>
                
                </div>
              </Link>
              <Link to='/blog-details'>
                <div className='flex h-48 items-center gap-2 boxShadow'>
                  <div>
                    <img
                      src='./images/img1.jpg'
                      alt=''
                      className=' h-48 object-cover'
                    />
                  </div>
                  <div className=' flex flex-col justify-center'>
                    <h1>
                      Lorem ipsum dolor sit, amet consectetur 
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur 
                    </p>
                    <p>Read More</p>
                  </div>
                
                </div>
              </Link>
              <Link to='/blog-details'>
                <div className='flex h-48 items-center gap-2 boxShadow'>
                  <div>
                    <img
                      src='./images/img1.jpg'
                      alt=''
                      className=' h-48 object-cover'
                    />
                  </div>
                  <div className=' flex flex-col justify-center'>
                    <h1>
                      Lorem ipsum dolor sit, amet consectetur 
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur 
                    </p>
                    <p>Read More</p>
                  </div>
                
                </div>
              </Link>
              <Link to='/blog-details'>
                <div className='flex h-48 items-center gap-2 boxShadow'>
                  <div>
                    <img
                      src='./images/img1.jpg'
                      alt=''
                      className=' h-48 object-cover'
                    />
                  </div>
                  <div className=' flex flex-col justify-center'>
                    <h1>
                      Lorem ipsum dolor sit, amet consectetur 
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur 
                    </p>
                    <p>Read More</p>
                  </div>
                
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Blogs
