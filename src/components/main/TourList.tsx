import { useState } from "react";
import { ReactComponent as More} from "../../assets/image/icon/more.svg";
import { ListLayout } from "./ListLayout";
import { ReactComponent as Check } from "../../assets/image/icon/check.svg"
import Modal from "react-modal";

// scrollbar-hide

export function TourList(){

  const [modalIsOpen, setIsOpen] = useState(false);

  const onClick = ()=>{
    setIsOpen(true);
  }

  const onClose = ()=>{
    setIsOpen(false);
  }

    return (
      <>
        <div className={`bg-white rounded-t-[10px] rounded-r-[10px] pt-7 font-pretendard h-[calc(100vh-70px)] flex flex-col `}>

          <div className="flex justify-between items-center px-4 flex-none">
            <h2 className="text-xl tracking-[-0.02em] font-semibold">근처의 명소</h2>
            <button 
              className="flex items-center text-[13px] tracking-[-0.02em] font-medium"
              onClick={onClick}
            >
              랭킹순 <More className="fill-gray-800"/>
            </button>
          </div>

          <div className="overflow-y-auto h-full scrollbar-hide">
            {
              [0,1,2,3,4,5].map(e=>(
                <ListLayout key={e}/>
              ))
            }
          </div>

        </div>
        <Modal
          isOpen={modalIsOpen}
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
              height : `${280/360*100}%`,
              maxWidth : 280,
              maxHeight : 280,
            },
            overlay : {
              zIndex : 9999,
              background : "rgba(000,000,000,0.5)"
            }
          }}
        >
          <div className="pt-6 pb-5 font-pretendard tracking-custom leading-none h-full">
            <h2 className="text-lg px-5 tracking-custom font-semibold">정렬기준</h2>
            <ul className="border-b border-gray-100 mt-[10px]">
              <li className="cursor-pointer p-4 px-5 font-bold text-primary flex justify-between items-center">랭킹순 <Check/></li>
              <li className="cursor-pointer p-4 px-5 text-gray-600 font-normal border-t border-gray-100 flex justify-between items-center">거리순 <Check/></li>
              <li className="cursor-pointer p-4 px-5 text-gray-600 font-normal border-t border-gray-100 flex justify-between items-center">후기순 <Check/></li>
            </ul>
            <div className="text-right px-5 mt-4 text-gray-600">
              <button onClick={onClose}>취소</button>
            </div>
          </div>
        </Modal>
      </>
    )
}