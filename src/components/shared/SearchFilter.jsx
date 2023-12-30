import { useState } from 'react'
import { Range } from 'react-range'
const SearchFilter = () => {
    const [range, setRange] = useState([550000, 960000])
    const handleRangeChange = newRange => {
      setRange(newRange)
    }
  return (
    <>
      <div className='flex justify-between gap-6 '>
        <div>
          <label htmlFor='type' className=' '>
            Project Type
          </label>
          <div className='flex flex-col mt-2 gap-2 '>
            <span className='flex items-center gap-2 '>
              <input
                type='checkbox'
                name='type'
                className='h-5 w-5 custom-checkbox'
              />{' '}
              Apartment
            </span>
            <span className='flex items-center gap-2 '>
              <input
                type='checkbox'
                className='h-5 w-5 custom-checkbox'
                name='type'
              />{' '}
              Villa
            </span>
            <span className='flex items-center gap-2 '>
              <input
                type='checkbox'
                className='h-5 w-5 custom-checkbox'
                name='type'
              />{' '}
              Penthouse
            </span>
            <span className='flex items-center gap-2 '>
              <input
                type='checkbox'
                className='h-5 w-5 custom-checkbox'
                name='type'
              />{' '}
              Townhouse
            </span>
            <span className='flex items-center gap-2 '>
              <input
                type='checkbox'
                className='h-5 w-5 custom-checkbox'
                name='type'
              />{' '}
              Land Plots
            </span>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='develop'>Developer</label>
            <select className='p-2 pr-4 border border-slate-300 outline-none '>
              <option value=''>Please Select</option>
              <option value=''>Develope One</option>
              <option value=''>Developer Two</option>
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='Price'>Price Range</label>
            {/* Start................................................................................................................. */}

            <div className=' mt-4 outline-none w-full'>
              <Range
                step={1}
                min={100000}
                max={2000000}
                values={range}
                onChange={handleRangeChange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '1px',
                      backgroundColor: '#ccc',
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '20px',
                      width: '20px',
                      borderRadius: '100%',
                      border: '2px solid #000',
                      backgroundColor: '#fff',
                    }}
                  />
                )}
              />
              <div className='flex justify-between mt-4'>
                <span>${range[0]}</span>
                <span>${range[1]}</span>
              </div>
            </div>
          </div>
          <div className='flex  gap-3 w-2/3'>
            <div>
              <input
                type='number'
                placeholder='Min Price'
                className='p-2 border border-slate-300 flex-1 w-[120px]   outline-none'
              />
            </div>
            <div>
              <input
                type='number'
                placeholder='Max Price'
                className='p-2 border border-slate-300 flex-1 w-[120px]  outline-none'
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor='develop'>Lifestyle</label>
        <div className='flex flex-wrap max-w-[450px] gap-2 pb-10 mt-4'>
          <div className='p-2 border border-slate-300 rounded-full  px-4 text-center outline-none hover:bg-black  hover:text-white'>
            Beachfront
          </div>
          <div className='p-2 border border-slate-300 rounded-full  px-4  text-center outline-none hover:bg-black hover:text-white'>
            Luxury Living
          </div>
          <div className='p-2 border border-slate-300 rounded-full px-4   text-center outline-none hover:bg-black hover:text-white'>
            Waterfront
          </div>
          <div className='p-2 border border-slate-300 rounded-full px-4   text-center outline-none hover:bg-black hover:text-white'>
            Near Golf
          </div>
          <div className='p-2 border border-slate-300 rounded-full   px-4 text-center outline-none hover:bg-black hover:text-white'>
            Near Burj Khalifa
          </div>
          <div className='p-2 border border-slate-300 rounded-full  px-4  text-center outline-none hover:bg-black hover:text-white'>
            Near Expo Duba
          </div>
        </div>
        <div>
          <div className='flex justify-between'>
            <input type='reset' className='font-bold' value='Clear All' />
            <input
              type='submit'
              className='px-12 py-2 border border-slate-300  text-center outline-none bg-black text-white'
              value='Search'
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default SearchFilter
