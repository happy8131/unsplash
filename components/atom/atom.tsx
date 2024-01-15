import { atom, selector } from "recoil";
import { MapProps, TotalProps } from "../types/type";

export const photoState = atom({
  key: "photoState",
  default: [],
});

export const bookMarkListState = atom({
  key: "bookMarkListState",
  default: [],
});

export const modalState = atom<MapProps>({
  key: "modalState",
  default: {
    id: "",
    width: 0,
    height: 0,
    updated_at: "",
    alt_description: "",
    downloads: 0,
    liked_by_user: false,
    user: { instagram_username: "", name: "" },
    urls: { small: "" },
    links: { download: "" },
  },
});

export const totalState = atom<TotalProps>({
  key: "totalState",
  default: {
    photos: 0,
    photographers: 0,
    total_photos: 0,
    downloads: 0,
  },
});

export const bookmarkState = atom({
  key: "bookmarkState",
  default: [],
});

export const photoListValue = selector({
  key: "photoListValue",
  get: ({ get }) => {
    const data = get(photoState);

    return data;
  },
});

export const totalListValue = selector({
  key: "totalListValue",
  get: ({ get }) => {
    const data = get(totalState);

    return data;
  },
});

export const bookMarkListValue = selector({
  key: "bookMarkListValue",
  get: ({ get }) => {
    const data = get(bookMarkListState);

    return data;
  },
});
