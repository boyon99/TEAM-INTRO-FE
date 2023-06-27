import { changeContactStatus } from '@/apis/dashborad';
import { useMutation } from '@tanstack/react-query';
import useInvalidateQueries from './useInvalidateQuries';
import { ChangeContactStatus } from '@/interfaces/dashboard';

const useChangeContactStatus = ({ id, status, page, closeModal }: ChangeContactStatus) => {
  const invalidateQueries = useInvalidateQueries();
  let msg = '';

  switch (status) {
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
    mutationFn: () => changeContactStatus(id, status),
    onSuccess: () => {
      invalidateQueries(['dashboard', 'contactUs', 'UNCONFIRMED', page.toString()]);
      closeModal();
      alert(msg);
    },
    onError: () => alert('요청 실패'),
  });
};

export default useChangeContactStatus;
