import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DaumPostcodeEmbed from "react-daum-postcode";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

declare global {
  interface Window {
    kakao: any;
  }
}

interface SpotInfoProps {
  previewUrl: any;
  onNext: (data: any) => void;
}

function SpotInfo({ previewUrl, onNext }: SpotInfoProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    onNext(data);
  };

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress(fullAddress);
    setIsOpen(false);

    // 주소-좌표 변환 객체
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(fullAddress, (result: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setPosition({ lat: result[0].y, lng: result[0].x });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <img src={previewUrl} alt="미리보기" />
        <div>
          <input
            {...register("name", { required: true })}
            placeholder="스팟명"
          />
          {errors.name && <p>스팟명을 입력해주세요.</p>}

          <input
            readOnly
            onClick={() => setIsOpen((val) => !val)}
            value={address}
            placeholder="주소를 검색해 주세요."
            {...register("address", { required: true })}
            className="col-span-2 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
        </div>

        <div>
          {position != null && (
            <Map
              center={{ lat: position.lat, lng: position.lng }}
              style={{ width: "400px", height: "400px" }}
              level={3}
            >
              <CustomOverlayMap
                position={{ lat: position.lat, lng: position.lng }}
              >
                <div className="overlay">Here!</div>
              </CustomOverlayMap>
            </Map>
          )}
        </div>
        <button type="submit">다음</button>
      </div>

      {isOpen && (
        <div className="col-span-full w-full rounded-md border border-gray-300 p-2 md:col-span-3">
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </div>
      )}
    </form>
  );
}

export default SpotInfo;
