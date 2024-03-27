import { useState } from "react";
import { ReactComponent as More} from "../../assets/image/icon/more.svg";
import { ListLayout } from "./ListLayout";
import RankModal from "./Modal/RankModal";


// scrollbar-hide

export function TourList(){

    return (
      <>
        <div className={`bg-white rounded-t-[10px] rounded-r-[10px] pt-7 font-pretendard h-[calc(100vh-70px)] flex flex-col `}>

          <div className="flex justify-between items-center px-4 flex-none">
            <h2 className="text-xl tracking-[-0.02em] font-semibold">근처의 명소</h2>
            <button 
              className="flex items-center text-[13px] tracking-[-0.02em] font-medium"
            >
              랭킹순 <More className="fill-gray-800"/>
            </button>
          </div>

          <div className="overflow-y-auto h-full scrollbar-hide">
            {
              [
                {
                  placeState : "만개",
                  image : [0,1]
                },
                {
                  placeState : "개화",
                  image : [0]
                },
                {
                  placeState : "내년에 만나요",
                  image : [0,1]
                },
                {
                  placeState : "개화",
                  image : [0]
                }
              ].map((e,i)=>(
                <ListLayout item={e} key={i}/>
              ))
            }
          </div>

        </div>
        
      </>
    )
}