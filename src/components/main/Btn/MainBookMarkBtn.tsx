import { useState } from "react";
import {ReactComponent as BookmarkSVG} from "../../../assets/image/icon/bookmark.svg";

// 메인 북마크 버튼
export const MainBookMarkBtn = () => {

    const [click,setClick] = useState(false);
  
    return (
      <button type="button" onClick={()=>setClick(!click)} className={`w-10 h-10 rounded-lg mt-3 flex items-center justify-center ${click ? "bg-primary" : "bg-white"}`}>
        <BookmarkSVG className={`${click ? "fill-white" : "fill-primary"}`}/>
      </button>
    )
  
  }