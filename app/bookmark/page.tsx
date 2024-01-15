/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import BookmarkListData from "@/components/PhotoList/BookmarkListData";
import TotalListData from "@/components/PhotoList/totalDataList";
import { photoApis } from "@/components/apis/api";
import {
  bookMarkListState,
  photoState,
  totalState,
} from "@/components/atom/atom";
import { select } from "@/components/types/type";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

const BookMark = () => {
  const [category, setCategory] = useState("bookmark");
  const setPhotoList = useSetRecoilState(photoState);
  const setTotalList = useSetRecoilState(totalState);
  useEffect(() => {
    const PhotoListHandler = async () => {
      try {
        const res = await photoApis.photoList();
        setPhotoList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const CollectionHandler = async () => {
      try {
        const res = await photoApis.photoCollections();

        setPhotoList(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const TotalHandler = async () => {
      try {
        const res = await photoApis.photoTotal();
        setTotalList(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const BookMarkHandler = () => {
      setPhotoList([]);
    };

    if (category === "photo") {
      PhotoListHandler();
    } else if (category === "collections") {
      CollectionHandler();
    } else if (category === "total") {
      TotalHandler();
    } else {
      BookMarkHandler();
    }
  }, [category]);

  const CategoryHandler = async (item: string) => {
    // 케터고리 기능
    setCategory(item); //카테고리 업데이트
  };

  return (
    <section className="h-screen">
      <div className="w-full flex justify-center items-center sm:space-x-10 space-x-3 md:mx-auto mx-2.5 mt-7 mb-3.5  text-slate-400 font-semibold font-sans">
        {select.map((item) => {
          return (
            <div
              key={item.id}
              className={
                category === item.en
                  ? "text-black cursor-pointer"
                  : "cursor-pointer"
              }
              onClick={() => CategoryHandler(item.en)}
            >
              {item.category}
            </div>
          );
        })}
      </div>
      {category !== "total" ? (
        <div className="container my-12 mx-auto px-4 md:px-12 hover:bg-gray-50">
          <BookmarkListData category={category} />
        </div>
      ) : (
        <div className="my-12 mx-auto px-4 md:px-12">
          <TotalListData />
        </div>
      )}
    </section>
  );
};

export default BookMark;
