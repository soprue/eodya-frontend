interface SearchItemProps {
  data: any;
  handleSelectSpot: (e: React.MouseEvent<HTMLLIElement>) => void;
}

function SearchItem({ data, handleSelectSpot }: SearchItemProps) {
  return (
    <li
      className="flex cursor-pointer items-center justify-between py-5"
      data-lat={data.y}
      data-lng={data.x}
      data-name={data.place_name}
      data-address={data.address_name}
      onClick={handleSelectSpot}
    >
      <div>
        <div className="flex items-center font-bold">
          {data.place_name}
          <span className="ml-2 flex h-[18px] items-center justify-center rounded bg-primary px-1.5 text-[10px] font-semibold text-white">
            만개
          </span>
        </div>
        <span className="text-sm text-gray-950">{data.address_name}</span>
      </div>

      <div>
        <button
          className="box-border flex h-8 w-[87px] items-center rounded-full bg-primary px-4 py-2.5 text-xs text-white"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          후기 남기기
        </button>
      </div>
    </li>
  );
}

export default SearchItem;
