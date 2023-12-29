import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const FooterNavigation = () => {
  const [openId, setOpenId] = useState(null)
  return (
    <section className='pt-8'>
      <div className='lg:container lg:mx-auto lg:grid lg:grid-cols-4 lg:gap-6 hidden'>
        <div>
          <ul className='space-y-3 text-stone-200'>
            <li className='font-bold text-white'>Dubai Communities</li>
            <li>Palm Jumeirah</li>
            <li>Downtown Dubai</li>
            <li>Dubai Hills</li>
            <li>Dubai Creek Harbour</li>
            <li>Dubai Marina</li>
            <li>Emirates Hills</li>
            <li>DIFC</li>
            <li>View All</li>
          </ul>
        </div>
        <div>
          <ul className='space-y-3 text-stone-200'>
            <li className='font-bold text-white'>Dubai Project</li>
            <li>Bugatti Residences</li>
            <li>Six Senses Residences</li>
            <li>Raffles esidences</li>
            <li>Uptown Dubai</li>
            <li>Baccart Hotel & Residence</li>
            <li>Vela by Omniyat</li>
            <li>St. Regis Downtown Dubai</li>
            <li>View All</li>
          </ul>
        </div>
        <div>
          <ul className='space-y-3 text-stone-200'>
            <li className='font-bold text-white'>Explore</li>
            <li>Why Dubai</li>
            <li>Off Plan Projects in Dubai</li>
            <li>Dubai Developers</li>
            <li>Dubai Areas</li>
            <li>By Property With CRypto</li>
            <li>Explore Dubai</li>
            <li>FAQ</li>
            <li>Map</li>
          </ul>
        </div>
        <div>
          <ul className='space-y-3 text-stone-200'>
            <li className='font-bold text-white'>Dubai Projects</li>
            <li>Apartments in Dubai</li>
            <li>Penthouses in Dubai</li>
            <li>Villas in Dubai</li>
            <li>Luxury Projects For Sale</li>
            <li>Off Plan Projects In Dubai</li>
            <li>Land Plots In Dubai</li>
            <li>Townhouses in Dubai</li>
            <li>Luxury Apartments for Sale</li>
          </ul>
        </div>
      </div>
      <div className='px-4 lg:hidden'>
        <div>
          <div
            className='flex justify-between'
            onClick={() => setOpenId(openId === 1 ? null : 1)}
          >
            <div >Dubai Communities</div>
            <div>
              {openId === 1 ? (
                <IoIosArrowUp className='text-xl' />
              ) : (
                <IoIosArrowDown className='text-xl' />
              )}
            </div>
          </div>
          {openId === 1 && (
            <div>
              <ul className='mt-4 space-y-4'>
                <li>Palm Jumeirah</li>
                <li>Downtown Dubai</li>
                <li>Dubai Hills</li>
                <li>Dubai Creek Harbour</li>
                <li>Dubai Marina</li>
                <li>Emirates Hills</li>
                <li>DIFC</li>
                <li>View All</li>
              </ul>
            </div>
          )}
        </div>

        <div>
          <div className='w-full h-[2px] my-4 bg-white'></div>
          <div
            className='flex justify-between'
            onClick={() => setOpenId(openId === 2 ? null : 2)}
          >
            <div>Dubai Projects</div>
            <div>
              {openId === 2 ? (
                <IoIosArrowUp className='text-xl' />
              ) : (
                <IoIosArrowDown className='text-xl' />
              )}
            </div>
          </div>
          {openId === 2 && (
            <div>
              <ul className='mt-4 space-y-4'>
                <li>Bugatti Residences</li>
                <li>Six Senses Residences</li>
                <li>Raffles esidences</li>
                <li>Uptown Dubai</li>
                <li>Baccart Hotel & Residence</li>
                <li>Vela by Omniyat</li>
                <li>St. Regis Downtown Dubai</li>
                <li>View All</li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <div className='w-full h-[2px] my-4 bg-white'></div>
          <div
            className='flex justify-between'
            onClick={() => setOpenId(openId === 3 ? null : 3)}
          >
            <div>Explore</div>
            <div>
              {openId === 3 ? (
                <IoIosArrowUp className='text-xl' />
              ) : (
                <IoIosArrowDown className='text-xl' />
              )}
            </div>
          </div>
          {openId === 3 && (
            <div>
              <ul className='mt-4 space-y-4'>
                <li>Why Dubai</li>
                <li>Off Plan Projects in Dubai</li>
                <li>Dubai Developers</li>
                <li>Dubai Areas</li>
                <li>By Property With CRypto</li>
                <li>Explore Dubai</li>
                <li>FAQ</li>
                <li>Map</li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <div className='w-full h-[2px] my-4 bg-white'></div>
          <div
            className='flex justify-between'
            onClick={() => setOpenId(openId === 4 ? null : 4)}
          >
            <div>Dubai Properties For Sale</div>
            <div>
              {openId === 4 ? (
                <IoIosArrowUp className='text-xl' />
              ) : (
                <IoIosArrowDown className='text-xl' />
              )}
            </div>
          </div>
          {openId === 4 && (
            <div>
              <ul className='mt-4 space-y-4'>
                <li>Apartments in Dubai</li>
                <li>Penthouses in Dubai</li>
                <li>Villas in Dubai</li>
                <li>Luxury Projects For Sale</li>
                <li>Off Plan Projects In Dubai</li>
                <li>Land Plots In Dubai</li>
                <li>Townhouses in Dubai</li>
                <li>Luxury Apartments for Sale</li>
              </ul>
            </div>
          )}
        </div>
        <div className='w-full h-[2px] my-4 bg-white'></div>
      </div>
    </section>
  )
}
export default FooterNavigation