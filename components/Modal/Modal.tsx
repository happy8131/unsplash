/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import Link from "next/link";
import { MouseEvent } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/atom";
import { MapProps, PhotoModalProps } from "../types/type";

const ModalImg = ({ showModal, onClose }: PhotoModalProps) => {
  const [modalData, setModalData] = useRecoilState<MapProps>(modalState);

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLButtonElement).id === "wrapper") onClose();
  };

  const today = moment(new Date().toLocaleString("sv")); // 현재 날짜
  const update = moment(
    new Date(`${modalData.updated_at}`).toLocaleString("sv") // 업데이트 날짜
  );
  const day = moment.duration(today.diff(update)).asDays(); //현재 날짜 - 업데이트 날짜 = 일 수 구하기

  // const onBookMark = async (id: string) => {
  //   const copy = lodash.cloneDeep(modalData);
  //   const copyList = lodash.cloneDeep(photoList);
  //   const copyBookMarkList = lodash.cloneDeep(bookmarkList);
  //   if (copy.bookmark) {
  //     북마크가 true 면 false로 바꿔줍니다. 그리고 북마크 리스트에서도 제거 해줍니다.
  //     copy.bookmark = false;
  //     setBookMarkList(
  //       copyBookMarkList.filter((item: { id: string }) => {
  //         return id !== item.id;
  //       })
  //     );
  //   } else {
  //      false면 true로 바꿔줍니다. 그리고 북마크리스트로 푸쉬해줍니다.
  //     copy.bookmark = true;
  //     copyBookMarkList.push(copy);
  //     setBookMarkList(copyBookMarkList);
  //   }
  //   for (let i = 0; i < photoList.length; i++) {
  //     // 기존 데이터 들도 bookmark 상태를 변경해줍니다.
  //     if (id === photoList[i].id) {
  //       if (copy.bookmark) {
  //         copyList.results[i].bookmark = true;
  //       } else {
  //         copyList.results[i].bookmark = false;
  //       }
  //     }
  //   }
  //   setPhotoList(copyList);
  //   setModalData(copy);

  // };
  // console.log(modalData);
  if (!showModal) return; //false 면 모달창 띄우기 않기

  return (
    <div
      id="wrapper"
      onClick={handleClose}
      className="fixed inset-0  backdrop-blur-sm flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div className="w-7/12 h-9/12 bg-white p-5 rounded-lg">
        <div className="flex justify-between ">
          <button className="text-lg" onClick={() => onClose()}>
            X <span className="ml-5 text-lg font-bold">Evie Park</span>
          </button>
          <div className="flex justify-center items-center space-x-3">
            <button>
              {modalData.liked_by_user ? (
                <FaHeart className="text-red-500 " size="20" />
              ) : (
                <CiHeart className="text-gray-500 " size="25" />
              )}
            </button>
            <Link
              href={modalData?.links.download}
              target="_blank"
              className="p-1 border rounded-lg border-slate-300 text-slate-500 text-sm"
            >
              다운로드
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <img
            src={modalData.urls.small}
            className="w-[400px] md:h-[600px]"
            alt="image"
          />
        </div>

        <table className=" lg:ml-5 lg:w-5/12 w-full mt-5">
          <thead>
            <tr className="text-left ml-5 text-sm text-slate-500 space-x-10">
              <th>이미지 크기</th>
              <th className="ml-5">업로드</th>
              <th>다운로드</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {modalData.width} X {modalData.height}
              </td>
              <td> {Math.ceil(day)}일 전 게시됨</td>
              <td> {modalData.downloads}</td>
            </tr>
          </tbody>
        </table>

        <div className="lg:flex  lg:ml-5 mt-5 lg:text-left text-slate-600 font-base text-sm lg:space-x-7 mb-3">
          <p className="rounded-sm p-1 px-2 bg-gray-200">
            {modalData.user.name}
          </p>
          <p className="rounded-sm p-1 px-2 lg:mt-0 mt-1 bg-gray-200">
            {modalData.exif.make ? modalData.exif.make : "Photo"}
          </p>
          <p className="rounded-sm p-1 px-2 lg:mt-0 mt-1 bg-gray-200">
            {modalData.alt_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalImg;
