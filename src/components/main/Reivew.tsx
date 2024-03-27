import { useState } from "react";
// import { ReactComponent as More} from "../../assets/image/icon/more.svg";

export const Reivew = ({item,index} : {item : {placeState: string,image: number[]},index : number})=>{

    const [click,setClick] = useState(false);
  
    return (
      <div className={`${index !== 0 ? "mt-5 pt-5 border-t border-t-gray-100" : ""}  tracking-custom font-pretendard`}>

        {/* <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="rounded-full bg-[#EBEBEB] w-7 h-7"></div>
            <p className="ml-[10px] font-semibold text-sm tracking-[-0.02em] text-gray-900">어댜4885</p>
          </div>
          <p className="text-gray-600 text-[13px] tracking-[-0.02em]">2024.04.18</p>
        </div> */}

        <p className="text-[13px] leading-none text-gray-300">2024.04.18</p>

        <div className={`grid grid-cols-2 gap-1 rounded-lg overflow-hidden mt-2 w-2/3`}>
          {item.image.map((e)=>
            <div key={e} className={`w-full after:content-[''] after:pb-[100%] after:block relative`}>
              <img className={`absolute top-0 left-0 w-full h-full ${item.image.length > 1 ? "" : "rounded-lg" } object-cover object-center`} src="https://picsum.photos/1280/720" alt="스팟 이미지" />
            </div>
          )}
        </div>

        <p className={`mt-2 text-sm text-gray-900 leading-[21px]`}>
          대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
        </p>

        {/* {
          !click &&
          <button 
            type="button"
            onClick={()=>setClick(!click)}
            className="flex items-center ml-auto mt-[15px] text-[13px] tracking-[-0.02em] text-gray-300"
          >더보기 <More className="fill-gray-300"/> </button>
        } */}

      </div>
    )

}
  