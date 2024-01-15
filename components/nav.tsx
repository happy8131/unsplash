/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="flex items-center justify-between sm:mx-10 mt-3">
      <Link href="/" className="flex items-center space-x-2">
        <img className="max-w-40" src="/willog.png" alt="image" />
      </Link>
      <div className="px-5 flex space-x-4 items-center font-sans text-gray-500 font-bold">
        <span className="rounded-lg bg-gray-200 p-2">사진 제출</span>
        <Link
          href="/bookmark"
          className="rounded-lg border-2 border-slate-200 p-2 cursor-pointer"
        >
          북마크 ♡
        </Link>
        <span>Evie | evie@willog.io</span>
      </div>
    </header>
  );
};

export default NavBar;
