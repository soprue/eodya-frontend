import { useState } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";

import { ReactComponent as Edit } from "../../../assets/image/icon/edit.svg";
import Btn from "../../common/btn/Btn";
import BasicMarker from "../../common/marker/BasicMarker";
import SpotSearch from "./SpotSearch";

interface SpotMapProps {
  onNext: (data: any) => void;
}

function SpotMap({ onNext }: SpotMapProps) {
  const [values, setValues] = useState({
    name: "",
    address: "",
    lat: "",
    lng: "",
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSearchClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="h-full w-full">
      <div className="h-full w-full">
        <div className="absolute left-0 top-0 h-full w-full">
          <Map
            center={{ lat: 37.566826, lng: 126.9786567 }}
            className="h-full w-full"
            level={3}
          >
            <BasicMarker position={{ lat: 37.566826, lng: 126.9786567 }} />
          </Map>
        </div>

        <div className="absolute bottom-0 z-10 flex h-[200px] w-full flex-col justify-between bg-white px-4 py-7">
          <p className="text-xl font-semibold">이 곳을 방문했어요!</p>

          <div
            className={`flex h-[46px] w-full cursor-pointer items-center justify-between overflow-hidden rounded-[10px] bg-gray-100 px-5`}
            onClick={handleSearchClick}
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

      <SpotSearch isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default SpotMap;
