import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/common/menu/TopBar";
import SpotInfo from "../../components/new/SpotInfo";
import SpotStatus from "../../components/new/SpotStatus";
import SpotDone from "../../components/new/SpotDone";
import SpotMore from "../../components/new/review/SpotMore";

const mock = {
  name: "애기능 동산",
  address: "서울 성북구 안암로 73-15",
  lat: 33.450701,
  lng: 126.570667,
  comments: `대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다.
  새로운 회계연도가 개시될 때까지 예산안이 의결되지
  못한 때에는 정부는 국회에서 예산안이 의결될 때까지
  다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.`,
  images: [],
  status: "만개",
};

const LAST_STEP = 4;

function NewReviewPage() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    name: mock.name,
    address: mock.address,
    lat: mock.lat,
    lng: mock.lng,
    comments: "",
    images: [],
    status: null,
  });
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (step === 1) {
      navigate(-1);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const handleSpotInfoChange = (data: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...data,
    }));

    setStep((prev) => prev + 1);
  };

  const handleSpotStatusChange = (data: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      status: data,
    }));

    setStep((prev) => prev + 1);
  };

  const handleSpotMoreChange = (data: any) => {
    console.log(formValues);
    setFormValues((prevValues) => ({
      ...prevValues,
      ...data,
    }));

    setStep((prev) => prev + 1);
  };

  const handleUpload = () => {
    // TODO: 마이 페이지 제보 화면으로 이동
    console.log(formValues);
  };

  return (
    <main className="h-dvh w-full">
      {step !== LAST_STEP && (
        <TopBar canClose={true} onBack={handleBackClick}>
          <div className="flex h-full items-center justify-center font-medium">
            후기 남기기
          </div>
        </TopBar>
      )}

      <div
        className={`${step !== LAST_STEP ? "h-[calc(100%-56px)] bg-white" : "h-full bg-gray-100"} w-full`}
      >
        {step === 1 && (
          <SpotInfo
            onNext={handleSpotInfoChange}
            name={formValues.name}
            address={formValues.address}
            type="review"
          />
        )}
        {step === 2 && (
          <SpotStatus
            onNext={handleSpotStatusChange}
            name={formValues.name}
            address={formValues.address}
          />
        )}
        {step === 3 && (
          <SpotMore
            onNext={handleSpotMoreChange}
            name={formValues.name}
            address={formValues.address}
          />
        )}
        {step === LAST_STEP && (
          <SpotDone
            onNext={handleUpload}
            name={formValues.name}
            address={formValues.address}
            type="review"
            state={formValues.status}
          />
        )}
      </div>
    </main>
  );
}

export default NewReviewPage;
