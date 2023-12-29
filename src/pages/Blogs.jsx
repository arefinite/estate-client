import { Link } from 'react-router-dom'
import Breadcrumb from '../components/shared/BreadCrumb'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import { images } from '../constants'

const Blogs = () => {
  return (
    <>
      <MobileFixedHeader icon='back' share text='back' link='/' />
      <main className='lg:pt-20'>
        <div className='h-96 hidden md:block'>
          <img
            src={images.blogs}
            className='h-96 w-full object-cover object-center'
            alt=''
          />
        </div>
          <div className='container mx-auto'><Breadcrumb link1='/' link1Text='Home' link2Text='Latest Blogs' /></div>
        <div className='md:max-w-[500px] md:flex md:flex-col md:items-center md:justify-center mx-auto'>
          <div className='px-4 md:px-0'>
            <h1 className='heading'>Latest Blogs</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              possimus aut ex, unde vero excepturi consequatur perspiciatis
              repellendus in similique, blanditiis voluptatem quisquam, iste eum
              tempora illum doloremque incidunt earum modi ipsum iusto alias.
              Iste nesciunt consequuntur adipisci veritatis molestiae?
            </p>
            <div className='flex flex-col gap-6 mt-8'>
              <Link to='/blog-details'>
                <div className='flex gap-2 boxShadow'>
                  <div>
                    <img
                      src='./images/img1.jpg'
                      alt=''
                      className='w-96 h-full object-cover'
                    />
                  </div>
                  <div className='flex flex-col justify-between p-2 h-36'>
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi.
                    </div>
                    <div>
                      <small>11 June 2023</small>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to='/blog-details'>
                <div className='flex gap-2 boxShadow'>
                  <div>
                    <img
                      src='./images/img1.jpg'
                      alt=''
                      className='w-96 h-full object-cover'
                    />
                  </div>
                  <div className='flex flex-col justify-between p-2 h-36'>
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi.
                    </div>
                    <div>
                      <small>11 June 2023</small>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to='/blog-details'>
                <div className='flex gap-2 boxShadow'>
                  <div>
                    <img
                      src='./images/img1.jpg'
                      alt=''
                      className='w-96 h-full object-cover'
                    />
                  </div>
                  <div className='flex flex-col justify-between p-2 h-36'>
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi.
                    </div>
                    <div>
                      <small>11 June 2023</small>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to='/blog-details'>
                <div className='flex gap-2 boxShadow'>
                  <div>
                    <img
                      src='./images/img1.jpg'
                      alt=''
                      className='w-96 h-full object-cover'
                    />
                  </div>
                  <div className='flex flex-col justify-between p-2 h-36'>
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi.
                    </div>
                    <div>
                      <small>11 June 2023</small>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to='/blog-details'>
                <div className='flex gap-2 boxShadow'>
                  <div>
                    <img
                      src='./images/img1.jpg'
                      alt=''
                      className='w-96 h-full object-cover'
                    />
                  </div>
                  <div className='flex flex-col justify-between p-2 h-36'>
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi.
                    </div>
                    <div>
                      <small>11 June 2023</small>
                    </div>
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
