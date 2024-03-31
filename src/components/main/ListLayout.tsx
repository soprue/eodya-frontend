import { ReviewDetailList } from "../../store/features/main/tourList/tourPlace"
import { InfoPlaceType } from "../../types/InfoPlaceType"
import { BookMarkBtn } from "../common/btn/BookMarkBtn"
import FlowerTag from "../common/tag/FlowerTag"

// 스팟선택
export const ListLayout = ({item,onClick} : {item : InfoPlaceType,onClick? : React.MouseEventHandler<HTMLDivElement>}) => {

  return (
    <div className="bg-white p-4 font-pretendard" onClick={onClick}>
      
      <div className="relative">
        <div className="absolute top-[10px] left-[10px] z-20 leading-none">
          <FlowerTag placeState={item.placeStatus}/>
        </div>
        <div className={`grid grid-cols-${item.image.length} gap-1 rounded-lg overflow-hidden`}>
          
          <div className="relative w-full h-40">
            <img className="absolute top-0 left-0 w-full h-full object-cover object-center" src={item.image} alt={`${item.name} 이미지`} />
          </div>

          {/* {
            item.image.map((e,i)=>(
              <div className="relative w-full h-40" key={i}>
                <img className="absolute top-0 left-0 w-full h-full object-cover object-center" src="https://picsum.photos/1280/720" alt="스팟 이미지" />
              </div>
            ))
          } */}

        </div>
      </div>

      <div className="mt-3 flex justify-between items-start">
        <div className="leading-none tracking-custom">
          <dl>
            <dt className="text-base font-bold text-gray-950">{item.name}</dt>
            <dd className="mt-1 text-sm font-normal leading-[21px]">{item.addressDetail}</dd>
          </dl>
          {/* <p className="text-[13px] mt-1 leading-[13px] text-info-300 font-semibold">820m</p> */}
        </div>
        <BookMarkBtn placeId={""} status={false}/>
      </div>

    </div>
  )
  
}
