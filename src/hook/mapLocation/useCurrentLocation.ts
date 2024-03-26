import { useEffect, useState } from "react";
import { LocationError, LocationSuccess } from "../../types/LocationProps";

const option = {
    enableHighAccuracy: true,
    timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
    maximumAge: 1000 * 3600 * 24, // 24 hour
}

const useCurrentLocation = () => {

    const [location,setLoaction] = useState<LocationSuccess>({latitude : 0, longitude: 0});
    const [error,setError] = useState<LocationError | null>(null);

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

    useEffect(()=>{
        const { geolocation } = navigator;

        if(!geolocation){
            setError({message : "Geolocation is not supported."});
            return;
        }

        geolocation.getCurrentPosition(handleSuccess,handleError,option)

    },[option]);

    return {location,error}

}


export default useCurrentLocation;