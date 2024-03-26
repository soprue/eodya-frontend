import { useState } from "react";

import TopBar from "../../components/common/menu/TopBar";
import SpotSearch from "../../components/new/spot/SpotSearch";
import SpotInfo from "../../components/new/spot/SpotInfo";

function NewSpotPage() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});

  const handleSpotSearchChange = (data: any) => {
    console.log(1);
  };

  const handleSpotInfoChange = (data: any) => {};

  return (
    <main className="h-dvh w-full">
      <TopBar>
        <div className="flex h-full items-center justify-center font-medium">
          스팟 등록
        </div>
      </TopBar>

      <div>
        {step === 1 && <SpotSearch onNext={handleSpotSearchChange} />}
        {step === 2 && <SpotInfo onNext={handleSpotInfoChange} />}
        {step === 3 && <></>}
      </div>
    </main>
  );
}

export default NewSpotPage;
