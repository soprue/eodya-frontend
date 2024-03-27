import { Link } from "react-router-dom"
import TopBar from "../common/menu/TopBar"
import { Reivew } from "./Reivew"
import { ReactComponent as BookmarkOutline} from "../../assets/image/icon/bookmark_outline.svg";
import { ReactComponent as Bookmark} from "../../assets/image/icon/bookmark.svg";
import { ReactComponent as Share} from "../../assets/image/icon/share.svg";
import { useState } from "react";

// 스팟상세
export const SpotView = () => {

  const [bookmark,setBookmark] = useState(false);
  const [share,setShare] = useState(false);

    return (
  
      <div className="absolute top-0 left-0 w-full z-50 font-pretendard bg-gray-100">
        
        <div className="h-screen overflow-y-auto relative">

          <TopBar className="!sticky top-0 left-0 bg-transparent z-30 w-full max-w-xl box-border">
            <nav className="absolute right-4 flex top-1/2 -translate-y-1/2">
              <button onClick={()=>setBookmark(!bookmark)}>
                {
                  bookmark ?
                  <BookmarkOutline className=" fill-gray-900"/>
                  :
                  <Bookmark className=" fill-gray-900"/>
                }
              </button>
              <button onClick={()=>setShare(!share)} className="ml-2">
                <Share className=" fill-gray-900"/>
              </button>
            </nav>
          </TopBar>
    
          <div className="relative w-full after:block after:pb-[100%] -mt-14">
            <img className="absolute top-0 left-0 w-full h-full object-cover object-top" src="https://picsum.photos/1280/720" alt="스팟 이미지" />
          </div>
          
          <div className="flex items-center justify-between pt-[26px] px-4 pb-4 bg-white">
            <dl>
              <dt className="text-base font-bold text-gray-950 tracking-[-0.02em]">애기능 동산 <span className="text-[13px] leading-[13px] text-info-300 font-semibold">820m</span></dt>
              <dd className="mt-[6px] tracking-[-0.02em] text-sm font-normal leading-[21px]">서울 성복구 안암로 73-15</dd>
            </dl>
            <Link to={'/new/review'} className={`bg-primary text-white w-[87px] h-8 flex items-center justify-center text-xs font-semibold rounded-full`}>후기 남기기</Link>
          </div>
    
          <div className="mt-2 bg-white py-6 px-4">
            <p className="font-normal tracking-[-0.02em] mb-[11px]">후기 <span className="text-primary">14</span>개</p>
            {
              [{
                data : [0,1]
              },{
                data : [0]
              }].map((e,i)=>
                <Reivew key={i} test={e.data} index={i} />
              )
            }
          </div>

        </div>
  
      </div>
  
    )
  
}