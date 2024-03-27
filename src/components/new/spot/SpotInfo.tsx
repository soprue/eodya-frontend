interface SpotInfoProps {
  onNext: (data: any) => void;
  name: string;
  address: string;
}

const MAX_LENGTH = 500;

function SpotInfo({ onNext, name, address }: SpotInfoProps) {
  return (
    <div className="p-4">
      <div className="border-b border-gray-200 py-6">
        <p className="font-bold">{name}</p>
        <span className="text-sm">{address}</span>
      </div>

      <div className="relative py-5">
        <textarea
          className="h-[200px] w-full resize-none rounded-[10px] bg-[#f6f6f6] p-3 focus:outline-none"
          placeholder="장소를 방문하며 좋았던 점을 적어 주세요"
        ></textarea>
        <div className="absolute bottom-8 right-3 text-[13px] text-gray-500">
          0/500
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default SpotInfo;
