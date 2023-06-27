import useUser from '@/hooks/useUser';
import Image from 'next/image';
import ExclamationCircle from './icons/ExclamationCircle';
import Link from 'next/link';

export default function Header() {
  const { data, isLoading, isError, isSuccess } = useUser();
  const profile = isSuccess && data.profile;

  return (
    <header className="h-[65px] border-b border-primary-500 flex items-center justify-between pr-[26px]">
      <Image src="/zlllinks.png" alt="emblem1" width={150} height={52.5} className="ml-5 mt-[10px]" />

      {isLoading ? (
        <div className="w-12 h-12 rounded-full bg-GrayScaleNeutral-300 animate-pulse"></div>
      ) : isError ? (
        <ExclamationCircle className="text-error-500" />
      ) : profile ? (
        <Image src={profile} alt="profile picture" width={48} height={48} />
      ) : (
        <Link href={'/mypage'} className="w-12 h-12 rounded-full bg-[#D9D9D9]"></Link>
      )}
    </header>
  );
}
