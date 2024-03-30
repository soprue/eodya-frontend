export interface SpotFormValuesType {
  [key: string]: string | number | null | File[] | Blob;
  name: string;
  addressDetail: string;
  reviewContent: string;
  placeStatus: null;
  x: number;
  y: number;
  reviewDate: string | null;
  images: File[];
  addressDepth1: string;
  addressDepth2: string;
}
