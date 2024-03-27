import { useState } from "react";
import {ReactComponent as BookmarkSVG} from "../../../assets/image/icon/bookmark.svg";
import {ReactComponent as BookmarkOutlineSVG} from "../../../assets/image/icon/bookmark_outline.svg";

// 북마크 버튼
export const BookMarkBtn = () => {

    const [click,setClick] = useState(false);
  
    return (
      <dl className="text-center font-pretendard cursor-pointer" onClick={()=>setClick(!click)}>
        <div className="w-6 h-6 flex items-center justify-center">
          {
            click ?
              <BookmarkSVG className={`fill-gray-300`}/>
              :
              <BookmarkOutlineSVG className={`fill-gray-300`}/>
          }
        </div>
        <p className="text-[13px] leading-[13px] tracking-custom font-medium text-gray-300">10</p>
      </dl>
    )
  
}