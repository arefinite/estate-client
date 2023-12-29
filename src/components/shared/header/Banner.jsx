const Banner = () => {
  return (
    <div className='banner relative flex items-center justify-center z-10'>
      <div className='absolute inset-0 w-full h-full bg-black bg-opacity-50 '></div>
      <div className='z-30 text-white absolute bottom-4 left-4 lg:static lg:text-center lg:flex '>
        <h1 className='font-merri text-3xl lg:text-6xl font-bold tracking-wider space-y-1 flex flex-col lg:mt-[40%] mb-20 lg:mb-0 '>
          <span> DUBAI</span>
          <span>OFF PLAN</span>
          <span>PROJECTS</span>
        </h1>
      </div>
    </div>
  )
}
export default Banner
