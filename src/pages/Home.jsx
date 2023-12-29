import DubaiSection from '../components/home/DubaiSection'
import LuxuryProjects from '../components/home/LuxuryProjects'
import ProjectForSaleCart from '../components/home/ProjectForSaleCart'
import DubaiAreaSlider from '../components/home/slider/DubaiAreaSlider'
import LatestProjectSlider from '../components/home/slider/LatestProjectSlider'
import ProjectForSale from '../components/home/slider/ProjectForSale'
import Banner from '../components/shared/header/Banner'

const Home = () => {
  return (
    <div>
      <Banner />
      <DubaiSection title="Dubai Latest Project">
              <LatestProjectSlider />
      </DubaiSection>
      <DubaiSection title="Dubai Luxury Projects">
              <LuxuryProjects  />
      </DubaiSection>
      <DubaiSection title='Dubai Project For Sale'>
             <div className='px-4 md:px-0'> <ProjectForSale /></div>
              <ProjectForSaleCart />
      </DubaiSection>
      <DubaiSection title='Dubai Areas'>
              <DubaiAreaSlider/>
          </DubaiSection>
    </div>
  )
}
export default Home
