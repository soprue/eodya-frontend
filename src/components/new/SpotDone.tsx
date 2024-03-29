import Btn from "../common/btn/Btn";

interface SpotDoneProps {
  onNext: (data: any) => void;
  name: string;
  address: string;
  type: "spot" | "review";
  state?: string | null;
}

function SpotDone({ onNext, name, address, type, state }: SpotDoneProps) {
  return (
    <div className="flex h-full flex-col justify-between p-4">
      <div className="flex h-[calc(100%-72px)] w-full flex-col items-center justify-center">
        <p className="text-xl font-semibold">
          {type === "spot" ? "새 스팟을 등록했어요!" : "후기를 등록했어요!"}
        </p>

        <div className="mt-5 box-border min-w-[240px] rounded-[10px] bg-white px-[30px] py-6">
          <div className="flex items-center font-bold">
            {name}
            {type === "review" && (
              <span className="ml-2 flex h-[18px] items-center justify-center rounded bg-primary px-1.5 text-[10px] font-semibold text-white">
                {state}
              </span>
            )}
          </div>
          <span className="text-sm">{address}</span>
        </div>
      </div>

      <div className="w-full py-3">
        <Btn className={`!bg-gray-950}`} onClick={onNext}>
          확인
        </Btn>
      </div>
    </div>
  );
}

export default SpotDone;
