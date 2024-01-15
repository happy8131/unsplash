/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { HiOutlinePhoto } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import PageNation from "../Pagination/Pagination";
import ModalImg from "../Modal/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookmarkState, modalState, photoListValue } from "../atom/atom";
import { MapProps, PhotoListProps } from "../types/type";
import { photoApis } from "../apis/api";

const PhotoListData = ({ page, setPage, totalPage }: PhotoListProps) => {
  const photoList = useRecoilValue(photoListValue);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useRecoilState(modalState);
  const [bookmarkList, setBookMarkList] = useRecoilState(bookmarkState);

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
        {photoList?.map((item: MapProps) => {
          return (
            <div
              key={item.id}
              className="relative  cursor-pointer "
              onClick={() => ShowModalHanlder(item.id)}
            >
              <img
                className="flex flex-wrap  h-80 w-full "
                src={item.urls.small}
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
        <TfiArrowCircleUp
          onClick={MoveToTop}
          className="cursor-pointer transform transition duration-500 hover:scale-125 hover:shadow-xl shadow-xl"
          size="30"
        />
      </div>
      <div className="flex justify-center">
        <PageNation page={page} setPage={setPage} totalPage={totalPage} />
      </div>
      <ModalImg showModal={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default PhotoListData;
