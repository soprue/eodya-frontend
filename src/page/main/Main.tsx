import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Map, MarkerClusterer } from "react-kakao-maps-sdk";

import Input from "../../components/common/input/Input";
import Navigation from "../../components/common/menu/Navigation";
import BlossomMarker from "../../components/common/marker/BlossomMarker";
import { SpotView } from "../../components/main/SpotView";
import { LocationBtn } from "../../components/main/Btn/LocationBtn";
import { SpotSmall } from "../../components/main/SpotSmall";
import { MainBookMarkBtn } from "../../components/main/Btn/MainBookMarkBtn";
import { getCurrentLocation } from "../../utils/mapLocation/getCurrentLocation";
import { logout } from "../../store/features/auth/authSlice";

export default function Main() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 33.450701, lng: 126.570667 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  });

  const getPostion = useCallback(async () => {
    const result = await getCurrentLocation();

    if (!result) return;

    const { center, error } = result;
    if (!center) return;
    setState({ center, isPanto: true });
  }, []);

  useEffect(() => {
    getPostion();
  }, []);

  const [viewOpen, setViewOpen] = useState(false);
  const [smallOpen, setSmallOpen] = useState(false);

  return (
    <>
      <main className="h-screen">
        <div className="absolute top-[30px] z-50 w-full px-4">
          <Input type="text" placeholder="장소를 검색해 보세요" />
          <MainBookMarkBtn />

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
          style={{ width: "100%", height: "100%" }}
          level={5}
          onCenterChanged={(map) => {
            const latlng = map.getCenter();
            setState({
              center: {
                lat: latlng.getLat(),
                lng: latlng.getLng(),
              },
              isPanto: false,
            });
          }}
        >
          <MarkerClusterer averageCenter={true} minLevel={10}>
            <BlossomMarker
              position={{ lat: 33.55635, lng: 126.795841 }}
              onClick={() => {
                setSmallOpen(true);
              }}
            />
          </MarkerClusterer>
        </Map>

        <div className="absolute bottom-[70px] z-50 w-full">
          <div className="mb-5 px-4">
            <LocationBtn onClick={getPostion} />
          </div>
          {smallOpen && <SpotSmall onClick={() => setViewOpen(!viewOpen)} />}
        </div>

        <Navigation />
      </main>
      {viewOpen && <SpotView />}
    </>
  );
}
