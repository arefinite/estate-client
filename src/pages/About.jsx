import Breadcrumb from '../components/shared/BreadCrumb'
import MobileFixedHeader from '../components/shared/header/MobileFixedHeader'
import { images } from '../constants'

const About = () => {
  return (
    <>
          <MobileFixedHeader icon='back' share text='back' link='/'/>
      <main className='lg:pt-16'>
        <div className='container mx-auto'><Breadcrumb link1='/' link1Text='Home' link2Text='About Us' /></div>
      <div className='relative h-96 hidden md:block'>
        <img
          src={images.about}
          className='h-96 w-full object-cover object-bottom '
          alt=''
          />
          <div className='absolute top-[45%] left-[40%] text-white text-6xl'>About Us</div>
      </div>
      <div className='container mx-auto'>
        
        <div className='px-4 md:px-0 mt-6'>
          <h1 className='heading'>About Us</h1>
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
            <h1 className='heading mt-8'>About Us</h1>
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
      </div>
    </main></>
  )
}
export default About
