import Image from 'next/image';

export default function Header() {
  return (
    <header className='h-[65px] border-solid border-b-[1px] border-primary-500'>
      <Image
        src='/zlllinks.png'
        alt='emblem1'
        width={150}
        height={52.5}
        className='ml-[20px] mt-[10px]'
      />
    </header>
  );
}
