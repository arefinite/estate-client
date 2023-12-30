import { houseData } from "../data/houseData"

import SecondaryMobileHeader from "./shared/header/SecondaryMobileHeader"

const LightBoxMobile = ({setShowLightBox}) => {
  return (
      <div className="h-full w-full overflow-auto fixed z-[9999999] bg-white  inset-0">
          <SecondaryMobileHeader setShowLightBox={setShowLightBox} icon='delete'  name='Photos' share download/>
          <div className="flex flex-col gap-4">
          {
              houseData.map(house => (
                  <div key={house.id}>
                      <img src={house.url} alt={house.title} />
                  </div>
              ))
          }
          </div>
    </div>
  )
}
export default LightBoxMobile