import { Link } from "react-router-dom"
import TopBar from "../common/menu/TopBar"
import { Reivew } from "./Reivew"
import { ReactComponent as BookmarkOutline} from "../../assets/image/icon/bookmark_outline.svg";
import { ReactComponent as Bookmark} from "../../assets/image/icon/bookmark.svg";
import { useState } from "react";
import FlowerTag from "../common/tag/FlowerTag";
import ShareBtn from "../common/btn/Share/ShareBtn";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { close } from "../../store/features/spotView/slice";

// 스팟상세
export const SpotView = () => {

  const [bookmark,setBookmark] = useState(false);

  const viewShow = useAppSelector(state=>state.spotView);
  const dispatch = useAppDispatch();

  return (

    <div className={`${!viewShow ? "translate-x-full" : ""} transition-transform duration-300 absolute top-0 left-0 w-full z-50 font-pretendard bg-gray-100`}>
      
      <div className="h-screen overflow-y-auto scrollbar-hide relative">

        <TopBar 
          className="!sticky top-0 left-0 z-30 w-full max-w-xl box-border bg-gradient-to-b from-[rgba(0,0,0,0.15)] to-transparent to-[82.14%]" 
          prevClassName="fill-white"
          onClick={()=>{dispatch(close())}}
        >
          <nav className="absolute right-4 flex top-1/2 -translate-y-1/2">
            <button onClick={()=>setBookmark(!bookmark)}>
              {
                bookmark ?
                <BookmarkOutline className="fill-white"/>
                :
                <Bookmark className="fill-white"/>
              }
            </button>
            <ShareBtn className="ml-2 fill-white"/>
          </nav>
        </TopBar>
  
        <div className="w-full after:block after:pb-[100%] -mt-14 sticky top-0">
          <img className="absolute top-0 left-0 w-full h-full object-cover object-top" src="https://picsum.photos/1280/720" alt="스팟 이미지" />
        </div>
        
        <div className="relative z-10 bg-gray-100">
          <div className="flex items-center justify-between pt-5 px-4 pb-5 bg-white">
            <dl>
              <dt className="text-xl font-bold text-gray-950 tracking-custom flex items-start">애기능 동산 <div className="ml-2 inline-block leading-none"><FlowerTag placeState="개화"/></div></dt>
              <dd className="mt-2 tracking-custom font-normal text-sm  leading-[21px]">서울 성복구 안암로 73-15 <span className="text-[13px] leading-none font-semibold text-info-300">820m</span></dd>
            </dl>
            <Link to={'/new/review'} className={`bg-primary text-white w-[87px] h-8 flex items-center justify-center text-xs font-semibold rounded-full`}>후기 남기기</Link>
          </div>
    
          <div className="mt-2 bg-white py-6 px-4 ">
            <p className="font-normal text-sm tracking-custom mb-3">후기 <span className="text-primary">14</span>개</p>
            {
              [
                {
                  placeState : "만개",
                  image : [0,1]
                },
                {
                  placeState : "개화",
                  image : [0]
                },
                {
                  placeState : "내년에 만나요",
                  image : [0,1]
                },
                {
                  placeState : "개화",
                  image : [0]
                }
              ].map((e,i)=>
                <Reivew key={i} item={e} index={i} />
              )
            }
          </div>
        </div>

      </div>

    </div>

  )
  
}