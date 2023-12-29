import Breadcrumb from '../components/shared/BreadCrumb'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import { images } from '../constants'

const About = () => {
  return (
    <>
      <MobileFixedHeader icon='back' share text='back' link='/' />
      <main className='lg:pt-16'>
        <div className='container mx-auto'>
          <Breadcrumb link1='/' link1Text='Home' link2Text='About Us' />
        </div>
        <div className='h-[500px] hidden md:block relative'>
          <img
            src={images.about}
            className='h-[500px] w-full object-cover object'
            alt=''
          />
          <div className='absolute inset-0 bg-black opacity-40'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl'>
            ABOUT US
          </div>
        </div>
        <div className='container mx-auto md:max-w-[700px]'>
          <div className='px-4 md:px-0 mt-6'>
          <h1 className='md:hidden'>About Us</h1>
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
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              doloribus doloremque quaerat exercitationem saepe nihil! Totam
              tempora, commodi veniam amet sed id itaque deleniti minus et nobis
              ad! Ab magni necessitatibus corrupti, rem reiciendis dolore culpa
              cupiditate atque sequi doloremque.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
export default About
