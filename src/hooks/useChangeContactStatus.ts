import { changeContactStatus } from '@/apis/dashborad';
import { useMutation } from '@tanstack/react-query';
import useInvalidateQueries from './useInvalidateQuries';
import { ChangeContactStatus } from '@/interfaces/dashboard';

const useChangeContactStatus = ({ idList, action, status, page, closeModal }: ChangeContactStatus) => {
  const invalidateQueries = useInvalidateQueries();
  let msg = '';

  switch (action) {
    case 'CONFIRM':
      msg = '읽음으로 변경되었습니다.';
      break;
    case 'CANCEL':
      msg = '삭제되었습니다.';
      break;
    default:
      break;
  }

  return useMutation({
    mutationFn: () => changeContactStatus(idList, action),
    onSuccess: () => {
      closeModal();
      alert(msg);
    },
    onError: () => alert('요청 실패'),
    onSettled: () => {
      invalidateQueries(['dashboard', 'contactUs', status, page]);
    },
  });
};

export default useChangeContactStatus;
