import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-purple sm:bg-orange">homepage</div>
      <span className="sm:hidden">안녕하세요</span>
    </>
  );
}
