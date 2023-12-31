import * as S from '../Modal.styled';

import { useModal } from '../../../../provider/ModalProvider';

const MODAL_TYPE = {
  delete: {
    title: '정말 삭제 하시겠습니까?',
    confirm: '삭제',
    $bgcolor: '#F45959',
  },
  logout: {
    title: '정말 로그아웃 하시겠습니까?',
    confirm: '로그아웃',
    $bgcolor: '#92B5D9',
  },
} as const;

type Props = {
  $type: keyof typeof MODAL_TYPE;
  onClick: () => void;
};

const ConfirmModal = ({ $type, onClick }: Props) => {
  const { closeModal } = useModal();
  const { title, confirm, $bgcolor } = MODAL_TYPE[$type];

  return (
    <S.ModalContainer>
      <S.ConfirmModalWrapper>
        <S.ConfirmTitle>{title}</S.ConfirmTitle>
        <S.ConfirmButton onClick={onClick} $bgcolor={$bgcolor}>
          {confirm}
        </S.ConfirmButton>
        <S.ConfirmCancelButton onClick={closeModal}>취소</S.ConfirmCancelButton>
      </S.ConfirmModalWrapper>
    </S.ModalContainer>
  );
};

export default ConfirmModal;
