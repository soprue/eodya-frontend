import { Link } from "react-router-dom"
import TopBar from "../common/menu/TopBar"
import { Reivew } from "./Reivew"

// 스팟상세
export const SpotView = () => {

    return (
  
      <div className="absolute top-0 left-0 w-full h-screen z-50 font-pretendard bg-gray-100">
        
        <TopBar className="!absolute top-0 left-0 bg-transparent z-30 w-full max-w-xl"/>
  
        <div className="relative w-full after:block after:pb-[100%]">
          <img className="absolute top-0 left-0 w-full h-full object-cover object-top" src="https://picsum.photos/1280/720" alt="스팟 이미지" />
        </div>
        
        <div className="flex items-center justify-between pt-[26px] px-4 pb-4 bg-white">
          <dl>
            <dt className="text-base font-bold text-gray-950 tracking-[-0.02em]">애기능 동산 <span className="text-[13px] leading-[13px] text-info-300 font-semibold">820m</span></dt>
            <dd className="mt-[6px] tracking-[-0.02em] text-sm font-normal leading-[21px]">서울 성복구 안암로 73-15</dd>
          </dl>
          <Link to={'/'} className={`bg-primary text-white w-[87px] h-8 flex items-center justify-center text-xs font-semibold rounded-full`}>후기 남기기</Link>
        </div>
  
        <div className="mt-2 bg-white py-6 px-4">
          <p className="font-normal tracking-[-0.02em] mb-[11px]">후기 <span className="text-primary">14</span>개</p>
          {
            [0,1].map((e,i)=>
              <Reivew key={e} index={i} />
            )
          }
        </div>
  
      </div>
  
    )
  
}