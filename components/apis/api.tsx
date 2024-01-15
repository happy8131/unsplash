import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  // headers: {
  //   "content-type": "application/json;charset=UTF-8",
  //   accept: "application/json",
  //   "Access-Control-Allow-Origin": "unsplash.com",
  //   "Access-Control-Allow-Credentials": true,
  // },
});

export const photoApis = {
  photoList: () =>
    instance.get(
      `photos/?per_page=30&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
    ),
  photoCollections: () =>
    instance.get(
      `collections/?per_page=30&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
    ),
  photoSearchList: (category: string, page: number) =>
    instance.get(`search/photos/?query=${category}
    &page=${page}&per_page=20&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`),
  photoImg: (id: string) =>
    instance.get(
      `photos/${id}/?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
    ),
  photoLike: (id: string) =>
    instance.post(
      `photos/${id}/like?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
    ),
  photoUnLike: (id: string) =>
    instance.delete(
      `photos/${id}/like/?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
    ),
  photoTotal: () =>
    instance.get(
      `stats/total/?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
    ),
};
