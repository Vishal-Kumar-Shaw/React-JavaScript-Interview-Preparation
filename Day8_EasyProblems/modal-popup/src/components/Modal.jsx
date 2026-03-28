import './Modal.css'
const Modal = ({onClose}) => {


    const handleModalClick = (e) =>{
        e.stopPropagation()
    }
    const handleOverlayClick = () =>{
        onClose()
    }

  return (
    <div className='overlay' onClick={handleOverlayClick}>
        <div className="modal" onClick={handleModalClick}>
             <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>Modal Title</h2>
        <p>This is a centered modal 😎</p>
        </div>
    </div>
  )
}

export default Modal
