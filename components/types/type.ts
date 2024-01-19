import { Dispatch, SetStateAction } from "react";

export const selectImg = [
  { id: 0, category: "편집", en: "edit" },
  { id: 1, category: "팔로잉", en: "following" },
  { id: 2, category: "|", en: "x" },
  { id: 3, category: "단색", en: "solid-color" },
  { id: 4, category: "배경 화면", en: "wallpapers" },
  { id: 5, category: "3D 랜더링", en: "3d-renders" },
  { id: 6, category: "자연", en: "nature" },
  { id: 7, category: "텍스쳐 및 패턴", en: "textures-patterns" },
  { id: 8, category: "건축 및 인테리어", en: "architecture-interior" },
  { id: 9, category: "필름", en: "film" },
  { id: 10, category: "거리 사진", en: "street-photography" },
  { id: 11, category: "실험적인", en: "experimental" },
];

export const select = [
  { id: 0, category: "컬렉션", en: "collections" },
  { id: 1, category: "사진", en: "photo" },

  { id: 2, category: "통계", en: "total" },
];

export interface PhotoListProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
}

export interface PhotoModalProps {
  showModal: boolean;
  onClose: () => void;
}

export interface MapProps {
  id: string;
  width: number;
  height: number;
  updated_at: string;
  alt_description: string;
  downloads: number;
  exif: { make: "" };
  liked_by_user: boolean;
  user: { instagram_username: string; name: string };
  urls: { small: string };
  links: { download: string };
}

export interface TotalProps {
  photos: number;
  photographers: number;
  total_photos: number;
  downloads: number;
}
