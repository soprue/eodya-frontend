import Btn from "../../common/btn/Btn";

interface SpotDoneProps {
  onNext: (data: any) => void;
  name: string;
  address: string;
}

function SpotDone({ onNext, name, address }: SpotDoneProps) {
  return (
    <div className="flex h-full flex-col justify-between p-4">
      <div>
        <div className="border-b border-gray-200 py-6">
          <p className="font-bold">{name}</p>
          <span className="text-sm">{address}</span>
        </div>

        <div className="pt-[80px]">
          <div className="text-center">
            <p className="mb-2 text-lg font-semibold">{name}</p>
            <span className="text-sm">스팟을 등록했어요!</span>
          </div>
        </div>
      </div>

      <div className="w-full py-3">
        <Btn className={`!bg-gray-950}`} onClick={onNext}>
          완료
        </Btn>
      </div>
    </div>
  );
}

export default SpotDone;
