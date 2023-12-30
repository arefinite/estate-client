import { useState } from "react"
import { FaXmark } from "react-icons/fa6"
import { IoIosArrowBack, IoIosShareAlt, IoMdDownload } from "react-icons/io"
import { Link } from "react-router-dom"
import Modal from '../Modal';

const MobileFixedHeader = ({ link, icon, text, download, share }) => {
  const [showModal,setShowModal] = useState(false)
	return (
		<>
			<div className='md:hidden flex justify-center sticky h-16 top-0 bg-white border-b border-slate-200 z-[50]'>
				<div>
					<div className='flex justify-between'>
						<button className='absolute left-4 top-6'>
							<Link to={link}>
								<div className='flex gap-1'>
									{icon === "back" ? (
										<IoIosArrowBack />
									) : icon === "delete" ? (
										<FaXmark />
									) : null}

									<div className='relative bottom-1'>{text}</div>
								</div>
							</Link>
						</button>
						<h1 className='p-4 text-2xl font-bold pl-20 invisible'>Text</h1>
						<div className='flex gap-4 items-center absolute right-4 top-4 ml-8 '>
							<span>
								{download && <IoMdDownload style={{ fontSize: "2rem" }} />}
							</span>
							<span>
								{share && (
									<IoIosShareAlt
										onClick={() => setShowModal(true)}
										style={{ fontSize: "2rem" }}
									/>
								)}
							</span>
						</div>
					</div>
				</div>
			</div>
			{showModal && (
				<Modal
					setShowModal={setShowModal}
				/>
			)}
		</>
	)
}
export default MobileFixedHeader