import SecondaryMobileHeader from "./shared/header/SecondaryMobileHeader"


const RegisterInterest = () => {
	return (
		<div className="p-1 pb-4 md:pb-0 md:p-5">
			<div>
				<div>
					{/* <div className="md:hidden"><SecondaryMobileHeader icon='delete' name='Register Interest' /></div> */}
					<div className=""><SecondaryMobileHeader  name='Register Interest' /></div>
					<div>
						<div>
							<h1 className='text-center py-8 heading w-screen md:w-full'>
								Emaar
							</h1>
							<div>
								<form
									onSubmit={e => e.preventDefault()}
									className='flex flex-col gap-4 px-4 md:px-0'
								>
									<input
										type='text'
										placeholder='Full Name'
										className='p-2 border border-slate-300 w-full outline-none'
										required
									/>
									<input
										type='email'
										placeholder='Email'
										className='p-2 border border-slate-300 w-full outline-none'
										required
									/>
									<div className='border border-slate-300 w-full'>
                                        <select
                                            className="w-1/6"
											style={{
												color: "#666",
												backgroundColor: "#fff",
												outline: "none",
												border: "0",
											}}
										>
											<option>+971</option>
											<option>+1</option>
											<option>+54</option>
										</select>
										<input
											type='number'
											placeholder='Number'
											className='p-2 border-none outline-none  w-5/6'
											required
										/>
									</div>
									<input
										type='submit'
										value='Register Interest'
										className='p-2 border border-slate-300 bg-black text-white outline-none'
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegisterInterest