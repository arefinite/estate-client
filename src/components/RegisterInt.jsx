import { Link } from "react-router-dom"

const RegisterInt = () => {
	return (
		<>
			<div className='md:hidden topShadow border-t border-t-stone-200 fixed z-50 bottom-0 bg-white h-[72px] flex items-center justify-between w-full p-4 text-stone-900'>
				<div className='flex flex-col  text-base space-y-1'>
					<span className='text-base'>Price From</span>
					<span className='text-base font-bold'>AED 390,000,000</span>
				</div>
				<div className='flex  text-stone-500 justify-center items-center text-base'>
					<Link to='/register-interest'>
						<button className='w-full bg-black text-white px-2 py-3'>
							Register Interest
						</button>
					</Link>
				</div>
			</div>
		</>
	)
}

export default RegisterInt