/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { GoMoveToTop } from "react-icons/go";
import { HiOutlinePhoto } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import ModalImg from "../Modal/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, photoListValue } from "../atom/atom";
import { MapProps } from "../types/type";
import { photoApis } from "../apis/api";

const BookmarkListData = ({ category }: { category: string }) => {
  const photoList = useRecoilValue(photoListValue);
  const [showModal, setShowModal] = useState(false);
  const [, setModalData] = useRecoilState(modalState);

  const MoveToTop = () => {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ShowModalHanlder = async (id: string) => {
    setShowModal(true);

    const res = await photoApis.photoImg(id);
    const resData = res.data;

    setModalData(resData);
  };

  if (photoList?.length === 0) {
    return (
      <div
        className="flex justify-center text-[500px] "
        style={{ color: "rgba(0,0,0,0.3)" }}
      >
        <HiOutlinePhoto />
        <p className="text-lg">No Picture</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 m-5 gap-8">
        {category === "collections"
          ? photoList?.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="relative cursor-pointer "
                  onClick={() => ShowModalHanlder(item.cover_photo?.id)}
                >
                  <img
                    className="flex flex-wrap  h-80 w-full "
                    src={item.cover_photo?.urls?.small}
                  />
                  {item.cover_photo?.liked_by_user ? (
                    <div className="absolute right-8 bottom-8">
                      <FaHeart className="absolute text-red-500 " size="25" />
                    </div>
                  ) : (
                    <div className="absolute right-8 bottom-8">
                      <CiHeart className="absolute  text-gray-100 " size="30" />
                    </div>
                  )}
                </div>
              );
            })
          : photoList.map((item: MapProps) => {
              return (
                <div
                  key={item.id}
                  className="relative  cursor-pointer "
                  onClick={() => ShowModalHanlder(item.id)}
                >
                  <img
                    className="flex flex-wrap  h-80 w-full "
                    src={item.urls?.small}
                  />
                  {item.liked_by_user ? (
                    <div className="absolute right-8 bottom-8">
                      <FaHeart className="absolute text-red-500 " size="25" />
                    </div>
                  ) : (
                    <div className="absolute right-8 bottom-8">
                      <CiHeart className="absolute  text-gray-100 " size="30" />
                    </div>
                  )}
                </div>
              );
            })}
      </div>
      <div className="h-full flex justify-end text-lg font-normal">
        <GoMoveToTop
          onClick={MoveToTop}
          className="cursor-pointer animate-bounce hover:scale-125 hover:shadow-xl shadow-xl"
          size="30"
        />
      </div>
      <ModalImg showModal={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default BookmarkListData;
