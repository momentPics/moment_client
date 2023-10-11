import * as S from './NoneContent.styled';

type NoneContentTypes = {
  [key in string]: {
    title: string;
    subTitle: string;
  };
};

type Props = {
  contentType: string;
};

const NONE_CONTENT: NoneContentTypes = {
  main: {
    title: '아직 쌓인 추억이 없습니다.',
    subTitle: '소중한 추억을 쌓아볼까요?',
  },
  event: {
    title: '현재 진행중인 이벤트가 없습니다.',
    subTitle: '좋은 이벤트로 찾아올게요.',
  },
} as const;

const NoneContent = ({ contentType }: Props) => {
  const { title, subTitle } = NONE_CONTENT[contentType];

  return (
    <S.Layout>
      <S.Container>
        <S.NoneTitle> {title} </S.NoneTitle>
        <S.NoneSubTitle> {subTitle} </S.NoneSubTitle>
      </S.Container>
    </S.Layout>
  );
};

export default NoneContent;