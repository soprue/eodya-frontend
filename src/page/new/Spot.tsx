import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useAppSelector } from "../../store/hooks";
import TopBar from "../../components/common/menu/TopBar";
import SpotMap from "../../components/new/spot/SpotMap";
import SpotInfo from "../../components/new/SpotInfo";
import SpotStatus from "../../components/new/SpotStatus";
import SpotDone from "../../components/new/SpotDone";
import { FormValuesType } from "../../types/FormValuesType";

const LAST_STEP = 4;

function NewSpotPage() {
  const userInfo = useAppSelector((state) => state.auth.userInfo);

  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState<FormValuesType>({
    name: "",
    addressDetail: "",
    reviewContent: "",
    placeStatus: null,
    x: 126.570667,
    y: 33.450701,
    reviewDate: "",
    images: [],
    tag: "벚꽃",
    addressDepth1: "",
    addressDepth2: "",
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
      addressDepth1: data.addressDetail.split(" ")[0],
      addressDepth2: data.addressDetail.split(" ")[1],
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
      placeStatus: data,
    }));

    setStep((prev) => prev + 1);
  };

  const handleUpload = () => {
    const formData = new FormData();

    for (const key in formValues) {
      if (key === "images" && Array.isArray(formValues[key])) {
        formValues[key].forEach((file) => {
          formData.append(key, file);
        });
      } else {
        formData.append(key, String(formValues[key]));
      }
    }

    axios
      .post(`/api/v1/place`, formData, {
        headers: {
          Authorization: `${userInfo?.token}`,
        },
      })
      .then((res: any) => {
        console.log(res);
        // TODO: 마이 페이지 제보 화면으로 이동
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  if (!userInfo) return null;

  return (
    <main className="h-dvh w-full">
      {step > 1 && step !== LAST_STEP && (
        <TopBar canClose={step >= 2 && true} onBack={handleBackClick}>
          <div className="flex h-full items-center justify-center font-medium">
            새로운 스팟 등록
          </div>
        </TopBar>
      )}

      <div
        className={`${step > 1 && step !== LAST_STEP ? "h-[calc(100%-56px)] bg-white" : "h-full bg-gray-100"} w-full`}
      >
        {step === 1 && (
          <SpotMap onNext={handleSpotMapChange} formValues={formValues} />
        )}
        {step === 2 && (
          <SpotInfo
            onNext={handleSpotInfoChange}
            name={formValues.name}
            address={formValues.addressDetail}
            type="spot"
          />
        )}
        {step === 3 && (
          <SpotStatus
            onNext={handleSpotStatusChange}
            name={formValues.name}
            address={formValues.addressDetail}
          />
        )}
        {step === LAST_STEP && (
          <SpotDone
            onNext={handleUpload}
            name={formValues.name}
            address={formValues.addressDetail}
            type="spot"
          />
        )}
      </div>
    </main>
  );
}

export default NewSpotPage;
