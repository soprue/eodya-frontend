export interface FormValuesType {
  [key: string]: string | number | null | File[] | Blob;
  name: string;
  addressDetail: string;
  reviewContent: string;
  placeStatus: null;
  x: number;
  y: number;
  reviewDate: string;
  images: File[];
  addressDepth1: string;
  addressDepth2: string;
}
