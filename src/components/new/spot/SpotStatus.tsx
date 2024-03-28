import { useState } from "react";

import Btn from "../../common/btn/Btn";

interface SpotStatusProps {
  onNext: (data: any) => void;
  name: string;
  address: string;
}

function SpotStatus({ onNext, name, address }: SpotStatusProps) {
  const [status, setStatus] = useState<string | null>(null);
  const isAllValid = status != null;

  const handleStatusChange = (value: string) => {
    setStatus(value);
  };

  return (
    <div className="flex h-full flex-col justify-between p-4">
      <div>
        <div className="border-b border-gray-200 py-6">
          <p className="font-bold">{name}</p>
          <span className="text-sm">{address}</span>
        </div>

        <div className="pt-[80px]">
          <div>
            <p className="mb-2 text-lg font-semibold">
              {name}의<br />꽃 상태는 어땠나요?
            </p>
            <span className="text-sm">
              이후 찾아올 분들을 위해
              <br />
              현재 꽃 상태를 알려 주세요!
            </span>
          </div>

          <div className="mt-[60px] flex justify-center gap-10">
            <div
              className="flex cursor-pointer flex-col items-center justify-center gap-4"
              onClick={() => handleStatusChange("개화")}
            >
              <div className="h-[74px] w-[74px] rounded-full bg-[#EBEBEB]">
                <img src="" alt="개화" />
              </div>
              <p className="text-sm text-gray-200">개화</p>
            </div>
            <div
              className="flex cursor-pointer flex-col items-center justify-center gap-4"
              onClick={() => handleStatusChange("만개")}
            >
              <div className="h-[74px] w-[74px] rounded-full bg-[#EBEBEB]">
                <img src="" alt="만개" />
              </div>
              <p className="text-sm text-gray-200">만개</p>
            </div>
            <div
              className="flex cursor-pointer flex-col items-center justify-center gap-4"
              onClick={() => handleStatusChange("내년에 만나요")}
            >
              <div className="h-[74px] w-[74px] rounded-full bg-[#EBEBEB]">
                <img src="" alt="내년에 만나요" />
              </div>
              <p className="text-sm text-gray-200">내년에 만나요</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-3">
        <Btn
          className={`${isAllValid ? "!bg-gray-950" : "!bg-gray-100 !text-gray-500"}`}
          disabled={!isAllValid}
          onClick={() => onNext(status)}
        >
          다음
        </Btn>
      </div>
    </div>
  );
}

export default SpotStatus;
