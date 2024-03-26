import { Map, MarkerClusterer } from "react-kakao-maps-sdk";
import Input from "../../components/common/input/Input";
import Navigation from "../../components/common/menu/Navigation";
import {ReactComponent as BookmarkSVG} from "../../assets/image/icon/bookmark.svg";
import {ReactComponent as LocationSVG} from "../../assets/image/icon/location.svg";
import { useState } from "react";
import BlossomMarker from "../../components/common/marker/BlossomMarker";

export default function Main() {

  // const {location,error} = useCurrentLocation();

  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 33.450701, lng: 126.570667 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  })

  return (
    <main className="h-screen">
      <div className="absolute z-50 w-full top-[30px] px-4">
        <Input type="text" placeholder="장소를 검색해 보세요"/>
        <button className="w-10 h-10 rounded-lg bg-white mt-3 flex items-center justify-center">
          <BookmarkSVG className="fill-primary"/>
        </button>
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
          })
        }}
      >
        <MarkerClusterer
          averageCenter={true}
          minLevel={10}
        >
          <BlossomMarker
            position={{ lat: 33.55635, lng: 126.795841 }}
          />
        </MarkerClusterer>
      </Map>
      <LocationBtn onClick={()=>{
        setState({center : {lat: 33.55635, lng: 126.795841} ,isPanto : true})}
      }/>
      <Navigation/>
    </main>
  )
}



// 내 위치로 다시 이동
const LocationBtn = ({onClick} : {onClick?: React.MouseEventHandler<HTMLButtonElement>}) => {
  return (
    <button onClick={onClick} className="w-11 h-11 rounded-full flex items-center justify-center absolute z-50 bg-white shadow-[0px_0px_3px_0px_#00000040] bottom-[90px] left-4">
      <LocationSVG/>
    </button>
  )
}