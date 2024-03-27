import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Map } from "react-kakao-maps-sdk";
import { debounce } from "lodash";

import { ReactComponent as Edit } from "../../../assets/image/icon/edit.svg";
import Btn from "../../common/btn/Btn";
import BasicMarker from "../../common/marker/BasicMarker";
import { getCurrentLocation } from "../../../utils/mapLocation/getCurrentLocation";
import { LocationBtn } from "../../main/Btn/LocationBtn";
import fetchAddressAndName from "../../../utils/mapLocation/fetchAddressAndName";

interface SpotMapProps {
  onNext: (data: any) => void;
  setStep: Dispatch<SetStateAction<any>>;
}

function SpotMap({ onNext, setStep }: SpotMapProps) {
  const [values, setValues] = useState({
    name: "",
    address: "",
    lat: 33.450701,
    lng: 126.570667,
    isPanto: false,
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getPostion = useCallback(async () => {
    const result = await getCurrentLocation();
    if (!result) return;

    const { center, error } = result;
    if (!center) return;

    const data = await fetchAddressAndName(center.lat, center.lng);

    setValues((prevValues) => ({
      ...prevValues,
      lat: center.lat,
      lng: center.lng,
      address: data.addressName,
      name: data.placeName,
      isPanto: true,
    }));
  }, []);

  useEffect(() => {
    getPostion();
  }, []);

  // 마지막 위치에 대한 주소와 이름 정보를 조회하고 상태를 업데이트하는 함수
  const updateAddressAndName = async (lat: number, lng: number) => {
    const data = await fetchAddressAndName(lat, lng);
    setValues((prevValues) => ({
      ...prevValues,
      address: data.addressName,
      name: data.placeName,
      isPanto: true,
    }));
  };

  // 디바운스를 사용하여 지도 이동 완료 후 마지막 위치에 대한 정보를 업데이트
  const debouncedUpdateAddressAndName = useCallback(
    debounce(updateAddressAndName, 300),
    [],
  );

  // 지도의 중심이 변경될 때마다 디바운스 함수를 호출하여 최종 위치에 대한 정보를 업데이트
  const handleCenterChanged = (map: any) => {
    const lat = map.getCenter().getLat();
    const lng = map.getCenter().getLng();
    setValues((prevValues) => ({
      ...prevValues,
      lat,
      lng,
      isPanto: true,
    }));
    debouncedUpdateAddressAndName(lat, lng);
  };

  return (
    <div className="h-full w-full">
      <div className="h-full w-full">
        <div className="absolute left-0 top-0 h-full w-full">
          <Map
            center={{ lat: values.lat, lng: values.lng }}
            isPanto={values.isPanto}
            className="h-full w-full"
            level={3}
            onCenterChanged={handleCenterChanged}
          >
            <BasicMarker position={{ lat: values.lat, lng: values.lng }} />
          </Map>

          <div className="absolute bottom-[200px] z-10 w-full">
            <div className="mb-5 px-4">
              <LocationBtn onClick={getPostion} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 z-10 flex h-[200px] w-full flex-col justify-between bg-white px-4 py-7">
          <p className="text-xl font-semibold">이 곳을 방문했어요!</p>

          <div
            className={`flex h-[46px] w-full cursor-pointer items-center justify-between overflow-hidden rounded-[10px] bg-gray-100 px-5`}
            onClick={() => setStep(2)}
          >
            <input
              className="h-full w-[calc(100%-50px)] min-w-0 cursor-pointer bg-transparent text-base font-semibold leading-4 tracking-[-0.02em] outline-none placeholder:text-gray-300"
              value={values.name}
              readOnly
            />
            <Edit className="fill-gray-950" />
          </div>

          <Btn onClick={onNext}>이 위치 등록하기</Btn>
        </div>
      </div>
    </div>
  );
}

export default SpotMap;
