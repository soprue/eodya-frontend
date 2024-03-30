import { useState } from "react";
import { ReactComponent as More} from "../../assets/image/icon/more.svg";
import RankModal from "./Modal/RankModal";
import { useAppSelector } from "../../store/hooks";
import { TourListLayout } from "./TourListLayout";


// scrollbar-hide

export function TourList(){

  const [isOpen,setIsOpenl] = useState(false);

  const {data} = useAppSelector(state=>state.tourPlace);

  const onOpen = ()=>{
    setIsOpenl(true);
  }

  const onClose = ()=>{
    setIsOpenl(false);
  }

  return (
    <>
      <div className={`bg-white rounded-t-[10px] rounded-r-[10px] pt-7 font-pretendard h-[calc(100vh-70px)] flex flex-col z-30 relative select-none`}>

        <div className="flex justify-between items-center px-4 flex-none">
          <h2 className="text-xl tracking-[-0.02em] font-semibold">근처의 명소</h2>
          <button 
            className="flex items-center text-[13px] tracking-[-0.02em] font-medium"
            onClick={onOpen}
          >
            랭킹순 <More className="fill-gray-800"/>
          </button>
        </div>

        <div className="overflow-y-auto h-full scrollbar-hide">
          {
            data.reviewDetailList.map((e,i)=><TourListLayout item={e} key={i} />)
          }
        </div>

      </div>

      <RankModal isOpen={isOpen} onClose={onClose}/>
      
    </>
  )
  
}