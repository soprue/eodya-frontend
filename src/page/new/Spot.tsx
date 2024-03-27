import { useState } from "react";

import TopBar from "../../components/common/menu/TopBar";
import SpotMap from "../../components/new/spot/SpotMap";
import SpotInfo from "../../components/new/spot/SpotInfo";
import { useNavigate } from "react-router-dom";

function NewSpotPage() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    lat: 33.450701,
    lng: 126.570667,
    comment: "",
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
        {step === 3 && <></>}
      </div>
    </main>
  );
}

export default NewSpotPage;
