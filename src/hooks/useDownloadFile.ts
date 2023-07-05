import { getExcelLink } from '@/apis/dashborad';
import { useMutation } from '@tanstack/react-query';

const useDownloadFile = (status: string, closeModal: () => void) => {
  return useMutation({
    mutationFn: () => getExcelLink(status),
    onSuccess: (data) => {
      // create file link in browser's memory
      const href = URL.createObjectURL(data);

      // create "a" HTML element with href to file & click
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', '1개월 내역.csv'); //or any other extension
      document.body.appendChild(link);
      link.click();

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);

      closeModal();
    },
    onError: () => {
      alert('다운로드 실패');
    },
  });
};

export default useDownloadFile;
