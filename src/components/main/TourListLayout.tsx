import { ReviewDetailList } from "../../store/features/main/tourList/tourPlace"
import { BookMarkBtn } from "../common/btn/BookMarkBtn"
import FlowerTag from "../common/tag/FlowerTag"

// 스팟선택
export const TourListLayout = ({item,onClick} : {item : ReviewDetailList,onClick? : React.MouseEventHandler<HTMLDivElement>}) => {

  return (
    <div className="bg-white p-4 font-pretendard" onClick={onClick}>
      
      <div className="relative">
        <div className="absolute top-[10px] left-[10px] z-20 leading-none">
          <FlowerTag placeState={item.placeStatus}/>
        </div>
        <div className={`grid grid-cols-${item.reviewImage.length} gap-1 rounded-lg overflow-hidden`}>
          
          {
            item.reviewImage.map((e,i)=>(
              <div className="relative w-full h-40" key={i}>
                <img className="absolute top-0 left-0 w-full h-full object-cover object-center" src={e} alt={`${item.nickName} 이미지`} />
            </div>
            ))
          }

        </div>
      </div>

      <div className="mt-3 flex justify-between items-start">
        <div className="leading-none tracking-custom">
          <dl>
            <dt className="text-base font-bold text-gray-950">{item.nickName}</dt>
            <dd className="mt-1 text-sm font-normal leading-[21px]">{item.reviewContent}</dd>
          </dl>
          {/* <p className="text-[13px] mt-1 leading-[13px] text-info-300 font-semibold">820m</p> */}
        </div>
        <BookMarkBtn/>
      </div>

    </div>
  )
  
}