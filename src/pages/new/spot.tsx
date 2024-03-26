import { useState } from "react";

import Navigation from "../../components/common/menu/Navigation";
import ImageUpload from "../../components/new/spot/ImageUpload";
import SpotInfo from "../../components/new/spot/SpotInfo";
import StatusInfo from "../../components/new/spot/StatusInfo";
import Review from "../../components/new/spot/Review";

function NewSpotPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("새로운 스팟");
  const [formValues, setFormValues] = useState({
    userId: null,
  });
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (image: any) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      image,
    }));
    setStep((prev) => prev + 1);
  };

  const handleSpotInfoChange = (data: any) => {};

  const handleStatusInfoChange = (data: any) => {};

  const handleReviewChange = (data: any) => {};

  return (
    <main className="h-dvh">
      <div>
        <p>{name}</p>
      </div>

      <div>
        {step === 1 && (
          <ImageUpload
            setPreviewUrl={setPreviewUrl}
            onNext={handleImageChange}
          />
        )}
        {step === 2 && (
          <SpotInfo previewUrl={previewUrl} onNext={handleSpotInfoChange} />
        )}
        {step === 3 && (
          <StatusInfo previewUrl={previewUrl} onNext={handleStatusInfoChange} />
        )}
        {step === 4 && (
          <Review previewUrl={previewUrl} onNext={handleReviewChange} />
        )}
      </div>

      <Navigation />
    </main>
  );
}

export default NewSpotPage;
