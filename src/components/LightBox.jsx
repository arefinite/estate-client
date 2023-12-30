import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { houseData } from '../data/houseData';

const LightBox = () => {
  return (
      <div className='container mx-auto bg-black  relative z-50'>
            <Swiper
        navigation={true}
        style={{ '--swiper-navigation-color': '#fff' }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
       
              {
                  houseData.map(house => (
                      <div key={house.id} className='max-w-[700px]   '>
                          <SwiperSlide className='grid place-items-center'>
                              <img className='max-h-[500px] object-cover'  src={house.url} alt={house.title} />
                           </SwiperSlide>
                      </div>

                  ))
              }
      
      </Swiper>
    </div>
  )
}
export default LightBox