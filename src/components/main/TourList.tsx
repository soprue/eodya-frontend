import { useCallback, useEffect, useState } from "react";
import { ReactComponent as More} from "../../assets/image/icon/more.svg";
import RankModal from "./Modal/RankModal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { TourListLayout } from "./TourListLayout";
import TopBar from "../common/menu/TopBar";
import { prevClick, upClick } from "../../store/features/main/map/tourClick";
import { open } from "../../store/features/main/spotView/slice";
import { getPlace } from "../../store/features/main/spotInfo/InfoPlace";
import { getTourPlace } from "../../store/features/main/tourList/tourPlace";

export interface RootInterface {
  placeDetails: PlaceDetail[];
  hasNext: boolean;
}

export interface PlaceDetail {
  placeId: number;
  name: string;
  addressDetail: string;
  placeImage: string;
  bookmarkStatus: boolean;
  placeStatus: string;
}

export function TourList(){

  const dispatch = useAppDispatch();
  
  const {userInfo} = useAppSelector(state=>state.auth);
  const tourState = useAppSelector(state=>state.tourClick);

  const [isOpen,setIsOpen] = useState(false);
  // 모달창
  const onOpen :React.MouseEventHandler<HTMLButtonElement> = (e)=>{
    e.stopPropagation();
    setIsOpen(true);
  }
  // 모달창 닫기
  const onClose = ()=>{
    setIsOpen(false);
  }

  // 무한 스크롤
  const [page, setPage] = useState(1);

  const {data : {placeDetails : place, hasNext}} = useAppSelector((state)=>state.tourPlace);

  useEffect(()=>{

    if(!userInfo) return;

    dispatch(getTourPlace({token : userInfo.token, address : "서울", page}));

  },[page])

  const loadMore = useCallback(()=>{

    console.log('가져옴');
    console.log(hasNext);

    /* axios(`/api/v1/user/my/bookmarks?page=${page}&size=10`,{
      headers : {
        Authorization : userInfo?.token
      }
    })
      .then(({data} : {data : RootInterface})=>{

        if(data.hasNext){
          setHasNext(data.hasNext);
          setPlace((prev)=>[...prev,...data.placeDetails]);
          setPage(page+1);
        }else{
          return;
        }

      })
      .catch(error => {
        setHasNext(false);
        console.error('Error fetching data:', error);
    });
 */
  },[]);

/*   useEffect(()=>{
    axios.post(`/api/v1/place/search?page=${page}&size=10`,{address : "서울"},{
      headers : {
        Authorization : userInfo?.token
      }
    })
      .then(({data} : {data : RootInterface})=>{

        if(data.hasNext){
          setHasNext(data.hasNext);
          setPlace((prev)=>[...prev,...data.placeDetails]);
          setPage(page+1);
        }else{
          return;
        }

      })
      .catch(error => {
        setHasNext(false);
        console.error('Error fetching data:', error);
    });
  },[]) */

  const spotViewOpen=(e : PlaceDetail)=>{
    if(!userInfo) return;
    dispatch(getPlace({token : userInfo.token, placeId : e.placeId}))
    dispatch(open());
  }

  const handleUp = ()=>{
    if(!tourState.up) dispatch(upClick());
  }
  const handlePrev = ()=>{
    if(tourState.up) dispatch(prevClick());
  }

  return (
    <>
      <div 
        onClick={handleUp}
        className={`bg-white rounded-t-[10px] rounded-r-[10px] pt-7 font-pretendard h-[calc(100vh-70px)] flex flex-col z-30 relative select-none`}
      >
        {
          tourState.up && 
            <div className="flex-none"><TopBar onBack={handlePrev}></TopBar></div>
        }
        <div className="flex justify-between items-center px-4 flex-none">
          <h2 className="text-xl tracking-[-0.02em] font-semibold">근처의 명소</h2>
          <button 
            className="flex items-center text-[13px] tracking-[-0.02em] font-medium"
            onClick={onOpen}
          >
            랭킹순 <More className="fill-gray-800"/>
          </button>
        </div>

        <div className="overflow-y-auto min-h-[800px] scrollbar-hide">
          {
            place.map((e,i)=><TourListLayout onClick={()=>spotViewOpen(e)} item={e} key={i} />)
          }
{/*           <InfiniteScroll
            pageStart={1}
            loadMore={loadMore}
            hasMore={hasNext}
            loader={<div className='text-center' key={0}>로딩중입니다...</div>}
            useWindow={false}
          >
            aaaa
          </InfiniteScroll> */}
        </div>
      </div>

      <RankModal isOpen={isOpen} onClose={onClose}/>
      
    </>
  )
  
}