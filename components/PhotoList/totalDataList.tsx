import { useRecoilValue } from "recoil";
import { totalListValue } from "../atom/atom";

const TotalListData = () => {
  const totalList = useRecoilValue(totalListValue);

  return (
    <div className="overflow-x-visible relative sm:rounded-lg">
      <table className="w-full mt-3 shadow-md text-left border-collapse">
        <thead className="text-xs text-gray-700 lg:bg-[#F7FAFC] bg-gray-50 border-b-2">
          <tr>
            <th className="p-1 border-gray-300 hidden lg:table-cell">사진</th>
            <th className="p-1 border-gray-300 hidden lg:table-cell">
              포토그래퍼
            </th>
            <th className="p-1 border-gray-300 hidden lg:table-cell">
              총 사진
            </th>
            <th className="p-1 border-gray-300 hidden lg:table-cell">
              총 다운로드
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b cursor-pointer text-left lg:hover:bg-gray-50 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td className="w-full lg:w-auto lg:text-left text-gray-800 text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                사진
              </span>
              <span className="text-sm lg:p-0 px-1">{totalList?.photos}</span>
            </td>
            <td className="w-full lg:w-auto lg:text-left text-gray-800 text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                포토그래퍼
              </span>
              <span className="text-sm opacity-90 lg:p-0 px-1">
                {totalList?.photographers}
              </span>
            </td>
            <td className="w-full lg:w-auto lg:text-left text-gray-800  text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                총 사진
              </span>
              <span className="text-xs font-medium lg:p-0 px-1">
                {totalList?.total_photos}
              </span>
            </td>
            <td className="w-full lg:w-auto lg:text-left text-gray-800  text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                총 다운로드
              </span>
              <span className="text-xs font-medium lg:p-0 px-1">
                {" "}
                {totalList?.downloads}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TotalListData;
