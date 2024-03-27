import { BookMarkBtn } from "./Btn/BookMarkBtn"

// 스팟선택
export const ListLayout = ({onClick} : {onClick? : React.MouseEventHandler<HTMLDivElement>}) => {

    return (
      <div className="bg-white p-4 font-pretendard" onClick={onClick}>
        
        <div className="relative w-full h-40 rounded-lg overflow-hidden">
          <img className="absolute top-0 left-0 w-full h-full object-cover object-center" src="https://picsum.photos/1280/720" alt="스팟 이미지" />
        </div> 
  
        <div className="mt-3 flex justify-between items-start">
          <dl>
            <dt className="text-base font-bold text-gray-950 tracking-[-0.02em]">애기능 동산 <span className="text-[13px] leading-[13px] text-info-300 font-semibold">820m</span></dt>
            <dd className="mt-[6px] tracking-[-0.02em] text-sm font-normal leading-[21px]">서울 성복구 안암로 73-15</dd>
          </dl>
          <BookMarkBtn/>
        </div>
  
      </div>
    )
  
}