"use client";
import PhotoListData from "@/components/PhotoList/PhotoListData";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { KeyboardEvent, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { photoState } from "@/components/atom/atom";
import { photoApis } from "@/components/apis/api";
import { selectImg } from "@/components/types/type";

const lodash = require("lodash");

export default function Home() {
  const setPhotoList = useSetRecoilState(photoState);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("edit");
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function PhotoListHandler() {
      try {
        const res = await photoApis.photoSearchList(category, page);
        const resData = res.data;
        const copy = lodash.cloneDeep(resData);

        setLoading(false);
        setPhotoList(copy.results);
        setTotalPage(res.data.total_pages);
      } catch (err) {
        console.log("Error", err);
      }
      setLoading(true);
    }
    PhotoListHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, category]);

  const onSearch = () => {
    // 검색 기능
    setCategory(keyword); // 쿼리부분을 state를 변경해줍니다.
    setPage(1); // 페이지 1로 초기화시켜줍니다.
  };

  const CategoryHandler = async (item: string) => {
    // 카테고리 기능
    if (item === "x") return;
    setCategory(item); //카테고리 업데이트
    setPage(1); //페이지 1로 state변경 해줍니다.
  };

  const checkKeycode = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      setCategory(keyword);
      setPage(1);
    }
  };

  return (
    <section className="h-full">
      <div className="overflow-x-auto w-full whitespace-nowrap flex xl:justify-center sm:space-x-10 space-x-3 :mx-auto mx-2.5 mt-7 mb-3.5  text-slate-400 font-semibold font-sans">
        {selectImg.map((item) => {
          return (
            <div
              key={item.id}
              className={
                category === item.en
                  ? "text-black cursor-pointer "
                  : item.en === "x"
                  ? ""
                  : "cursor-pointer"
              }
              onClick={() => CategoryHandler(item.en)}
            >
              {item.category}
              {category === item.en ? (
                <div className="mt-4 flex border-b-2 border-b-black "></div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div
        className="-mt-3.5 relative overflow-hidden bg-cover bg-no-repeat p-12 text-center "
        style={{
          backgroundImage: "url(/bg.png)",
          height: "400px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h1 className="mb-1 text-5xl font-bold text-left">Will Photo</h1>
              <h4 className="mb-1 text-sm font-light text-left">
                인터넷의 시각 자료 출처입니다.
              </h4>
              <h4 className="mb-3 text-sm font-light text-left">
                모든 지역에 있는 크리에이터들의 지원을 받습니다.
              </h4>
              <div className="flex">
                <input
                  className=" bg-white h-14 px-5 rounded-l-lg text-base text-black sm:w-[550px] focus:none"
                  type="search"
                  name="search"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyDown={checkKeycode}
                  placeholder="고해상도 이미지 검색"
                />
                <button
                  type="submit"
                  onClick={onSearch}
                  className="p-2 text-sm font-medium text-gray-600 bg-white rounded-r-lg hover:bg-gray-100"
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="container my-12 mx-auto px-4 md:px-12 hover:bg-gray-50">
          <PhotoListData page={page} setPage={setPage} totalPage={totalPage} />
        </div>
      ) : (
        <div className="flex h-screen justify-center my-auto items-center font-bold text-5xl">
          <AiOutlineLoading3Quarters className="animate-spin" size="50" />
        </div>
      )}
    </section>
  );
}
