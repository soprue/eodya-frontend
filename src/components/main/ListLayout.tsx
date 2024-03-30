import { BookMarkBtn } from "../common/btn/BookMarkBtn";
import FlowerTag from "../common/tag/FlowerTag";

// 스팟선택
export const ListLayout = ({
  item,
  onClick,
}: {
  item: { placeState: string; image: number[] };
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div className="bg-white p-4 font-pretendard" onClick={onClick}>
      <div className="relative">
        <div className="absolute left-[10px] top-[10px] z-20 leading-none">
          <FlowerTag placeState={item.placeState} />
        </div>
        <div
          className={`grid grid-cols-${item.image.length} gap-1 overflow-hidden rounded-lg`}
        >
          {item.image.map((e, i) => (
            <div className="relative h-40 w-full" key={i}>
              <img
                className="absolute left-0 top-0 h-full w-full object-cover object-center"
                src="https://picsum.photos/1280/720"
                alt="스팟 이미지"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between">
        <div className="leading-none tracking-custom">
          <dl>
            <dt className="text-base font-bold text-gray-950">애기능 동산 </dt>
            <dd className="mt-1 text-sm font-normal leading-[21px]">
              서울 성복구 안암로 73-15
            </dd>
          </dl>
          <p className="mt-1 text-[13px] font-semibold leading-[13px] text-info-300">
            820m
          </p>
        </div>
        <BookMarkBtn status={false} placeId="1" />
      </div>
    </div>
  );
};
