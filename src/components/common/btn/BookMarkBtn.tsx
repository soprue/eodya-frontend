import { useState } from "react";
import {ReactComponent as BookmarkSVG} from "../../../assets/image/icon/bookmark.svg";
import {ReactComponent as BookmarkOutlineSVG} from "../../../assets/image/icon/bookmark_outline.svg";
import axios from "axios";

// 북마크 버튼
export const BookMarkBtn = ({numberHide,placeId} : {numberHide? : boolean,placeId? : string }) => {

  const [bookState,setBookState] = useState(false);

    const onClick = async (e : React.MouseEvent<HTMLDListElement, MouseEvent>,placeId : string)=>{
      const response = await axios.patch(`http://3.37.95.12:8080/api/v1/Bookmark/${placeId}`,{
        headers : {},
        params : {}
      });
      const {data} = response;
    }
  
    return (
      <dl className="text-center font-pretendard cursor-pointer" onClick={(e)=>onClick(e,placeId||"")}>
        <div className="w-6 h-6 flex items-center justify-center">
          {
            bookState ?
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