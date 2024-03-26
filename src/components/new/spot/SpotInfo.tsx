import { useForm } from "react-hook-form";

interface SpotInfoProps {
  previewUrl: any;
  onNext: (data: any) => void;
}

function SpotInfo({ previewUrl, onNext }: SpotInfoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    onNext(data);
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
        </div>
        <button type="submit">다음</button>
      </div>
    </form>
  );
}

export default SpotInfo;
