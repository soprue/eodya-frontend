import { useState } from "react";

import TopBar from "../../components/common/menu/TopBar";
import SpotMap from "../../components/new/spot/SpotMap";
import SpotInfo from "../../components/new/spot/SpotInfo";
import SpotSearch from "../../components/new/spot/SpotSearch";
import { useNavigate } from "react-router-dom";

function NewSpotPage() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (step === 1) {
      navigate(-1);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const handleSpotMapChange = (data: any) => {
    console.log(1);
    // setFormValues((prevValues) => ({
    //   ...prevValues,
    //   data,
    // }));
  };

  const handleSpotInfoChange = (data: any) => {};

  return (
    <main className="h-dvh w-full">
      <TopBar canClose={step >= 3 && true} onBack={handleBackClick}>
        <div className="flex h-full items-center justify-center font-medium">
          스팟 등록
        </div>
      </TopBar>

      <div className="h-[calc(100%-56px)] w-full">
        {step === 1 && (
          <SpotMap onNext={handleSpotMapChange} setStep={setStep} />
        )}
        {step === 2 && <SpotSearch />}
        {step === 3 && <SpotInfo onNext={handleSpotInfoChange} />}
        {step === 4 && <></>}
      </div>
    </main>
  );
}

export default NewSpotPage;
