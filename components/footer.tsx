/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { SiBloglovin } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-slate-100 font-sans">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              className="max-w-40"
              src="/willog.png"
              alt="image description"
            />
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 프론트엔드 개발자 —
            <a className="text-gray-600 ml-1" rel="noopener noreferrer">
              오일중
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center">
            <Link
              target="_blank"
              className="ml-3 text-gray-500"
              href="https://github.com/happy8131/WYC"
            >
              <DiGithubBadge
                size={"1.7rem"}
                style={{ margin: "0px 0px 0px 0px" }}
              />
            </Link>
            <Link
              target="_blank"
              className="ml-3 text-gray-500"
              href="https://happy8131.tistory.com/"
            >
              <SiBloglovin
                size={"1.3rem"}
                style={{ margin: "0px 0px 0px 0px" }}
              />
            </Link>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;