
import MobileFixedHeader from "../components/shared/header/MobileFixedHeader"

const Map = () => {
  return (
      <section >
          <MobileFixedHeader link='/' text='back' icon='back' share />

          <div className="h-screen w-full md:pt-20">
              
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8605513494604!2d55.39832187605159!3d25.072715136730253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f64a9adde0391%3A0xccb93df3295373f7!2sDubai%20Outlet%20Mall!5e0!3m2!1sen!2sbd!4v1701351921475!5m2!1sen!2sbd'
					loading='lazy'
					height={"100%"}
					width={"100%"}
				></iframe>
			</div>
			
    </section>
  )
}
export default Map