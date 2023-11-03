export type message = {
  [x: string]: any;
  board_id: string | undefined | number;
  dateTime: string | null;
  content: string | null;
  boardImageViewDtoList: boardImageViewDtoList;
  accessUrl: any;
  originName: any;
};

// // 디테일 페이지 이메일 타입들
export type boardImageViewDtoList = {
  imageId: number | null;
  dateTime: string | null;
  accessUrl: any;
  originName: any;
  board_id: number;
  metaDateTime: string;
  resizeUrl: string;
  [key: string]: any;
};
