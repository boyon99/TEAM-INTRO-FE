import useUser from '@/hooks/useUser';
import Image from 'next/image';
import ExclamationCircle from './icons/ExclamationCircle';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const { data, isLoading, isError, isSuccess } = useUser();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const profile = isSuccess && data.profile;

  return (
    <header className="h-[65px] border-b border-primary-500 flex items-center justify-between pr-[26px]">
      <Image src="/zlllinks.png" alt="emblem1" width={150} height={52.5} className="ml-5 mt-[10px]" />

      {isLoading ? (
        <div className="w-12 h-12 rounded-full bg-GrayScaleNeutral-300 animate-pulse"></div>
      ) : isError ? (
        <div className="relative">
          <ExclamationCircle className="text-error-500 w-9 h-9" setIsHovered={setIsHovered} />
          {isHovered && (
            <p className="bg-GrayScaleNeutral-100 rounded-sm z-10 shadow-md text-error-500 font-bold absolute w-24 text-sm p-2 text-center right-0">
              프로필 이미지 불러오기 실패
            </p>
          )}
        </div>
      ) : profile ? (
        <Link href={'/mypage'} className="relative rounded-full w-12 h-12 overflow-hidden">
          <Image src={profile} alt="profile picture" fill className="object-cover" />
        </Link>
      ) : (
        <Link href={'/mypage'} className="w-12 h-12 rounded-full bg-[#D9D9D9]"></Link>
      )}
    </header>
  );
}
