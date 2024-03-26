import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import Input from "../../components/common/input/Input";
import Navigation from "../../components/common/menu/Navigation";
import {ReactComponent as BookmarkSVG} from "../../assets/image/icon/bookmark.svg";
import {ReactComponent as LocationSVG} from "../../assets/image/icon/location.svg";
import useCurrentLocation from "../../hook/mapLocation/useCurrentLocation";

export default function Main() {

  const {location,error} = useCurrentLocation();

  return (
    <main className="h-screen">
      <div className="absolute z-50 w-full top-[30px] px-4">
        <Input type="text" placeholder="장소를 검색해 보세요"/>
        <button className="w-10 h-10 rounded-lg bg-white mt-3 flex items-center justify-center">
          <BookmarkSVG className="fill-primary"/>
        </button>
      </div>
      {
        !error ?
        <Map
          center={{ lat: location.latitude, lng: location.longitude }}
          style={{ width: "100%", height : "100%" }}
          level={5}
        >
          <MarkerClusterer
            averageCenter={true}
            minLevel={10}
          >
            <MapMarker
              position={{ lat: 33.55635, lng: 126.795841 }}
            />
          </MarkerClusterer>
        </Map>
        : null
      }
      <LocationBtn/>
      <Navigation/>
    </main>
  )
}



const LocationBtn = () => {

/*   const onClick = ()=>{
    const { geolocation } = navigator;

    // 성공했을경우 success 핸들링
    const handleSuccess : PositionCallback = (pos)=>{
      const {latitude,longitude} = pos.coords; // https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition
      setLoaction({
          latitude,
          longitude
      });
    }

    //실패했을경우 error 핸들링
    const handleError :PositionErrorCallback = ( error ) =>{
      const {code,message} = error;
      setError({code,message});
    }

    if(!geolocation){
      setError({message : "Geolocation is not supported."});
      return;
    }

    geolocation.getCurrentPosition(handleSuccess,handleError,option)
  } */

  return (
    <button className="w-11 h-11 rounded-full flex items-center justify-center absolute z-50 bg-white shadow-[0px_0px_3px_0px_#00000040] bottom-[90px] left-4">
      <LocationSVG/>
    </button>
  )

}