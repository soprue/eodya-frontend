import Modal from "react-modal";
import { ReactComponent as Check } from "../../../assets/image/icon/check.svg";

export default function RankModal({isOpen,onClose} : {isOpen : boolean, onClose : any}) {

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
            <div className="pt-6 pb-5 font-pretendard tracking-custom leading-none h-full">
            <h2 className="text-lg px-5 tracking-custom font-semibold leading-[23.4px]">정렬기준</h2>
            <ul className="border-b border-gray-100 mt-[10px] leading-4">
                <li className="cursor-pointer p-5 font-bold text-primary flex justify-between items-center">랭킹순 <Check/></li>
                <li className="cursor-pointer p-5 text-gray-600 font-normal border-t border-gray-100 flex justify-between items-center">거리순 <Check/></li>
                <li className="cursor-pointer p-5 text-gray-600 font-normal border-t border-gray-100 flex justify-between items-center">후기순 <Check/></li>
            </ul>
            <div className="text-right px-5 mt-4 text-gray-600 leading-[20.8px]">
                <button onClick={handleClose}>취소</button>
            </div>
            </div>
        </Modal>
    )

}
