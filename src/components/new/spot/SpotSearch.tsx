import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import Input from "../../common/input/Input";
import Spinner from "../../common/spinner/Spinner";

interface SpotSearchProps {}

function SpotSearch() {
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState<number>(0);
  const [searchResults, setSearchResults] =
    useState<kakao.maps.services.PlacesSearchResult>([]);
  const [isInitialSearch, setIsInitialSearch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1);
    setSearchResults([]);
    setIsInitialSearch(false);
    fetchSearchResults(page);
    setIsLoading(true);
  };

  const fetchSearchResults = (page: number) => {
    if (!hasMore) return; // 다음 페이지가 없다면 요청을 중단

    const ps = new kakao.maps.services.Places();
    const options = { page };

    ps.keywordSearch(
      inputValue.trim(),
      (data, status, _pagination) => {
        // console.log(_pagination);
        if (status === kakao.maps.services.Status.OK) {
          setTimeout(() => {
            // console.log(page, options, data);
            setSearchResults((prevResults) => [...prevResults, ...data]);
            setIsLoading(false);
            setHasMore(_pagination.hasNextPage);
          }, 500);
        } else {
          setIsLoading(false);
        }
      },
      options,
    );
  };

  useEffect(() => {
    if (inputValue.trim() && page >= 1 && !isInitialSearch) {
      fetchSearchResults(page);
    }
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.5 },
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, [hasMore]);

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
        {isInitialSearch == true ? (
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
        ) : !isLoading ? (
          <li className="py-6 text-center text-sm text-gray-500">
            검색 결과가 없습니다.
          </li>
        ) : null}

        {isLoading && page >= 1 && (
          <div className="mt-5 flex h-[600px] w-full items-center justify-center">
            <Spinner />
          </div>
        )}

        <div
          ref={loader}
          className="flex h-[100px] w-full items-center justify-center"
        >
          &nbsp;
        </div>
      </ul>
    </div>
  );
}

export default SpotSearch;
