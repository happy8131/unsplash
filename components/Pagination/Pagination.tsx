/* eslint-disable no-else-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/react-in-jsx-scope */
import { Dispatch, useState, SetStateAction, useEffect } from "react";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";

interface PageProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
}

const PageNation = ({ page, setPage, totalPage }: PageProps) => {
  const [pageNumberLimit] = useState(10); // 페이지 수 제한으로 페이지 수를 의미합니다
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(10); // 최대 기본 페이지 수 제한
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0); // 최소 페이지 수 제한
  const [currPage, setcurrPage] = useState(1);

  const [jump, setJump] = useState(10);

  const pagenation = [];
  if (totalPage === 0 || !totalPage) {
    pagenation.push(1);
  }
  for (let i = 1; i <= totalPage; i += 1) {
    pagenation.push(i);
  }

  useEffect(() => {
    setMaxPageNumberLimit(10);
    setMinPageNumberLimit(0);
    setPage(1);
    setcurrPage(1);
  }, [totalPage]);

  const handleClick = (pages: number) => {
    setPage(pages);
    setcurrPage(pages);
  };

  const pageButton = pagenation.map((pages) => {
    if (pages < maxPageNumberLimit + 1 && pages > minPageNumberLimit) {
      if (page === jump - 10) {
        setJump(Math.floor(page / 10) * 10);
      }

      return (
        <button
          key={pages}
          type="button"
          onClick={() => handleClick(pages)}
          className={
            pages === currPage
              ? "py-2 px-3 text-gray-800  bg-blue-200 active:text-gray-500 dark:border-gray-350 dark:bg-white-700 dark:text-black"
              : "py-2 px-3 text-gray-800 bg-white border hover:bg-blue-300 border-gray-300 hover:text-gray-600 dark:border-gray-350 dark:bg-white-700 dark:text-black"
          }
        >
          {pages}
        </button>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    if (page >= jump) {
      setJump((prev) => prev + 10);
    }
    setPage(page + 1);
    setcurrPage(page + 1);
    if (page + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    if (page === jump - 10) {
      setJump(Math.floor(page / 10) * 10);
    }
    setPage(page - 1);
    setcurrPage(page - 1);
    if ((page - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNextJumpbtn = () => {
    setPage(jump + 1);
    setcurrPage(jump + 1);
    setJump(jump + 10);
    if (page + jump > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevJumpbtn = () => {
    setPage(jump - 10);
    setcurrPage(jump - 10);
    setJump(jump - 10);
    if (jump % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div className="flex justify-center mt-7 lg:text-base text-xs">
      <button
        type="button"
        onClick={handlePrevJumpbtn}
        disabled={currPage <= 10 ? true : false}
        className="flex justify-center items-center rounded-l-lg bg-white border px-1 hover:bg-blue-100 border-y-gray-300 border-l-gray-300"
      >
        <AiOutlineCaretLeft />
        <AiOutlineCaretLeft />
      </button>
      <button
        className="py-2 px-3 bg-white border border-y-gray-300 border-l-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-350 dark:bg-white-700 dark:text-gray-600"
        type="button"
        onClick={handlePrevbtn}
        disabled={page === pagenation[0] ? true : false}
      >
        <AiOutlineCaretLeft />
      </button>
      {pageButton}
      <button
        className="py-2 px-3 bg-white border border-y-gray-300 border-r-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-350 dark:bg-white-700 dark:text-gray-600"
        type="button"
        onClick={handleNextbtn}
        disabled={page === pagenation[pagenation.length - 1] ? true : false}
      >
        <AiOutlineCaretRight />
      </button>
      <button
        type="button"
        onClick={handleNextJumpbtn}
        disabled={
          page === pagenation[pagenation.length - 1] || jump > totalPage
            ? true
            : false
        }
        className="flex justify-center items-center rounded-r-lg bg-white border-r-gray-300 border px-1 hover:bg-blue-100 border-y-gray-300"
      >
        <AiOutlineCaretRight />
        <AiOutlineCaretRight />
      </button>
    </div>
  );
};

export default PageNation;
