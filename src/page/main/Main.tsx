import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Map, MarkerClusterer } from "react-kakao-maps-sdk";

import Input from "../../components/common/input/Input";
import Navigation from "../../components/common/menu/Navigation";
import BlossomMarker from "../../components/common/marker/BlossomMarker";
import { SpotView } from "../../components/main/SpotView";
import { MainBookMarkBtn } from "../../components/main/Btn/MainBookMarkBtn";
import { getCurrentLocation } from "../../utils/mapLocation/getCurrentLocation";
import { logout } from "../../store/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useWatchLocation } from "../../hook/mapLocation/useWatchLocation";
import BookMarker from "../../components/common/marker/BookMarker";
import UserMarker from "../../components/common/marker/UserMarker";
import { change as yChange  } from "../../store/features/main/spotInfo/ySlice";
import { change as TourChange } from "../../store/features/main/tourList/openSlice";
import { change as InfoChange  } from "../../store/features/main/spotInfo/InfoSlice";
import { getMarker, getBookMarker } from "../../store/features/main/marker/markerSlice";
import { SpotIntro } from "../../components/main/SpotIntro";

export default function Main() {
  const dispatch = useAppDispatch();
  const [bookMark,setBookMark] = useState(false);

  // 마커 fetch
  const {loading, markers, error : markerError} = useAppSelector(state=>state.mainMarker);
  // 마커 가져오기
  useEffect(()=>{ 
    if(bookMark){
      dispatch(getBookMarker()); 
    }else{
      dispatch(getMarker()); 
    }
  },[bookMark]);

  // 지도 초기위치 설정
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 33.450701, lng: 126.570667 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  });

  // 포지션 가져오기
  const getPostion = useCallback( async ()=>{

    const result = await getCurrentLocation();
    if(!result) return;

    const {center,error} = result;

    if(error){
      return alert(error.message);
    }

    if(!center) return;
    setState({center,isPanto : true});

  },[]);
  useEffect(()=>{ getPostion(); },[]);

  // 현재위치 watch
  const {location,error} = useWatchLocation();

  return (
    <>
      <main className="h-screen overflow-hidden relative">

        <div className="absolute z-50 w-full top-[30px] px-4">
          <Input type="text" placeholder="장소를 검색해 보세요"/>
          <MainBookMarkBtn bookMark={bookMark} setBookMark={setBookMark}/>

          {/* 임시 로그아웃 버튼 */}
          <button
            onClick={() => dispatch(logout())}
            className="m-2 bg-white p-2"
          >
            로그아웃
          </button>
        </div>

        <Map
          center={state.center}
          isPanto={state.isPanto}
          style={{ width: "100%", height : "100%" }}
          level={5}
          onDragStart={()=>{
            dispatch(yChange(100)); // spotY = 100
            setTimeout(()=>{
              dispatch(TourChange(false));
              dispatch(InfoChange(false));
            },300);
          }}
          onCenterChanged={(map)=>{
            
            // 중심좌표 변경
            const latlng = map.getCenter();
            setState({
              center : {
                lat : latlng.getLat(),
                lng : latlng.getLng(),
              },
              isPanto: false,
            });

          }}
        >
          {/* 유저 */}
          {
            location &&
            <UserMarker
              clickable={true}
              position={{lat : location.latitude, lng : location.longitude}}
            />
          }

          {/* 마커 */}
          {
            markers.map((e)=>(
              !bookMark ?
              <BlossomMarker
                key={`bloosom-${e.lat},${e.lng}`}
                position={{ lat: e.lat, lng: e.lng }}
                onClick={()=>{
                  // 인포창은 나오게
                  dispatch(yChange(0));
                  dispatch(TourChange(false));
                  dispatch(InfoChange(true));
                }}
              />
              :
              <BookMarker
                key={`bookMark-${e.lat},${e.lng}`}
                position={{ lat: e.lat, lng: e.lng }}
                onClick={()=>{
                  // 인포창은 나오게
                  dispatch(yChange(0));
                  dispatch(TourChange(false));
                  dispatch(InfoChange(true));
                }}
              />
            ))
          }

        </Map>

        <SpotIntro getPostion={getPostion}/>

        <Navigation/>

      </main>
      <SpotView/>
    </>
  )
}