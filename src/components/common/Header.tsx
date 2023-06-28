import Image from 'next/image';

export default function Header() {
  return (
    <header className="h-[65px] border-b border-primary-500">
      <Image src="/zlllinks.png" alt="emblem1" width={150} height={52.5} className="ml-5 mt-[10px]" />
    </header>
  );
}
