import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";

import Input from "../../common/input/Input";
import Btn from "../../common/btn/Btn";

interface SpotSearchProps {
  onNext: (data: any) => void;
}

function SpotSearch({ onNext }: SpotSearchProps) {
  return (
    <>
      <div className="absolute left-0 top-0 h-full w-full">
        <Map
          center={{ lat: 37.566826, lng: 126.9786567 }}
          className="h-full w-full"
          level={3}
        >
          {/* <CustomOverlayMap position={{ lat: 37.566826, lng: 126.9786567 }}>
          <div className="overlay">Here!</div>
        </CustomOverlayMap> */}
        </Map>
      </div>

      <div className="absolute bottom-0 z-10 flex h-[200px] w-full flex-col justify-between bg-white px-4 py-7">
        <p className="text-xl font-semibold">이 곳을 방문했어요!</p>

        <Input className="bg-gray-100"></Input>

        <Btn onClick={onNext}>이 위치 등록하기</Btn>
      </div>
    </>
  );
}

export default SpotSearch;
