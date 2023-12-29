import { FaXmark } from "react-icons/fa6"
import { FaGoogle } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"



const Modal = ({setShowModal}) => {
  const modal = {
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "300px",
		backgroundColor: "white",
		padding: "20px",
    zIndex: 100,
    overflow: 'hidden',
    scroll: false,

	}
  const overlay = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',

    zIndex:33,
  }

  const closeButton = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  }
  return (
		<div>
			<div style={modal}>
				<div style={{ marginTop: "2rem" }} className='flex gap-4 text-4xl'>
					<h1 className='heading'> Share With</h1>
					<span>
						<FaGoogle className='text-red-500 cursor-pointer' />
					</span>
					<span>
						<FaFacebook className='text-blue-600 cursor-pointer' />
					</span>
					<span>
						<FaTwitter className='text-blue-700 cursor-pointer' />
					</span>
				</div>
				<button style={closeButton} onClick={() => setShowModal(false)}>
					<FaXmark />
				</button>
			</div>
			<div style={overlay} onClick={() => setShowModal(false)}></div>
		</div>
	)
}
export default Modal