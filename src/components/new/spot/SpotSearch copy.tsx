import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import Input from "../../common/input/Input";

interface SpotSearchProps {}

function SpotSearch() {
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState<number>(1);
  const [searchResults, setSearchResults] =
    useState<kakao.maps.services.PlacesSearchResult | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ps = new kakao.maps.services.Places();

    const options = {
      page: page,
    };

    ps.keywordSearch(
      inputValue,
      (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          setSearchResults(data);
        } else {
          setSearchResults([]);
        }
      },
      options,
    );
  };

  return (
    <div
      className={`absolute top-[56px] z-20 h-[calc(100%-56px)] w-full bg-white p-4`}
    >
      <form onSubmit={handleSearchSubmit}>
        <Input
          className="bg-gray-100"
          placeholder="장소를 검색해 보세요."
          onChange={handleInputChange}
          defaultValue={inputValue.trim()}
        />
      </form>

      <ul className="mt-4 h-[calc(100%-62px)] overflow-y-auto scrollbar-hide">
        {searchResults == null ? (
          <div className="mt-10 text-center text-sm text-gray-500">
            검색해 보세요.
          </div>
        ) : searchResults && searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <li key={index} className="cursor-pointer border-b py-6">
              <p className="font-bold">{result.place_name}</p>
              <span className="text-sm text-gray-500">
                {result.address_name}
              </span>
            </li>
          ))
        ) : (
          <li className="py-6 text-center text-sm text-gray-500">
            검색 결과가 없습니다.
          </li>
        )}
      </ul>
    </div>
  );
}

export default SpotSearch;
