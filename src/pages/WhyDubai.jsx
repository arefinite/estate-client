import { Link } from 'react-router-dom'
import Breadcrumb from '../components/shared/BreadCrumb'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import { images } from '../constants'

const WhyDubai = () => {
  return (
    <>
      <MobileFixedHeader icon='back' share text='back' link='/' />
      <main className='lg:pt-20'>
        <div className='h-96 hidden md:block'>
          <img
            src={images.explore}
            className='h-96 w-full object-cover object-bottom'
            alt=''
          />
        </div>
        <div className='container mx-auto'>
          <Breadcrumb link1='/' link1Text='Home' link2Text='Why Dubai' />
          <div className='px-4 md:px-0'>
            <h1 className='heading'>Why Dubai</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              doloribus doloremque quaerat exercitationem saepe nihil! Totam
              tempora, commodi veniam amet sed id itaque deleniti minus et nobis
              ad! Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
              cupiditate atque sequi doloremque.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Fugit doloribus doloremque quaerat
              exercitationem saepe nihil! Totam tempora, commodi veniam amet sed
              id itaque deleniti minus et nobis ad! Ab magni necessitatibus
              corrupti, rem reiciendis dolore culpa cupiditate atque sequi
              doloremque.
            </p>

            <p className='mt-8'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              doloribus doloremque quaerat exercitationem saepe nihil! Totam
              tempora, commodi veniam amet sed id itaque deleniti minus et nobis
              ad! Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
              cupiditate atque sequi doloremque.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>

            <p className='mt-8'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              doloribus doloremque quaerat exercitationem saepe nihil! Totam
              tempora, commodi veniam amet sed id itaque deleniti minus et nobis
              ad! Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
              cupiditate atque sequi doloremque.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </div>
          <div className='md:flex md:justify-center px-4'>
            <Link to='/contact'>
              <button className='bg-black text-white w-full md:w-56 py-3 mt-8 '>
                Contact Now
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
export default WhyDubai
