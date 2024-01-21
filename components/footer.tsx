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
              src="/unsplash_image.png"
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
              href="https://github.com/happy8131/unsplash"
            >
              <DiGithubBadge
                size={"1.7rem"}
                style={{ margin: "0px 0px 0px 0px" }}
              />
            </Link>
            <Link
              target="_blank"
              className="ml-3 text-gray-500"
              href="https://happy8131.tistory.com/135"
            >
              <SiBloglovin
                size={"1.3rem"}
                style={{ margin: "0px 0px 0px 0px" }}
              />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
