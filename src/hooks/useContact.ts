import { getContact } from '@/apis/dashborad';
import { ContactUs, Inquiry } from '@/interfaces/dashboard';
import { useQuery } from '@tanstack/react-query';

const useContact = ({ status, page }: ContactUs) => {
  return useQuery({
    queryKey: ['dashboard', 'contactUs', status, page],
    queryFn: () => getContact({ status, page }),
    select: (data) => {
      const contactData = data.data;

      const { content, total_page, has_next } = contactData;

      content.map((el: Inquiry) => ({
        ...el,
        selected: false,
      }));

      return {
        content,
        total_page,
        has_next,
      };
    },
    keepPreviousData: true,
  });
};

export default useContact;
