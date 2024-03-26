import { useState } from "react";
import {ReactComponent as BookmarkSVG} from "../../../assets/image/icon/bookmark.svg";
import {ReactComponent as BookmarkOutlineSVG} from "../../../assets/image/icon/bookmark_outline.svg";

// 북마크 버튼
export const BookMarkBtn = () => {

    const [click,setClick] = useState(false);
  
    return (
      <dl className="text-center font-pretendard" onClick={()=>setClick(!click)}>
        <dt>
          {
            click ?
              <BookmarkSVG className={`fill-gray-300`}/>
              :
              <BookmarkOutlineSVG className={`fill-gray-300`}/>
          }
        </dt>
        <dd className="text-[13px] leading-[13px] tracking-[-0.02em] font-medium text-gray-300">10</dd>
      </dl>
    )
  
}