import { useState } from "react";
import {ReactComponent as BookmarkSVG} from "../../../assets/image/icon/bookmark.svg";
import {ReactComponent as BookmarkOutlineSVG} from "../../../assets/image/icon/bookmark_outline.svg";

// 북마크 버튼
export const BookMarkBtn = ({numberHide} : {numberHide? : boolean }) => {

    const [click,setClick] = useState(false);

    const onClick :React.MouseEventHandler<HTMLDListElement> = (e)=>{
      e.stopPropagation(); 
      setClick(!click);
    }
  
    return (
      <dl className="text-center font-pretendard cursor-pointer" onClick={onClick}>
        <div className="w-6 h-6 flex items-center justify-center">
          {
            click ?
              <BookmarkSVG className={`fill-gray-300`}/>
              :
              <BookmarkOutlineSVG className={`fill-gray-300`}/>
          }
        </div>
        {
          !numberHide && <p className="text-[13px] leading-[13px] tracking-custom font-medium text-gray-300">10</p>
        }
      </dl>
    )
  
}