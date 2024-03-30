import { useCallback, useEffect, useState } from "react";
import { Map, MarkerClusterer } from "react-kakao-maps-sdk";
import Input from "../../components/common/input/Input";
import Navigation from "../../components/common/menu/Navigation";
import BlossomMarker from "../../components/common/marker/BlossomMarker";
import { SpotView } from "../../components/main/SpotView";
import { MainBookMarkBtn } from "../../components/main/Btn/MainBookMarkBtn";
import { getCurrentLocation } from "../../utils/mapLocation/getCurrentLocation";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useWatchLocation } from "../../hook/mapLocation/useWatchLocation";
import BookMarker from "../../components/common/marker/BookMarker";
import UserMarker from "../../components/common/marker/UserMarker";
import { change as yChange  } from "../../store/features/main/spotInfo/ySlice";
import { change as TourChange } from "../../store/features/main/tourList/openSlice";
import { change as InfoChange  } from "../../store/features/main/spotInfo/InfoSlice";
import { getMarker, getBookMarker } from "../../store/features/main/marker/markerSlice";
import { SpotIntro } from "../../components/main/SpotIntro";
import { getPlace } from "../../store/features/main/spotInfo/InfoPlace";
import { getTourPlace } from "../../store/features/main/tourList/tourPlace";

export default function Main() {

  const dispatch = useAppDispatch();
  const {userInfo} = useAppSelector(state=>state.auth);
  const [bookMark,setBookMark] = useState(false);

  // 마커 fetch
  const {markers} = useAppSelector(state=>state.mainMarker);
  // 마커 가져오기
  useEffect(()=>{ 

    if(!userInfo) return;
    dispatch(getMarker(userInfo.token)); 

  },[bookMark,userInfo]);

  // 지도 초기위치 설정
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 13, lng: 14 },
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
  useEffect(()=>{ getPostion(); setTimeout(()=>getTourList(),200) },[]);

  // 현재 위치를 토대로 근처의 명소 가져오기
  const getTourList = ()=>{

    if(!userInfo) return;

    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.coord2Address(state.center.lng,state.center.lat, (result,status)=>{
      if(status === kakao.maps.services.Status.OK){
        dispatch(
          getTourPlace({
            token : userInfo.token, 
            address : result[0].address.region_1depth_name,
            page : 1 
          })
        );
      }else{
        dispatch(TourChange(false));
      }

    })

  }

  // 현재위치 watch
  const {location} = useWatchLocation();

  return (
    <>
      <main className="h-screen overflow-hidden relative">

        {/* 검색버튼 */}
        <div className="absolute z-50 w-full top-[30px] px-4">
          <Input type="text" placeholder="장소를 검색해 보세요"/>
          <MainBookMarkBtn bookMark={bookMark} setBookMark={setBookMark}/>
        </div>

        {/* 맵 */}
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
            markers.map((e,i)=>(
              <BlossomMarker
                key={i+e.x+e.y}
                position={{ lat: e.x, lng: e.y }}
                onClick={()=>{
                  if(!userInfo) return;
                  // 인포창 나오게
                  dispatch(yChange(0));
                  dispatch(TourChange(false));
                  dispatch(InfoChange(true));
                  // info 데이터
                  dispatch(getPlace({token : userInfo.token, placeId : e.placeId}))
                }}
              />
            ))
          }

        </Map>

        {/* 마커 관련 명소 */}
        <SpotIntro getPostion={getPostion} getTourList={getTourList}/>

        {/* 네비게이션바 */}
        <Navigation/>

      </main>
      <SpotView/>
    </>
  )
}