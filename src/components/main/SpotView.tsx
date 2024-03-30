import { useState } from "react";
import { Link } from "react-router-dom";

import TopBar from "../common/menu/TopBar";
import { Reivew } from "./Reivew";
import { ReactComponent as BookmarkOutline } from "../../assets/image/icon/bookmark_outline.svg";
import { ReactComponent as Bookmark } from "../../assets/image/icon/bookmark.svg";
import FlowerTag from "../common/tag/FlowerTag";
import ShareBtn from "../common/btn/Share/ShareBtn";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { close } from "../../store/features/main/spotView/slice";

// 스팟상세
export const SpotView = () => {
  const [bookmark, setBookmark] = useState(false);

  const viewShow = useAppSelector((state) => state.spotView);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`${!viewShow ? "translate-x-full" : ""} absolute left-0 top-0 z-50 w-full bg-gray-100 font-pretendard transition-transform duration-300`}
    >
      <div className="relative h-screen overflow-y-auto scrollbar-hide">
        <TopBar
          className="!sticky left-0 top-0 z-30 box-border w-full max-w-xl bg-gradient-to-b from-[rgba(0,0,0,0.15)] to-transparent to-[82.14%]"
          prevClassName="fill-white"
          onBack={() => {
            dispatch(close());
          }}
        >
          <nav className="absolute right-4 top-1/2 flex -translate-y-1/2">
            <button onClick={() => setBookmark(!bookmark)}>
              {bookmark ? (
                <BookmarkOutline className="fill-white" />
              ) : (
                <Bookmark className="fill-white" />
              )}
            </button>
            <ShareBtn className="ml-2 fill-white" />
          </nav>
        </TopBar>

        <div className="sticky top-0 -mt-14 w-full after:block after:pb-[100%]">
          <img
            className="absolute left-0 top-0 h-full w-full object-cover object-top"
            src="https://picsum.photos/1280/720"
            alt="스팟 이미지"
          />
        </div>

        <div className="relative z-10 bg-gray-100">
          <div className="flex items-center justify-between bg-white px-4 pb-5 pt-5">
            <dl>
              <dt className="flex items-start text-xl font-bold tracking-custom text-gray-950">
                애기능 동산{" "}
                <div className="ml-2 inline-block leading-none">
                  <FlowerTag placeState="개화" />
                </div>
              </dt>
              <dd className="mt-2 text-sm font-normal leading-[21px]  tracking-custom">
                서울 성복구 안암로 73-15{" "}
                <span className="text-[13px] font-semibold leading-none text-info-300">
                  820m
                </span>
              </dd>
            </dl>
            <Link
              to={"/new/review"}
              className={`flex h-8 w-[87px] items-center justify-center rounded-full bg-primary text-xs font-semibold text-white`}
            >
              후기 남기기
            </Link>
          </div>

          <div className="mt-2 bg-white px-4 py-6 ">
            <p className="mb-3 text-sm font-normal tracking-custom">
              후기 <span className="text-primary">14</span>개
            </p>
            {[
              {
                placeState: "만개",
                image: [0, 1],
              },
              {
                placeState: "개화",
                image: [0],
              },
              {
                placeState: "내년에 만나요",
                image: [0, 1],
              },
              {
                placeState: "개화",
                image: [0],
              },
            ].map((e, i) => (
              <Reivew key={i} item={e} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
