import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/common/menu/TopBar";
import SpotMap from "../../components/new/spot/SpotMap";
import SpotInfo from "../../components/new/spot/SpotInfo";
import SpotStatus from "../../components/new/spot/SpotStatus";
import SpotDone from "../../components/new/spot/SpotDone";

function NewSpotPage() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    lat: 33.450701,
    lng: 126.570667,
    comments: "",
    images: [],
    status: "",
  });
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (step === 1) {
      navigate(-1);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const handleSpotMapChange = (data: any) => {
    const { isPanto, ...restData } = data;
    setFormValues((prevValues) => ({
      ...prevValues,
      ...restData,
    }));

    setStep((prev) => prev + 1);
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

  const handleUpload = () => {
    // TODO: 마이 페이지 제보 화면으로 이동
    console.log(formValues);
  };

  return (
    <main className="h-dvh w-full">
      <TopBar canClose={step >= 2 && true} onBack={handleBackClick}>
        <div className="flex h-full items-center justify-center font-medium">
          새로운 스팟 등록
        </div>
      </TopBar>

      <div className="h-[calc(100%-56px)] w-full">
        {step === 1 && (
          <SpotMap onNext={handleSpotMapChange} formValues={formValues} />
        )}
        {step === 2 && (
          <SpotInfo
            onNext={handleSpotInfoChange}
            name={formValues.name}
            address={formValues.address}
          />
        )}
        {step === 3 && (
          <SpotStatus
            onNext={handleSpotStatusChange}
            name={formValues.name}
            address={formValues.address}
          />
        )}
        {step === 4 && (
          <SpotDone
            onNext={handleUpload}
            name={formValues.name}
            address={formValues.address}
          />
        )}
      </div>
    </main>
  );
}

export default NewSpotPage;
