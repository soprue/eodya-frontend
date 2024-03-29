import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import Input from "../../components/common/input/Input";
import Navigation from "../../components/common/menu/Navigation";
import { useCallback, useEffect, useState } from "react";
import BlossomMarker from "../../components/common/marker/BlossomMarker";
import { SpotView } from "../../components/main/SpotView";
import { LocationBtn } from "../../components/main/Btn/LocationBtn";
import { MainBookMarkBtn } from "../../components/main/Btn/MainBookMarkBtn";
import { getCurrentLocation } from "../../utils/mapLocation/getCurrentLocation";
import { TourList } from "../../components/main/TourList";
import { ListLayout } from "../../components/main/ListLayout";
import { useAppDispatch } from "../../store/hooks";
import { open } from "../../store/features/spotView/slice";
import { useWatchLocation } from "../../hook/mapLocation/useWatchLocation";
import { BookMarkBtn } from "../../components/common/btn/BookMarkBtn";
import BookMarker from "../../components/common/marker/BookMarker";

export default function Main() {

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

    const {center} = result;
    if(!center) return;
    setState({center,isPanto : true});

  },[]);
  useEffect(()=>{ getPostion(); },[]);

  // 현재위치 계속 가져오기
  const {location,error} = useWatchLocation();

  useEffect(()=>{

    console.log(location,error);

  },[location]);

  return (
    <>
      <main className="h-screen overflow-hidden relative">

        <div className="absolute z-50 w-full top-[30px] px-4">
          <Input type="text" placeholder="장소를 검색해 보세요"/>
          <MainBookMarkBtn/>
        </div>

        <Map
          center={state.center}
          isPanto={state.isPanto}
          style={{ width: "100%", height : "100%" }}
          level={5}
          onCenterChanged={(map)=>{
            const latlng = map.getCenter();
            setState({
              center : {
                lat : latlng.getLat(),
                lng : latlng.getLng(),
              },
              isPanto: false,
            });
            // setTourHide(true);
          }}
        >
          <MarkerClusterer
            averageCenter={true}
            minLevel={10}
          >
            
            {/* 나 */}
            {
              location &&
              <MapMarker
                position={{lat : location.latitude, lng : location.longitude}}
              />
            }

            {/* 벚꽃 */}
            <BlossomMarker
              position={{ lat: 33.55635, lng: 126.795841 }}
              onClick={(e)=>{
                console.log(e);
                // setSmallOpen(true);
              }}
            />
          </MarkerClusterer>
        </Map>

        <Test getPostion={getPostion}/>

        <Navigation/>

      </main>
      <SpotView/>
    </>
  )
}

function Test({getPostion} : {getPostion : any}){

  const [tourOpen,setTourOpen] = useState(false);

  const dispatch = useAppDispatch();

  const [naviHide,setNaviHide] = useState(false);
  const [move,setMove] = useState(false);
  const [y,setY] = useState(0);

  const onTouchStart :React.TouchEventHandler<HTMLDivElement> = () => {
    if(tourOpen){
      setMove(true);
    }
  }

  const onTouchEnd :React.TouchEventHandler<HTMLDivElement> = (e) => {

    if(tourOpen){

      if(move){

        if(y < 50){
          setY(18);
        }
  
        if(y > 50){
          setY(85);
        }
  
        setMove(false);
  
      }

    }

  }

  const onTouchMove :React.TouchEventHandler<HTMLDivElement> = (e) => {

    if(tourOpen){
      if(move){

        const touch = e.touches[0];
        const {clientY} = touch;
  
        const y = clientY/window.innerHeight * 100;
  
        if(y < 18){
          setMove(false);
          return;
        }
  
        setY(Math.ceil(y));
  
      }
    }

  }

  useEffect(()=>{

    if(tourOpen){
      if(y < 50){
        setNaviHide(true);
      }else{
        setNaviHide(false);
      }
    }

  },[y,tourOpen]);

  useEffect(()=>{

    if(tourOpen){
      setY(85);
    }

  },[tourOpen]);

  return (
    <div
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{transform : `translateY(${y}%)`}}
      className={`absolute bottom-[70px] z-50 w-full ${move ? "cursor-grab" : "transition-transform duration-300"}`}
    >
      <div className={`absolute bottom-full left-5 mb-5 z-20 transition-transform duration-500 ${naviHide ? "translate-y-[calc(100%+20px)]": ""}`}>
        <LocationBtn onClick={getPostion}/>
      </div>
      {/* <TourList/> */}
      {/* <div
        onClick={()=>{
          dispatch(open());
        }}
        className="pt-4 bg-white rounded-t-[10px] rounded-r-[10px]">
        {
          [
            {
              placeState : "만개",
              image : [0,1]
            }
          ].map((e,i)=><ListLayout item={e} key={i}/>)
        }
      </div> */}
    </div>
  )
}