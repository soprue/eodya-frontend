import { Dispatch, SetStateAction, useCallback, useState } from "react";

interface ImageUploadProps {
  setPreviewUrl: Dispatch<SetStateAction<any>>;
  onNext: (image: any) => void;
}

function ImageUpload({ setPreviewUrl, onNext }: ImageUploadProps) {
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  return (
    <>
      <div>
        <input
          type="file"
          id="image"
          className="hidden"
          accept="image/*"
          onChange={handleChange}
        />
        <label htmlFor="image">사진 업로드</label>
      </div>

      <button onClick={() => onNext(image)}>다음</button>
    </>
  );
}

export default ImageUpload;
