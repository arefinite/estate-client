import { FaXmark } from "react-icons/fa6"


const CommonModal = ({setShowModal,children}) => {
  const modal = {
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		minWidth: "350px",
		backgroundColor: "white",
		minHeight: "380px",
    zIndex: 100,


	}
  const overlay = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex:33,
  }

  const closeButton = {
    position: 'absolute',
    top: '25px',
    right: '20px',
      cursor: 'pointer',
      zIndex: 99
  }
  return (
		<div>
			<div style={modal}>
				<div>
					{children}
				</div>
				<button  style={closeButton} onClick={() => setShowModal(false)}>
					<FaXmark />
				</button>
			</div>
			<div style={overlay} onClick={() => setShowModal(false)}></div>
		</div>
	)
}
export default CommonModal