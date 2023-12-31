export type AuthToken = {
  accessToken: string;
  accessTokenExpireDate: Date;
  refreshToken: string;
  issuedAt: string;
};

export type ReissueToken = AuthToken & {
  grantType: string;
};

export type User = AuthToken & {
  kakaoId: number;
  email: string;
  kakaoName: string;
  profile_image: string;
};

export type Guest = Pick<
  User,
  'accessToken' | 'accessTokenExpireDate' | 'issuedAt' | 'kakaoName' | 'profile_image' | 'kakaoId'
>;
