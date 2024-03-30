import { Link } from "react-router-dom"
import TopBar from "../common/menu/TopBar"
import { Reivew } from "./Reivew"
import { ReactComponent as BookmarkOutline} from "../../assets/image/icon/bookmark_outline.svg";
import { ReactComponent as Bookmark} from "../../assets/image/icon/bookmark.svg";
import { useEffect, useState } from "react";
import FlowerTag from "../common/tag/FlowerTag";
import ShareBtn from "../common/btn/Share/ShareBtn";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { close } from "../../store/features/main/spotView/slice";
import axios from "axios";
import { start } from "repl";

interface ReviewInterface {
  reviewTotalCount: number;
  reviewDetailList: ReviewDetailList[];
  hasNext: boolean;
}

export interface ReviewDetailList {
  userId: number;
  nickName: string;
  reviewDate: string;
  reviewImage: string[];
  placeStatus: string;
  reviewContent: string;
}

// 스팟상세
export const SpotView = () => {

  const dispatch = useAppDispatch();
  const {userInfo} = useAppSelector(state=>state.auth);
  const viewShow = useAppSelector(state=>state.spotView);
  const {info} = useAppSelector(start=>start.InfoPlace);
  const [bookmark,setBookmark] = useState(false);
  const [review,setReview] = useState<ReviewInterface>();

  useEffect(()=>{

    if(viewShow){

      axios.get(`/api/v1/review?placeId=${info.placeId}&page=1&size=10`,{
        headers : {
          Authorization : userInfo?.token,
          "Content-Type" : "application/json"
        }
      })
      .then(({data})=>{
        console.log(data);
        setReview(data);
      })
      .catch(err=>{
        
      })

    }

  },[info,viewShow])

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
          <img className="absolute top-0 left-0 w-full h-full object-cover object-top" src={info.image} alt={`${info.name} 이미지`} />
        </div>
        
        <div className="relative z-10 bg-gray-100">
          <div className="flex items-center justify-between pt-5 px-4 pb-5 bg-white">
            <dl>
              <dt className="text-xl font-bold text-gray-950 tracking-custom flex items-start">
                {info.name} <div className="ml-2 inline-block leading-none"><FlowerTag placeState="개화"/></div>
              </dt>
              <dd className="mt-2 tracking-custom font-normal text-sm  leading-[21px]">
                {info.addressDetail} 
                {/* <span className="text-[13px] leading-none font-semibold text-info-300">820m</span> */}
              </dd>
            </dl>
            <Link 
              to={`/new/review/${info.placeId}`} 
              className={`bg-primary text-white w-[87px] h-8 flex items-center justify-center text-xs font-semibold rounded-full`}
            >후기 남기기</Link>
          </div>
    
          <div className="mt-2 bg-white py-6 px-4 ">
            <p className="font-normal text-sm tracking-custom mb-3">
              후기 <span className="text-primary">{ review?.reviewDetailList && review?.reviewDetailList.length > 0 ? review?.reviewTotalCount : 0}</span>개
            </p>
            {
              review?.reviewDetailList.map((e,i)=>
                <Reivew item={e} index={i} key={i} />
              )
            }
          </div>
        </div>

      </div>

    </div>

  )
  
}