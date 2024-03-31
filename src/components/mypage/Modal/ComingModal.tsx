import Modal from "react-modal";

export default function ComingModal({isOpen,onClose} : {isOpen : boolean, onClose : any}) {

    const handleClose = ()=>{
        onClose();
    }
  
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            style={{
            content : {
                position : "absolute",
                overflow : "hidden",
                left : "50%",
                top : "50%",
                right: 'auto',
                bottom: 'auto',
                padding : 0,
                marginRight: '-50%',
                borderRadius : "10px",
                transform: 'translate(-50%, -50%)',
                width : `${280/360*100}%`,
                height : 'auto',
                maxWidth : 280,
            },
            overlay : {
                zIndex : 9999,
                background : "rgba(000,000,000,0.5)"
            }
            }}
        >
            <div className="font-pretendard tracking-custom leading-none h-full">
              <div className='h-[82px] flex items-center justify-center text-base font-normal leading-[20.8px]'>
                준비중 입니다.
              </div>
              <button className='h-11 flex items-center justify-center w-full border-t border-gray-100' onClick={handleClose}>확인</button>
            </div>
        </Modal>
    )
  
}