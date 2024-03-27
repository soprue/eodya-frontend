import { Map, MarkerClusterer } from "react-kakao-maps-sdk";
import Input from "../../components/common/input/Input";
import Navigation from "../../components/common/menu/Navigation";
import { useCallback, useEffect, useState } from "react";
import BlossomMarker from "../../components/common/marker/BlossomMarker";
import { SpotView } from "../../components/main/SpotView";
import { LocationBtn } from "../../components/main/Btn/LocationBtn";
import { ListLayout } from "../../components/main/ListLayout";
import { MainBookMarkBtn } from "../../components/main/Btn/MainBookMarkBtn";
import { getCurrentLocation } from "../../utils/mapLocation/getCurrentLocation";

import { TourList } from "../../components/main/TourList";

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

    const {center,error} = result;
    if(!center) return;
    setState({center,isPanto : true});

  },[]);

  useEffect(()=>{
    getPostion();
  },[]);

  const [viewOpen,setViewOpen] = useState(false);
  const [smallOpen,setSmallOpen] = useState(false);

  const [tourHide,setTourHide] = useState(false);
  const [tourOpen,setTourOpen] = useState(false);

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
            setTourHide(true);
          }}
        >
          <MarkerClusterer
            averageCenter={true}
            minLevel={10}
          >
            <BlossomMarker
              position={{ lat: 33.55635, lng: 126.795841 }}
              onClick={()=>{
                setSmallOpen(true);
              }}
            />
          </MarkerClusterer>
        </Map>

        <div className={`absolute top-0 z-50 w-full translate-y-3/4`}>
          <div className="absolute bottom-full left-5 mb-5">
            <LocationBtn onClick={getPostion}/>
          </div>
          {
            !tourHide && <TourList/>
          }
        </div>


        {/* {
          smallOpen &&
          <div className={`absolute bottom-[70px] z-50 w-full`}>
            <div className="absolute bottom-full left-5 mb-5">
              <LocationBtn onClick={getPostion}/>
            </div>
            <ListLayout onClick={()=>setViewOpen(!viewOpen)}/>
          </div>
        } */}

        <Navigation/>

      </main>
      {
        viewOpen && <SpotView/>
      }
    </>
  )
}