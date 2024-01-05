import { Link } from "react-router-dom"
import SecondaryMobileHeader from "./shared/header/SecondaryMobileHeader"


const Subscribe = ({value,btnText,setShowModal}) => {
	return (
		<div className="p-1 pb-4 md:pb-0 md:p-5 relative z-10">
			<div>
				<div>
					{/* <div className="md:hidden"><SecondaryMobileHeader icon='delete' name='Register Interest' /></div> */}
					<div className=""><SecondaryMobileHeader  name='Subscribe' /></div>
					<div>
						<div>
							<h1 className='text-center pb-8 md:pb-0 pt-4 md:pt-0 heading w-screen md:w-full'>
								{value}
							</h1>
							<div>
								<form
									onSubmit={e => e.preventDefault()}
									className='flex flex-col gap-4 px-4 md:px-0'
								>
								
									<input
										type='email'
										placeholder='Email'
										className='p-2 border border-slate-300 w-full outline-none'
										required
									/>
									
									<input
										type='submit'
										value={btnText ? btnText : 'Subscribe'}
										className='p-2  border border-slate-300 bg-black text-white outline-none cursor-pointer'
									/>
								</form>
                            </div>
                            
                        </div>
                        <div className="mt-4 px-4 md:px-0">
                            BY  SHARING YOUR EMAIL, YOU AGREE TO OUR <span className="underline bold">TERMS OF USE</span> AND <span className="bold underline"><Link to='/privacy-policy' onClick={()=>setShowModal(false)}>PRIVACY</Link></span>.
                        </div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Subscribe