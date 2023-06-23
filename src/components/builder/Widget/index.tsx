import { HeaderProps } from '@/interfaces/widget';
import useStore from '@/store';
import exp from 'constants';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function KeyVisual({ theme }: HeaderProps) {
  const { keyVisual } = useStore();

  if (theme === 'A') {
    return (
      <section id="w-01" className="h-[450px] w-full flex relative">
        <div
          className={
            'w-full h-full z-10 ' + (keyVisual.filter === 'Black' ? 'opacity-50 bg-[#000]' : 'opacity-50 bg-[#fff]')
          }
        ></div>
        <span
          className={
            "absolute w-[500px] top-[120px] left-[100px] font-['LINE'] text-[36px] z-[11] font-[700] " +
            (keyVisual.filter === 'Black' ? 'text-white' : 'text-black')
          }
        >
          {keyVisual.slogan}
        </span>
        <span
          className={
            "absolute w-[600px] top-[240px] left-[100px] font-['LINE'] font-[400] text-[10px] z-[11] " +
            (keyVisual.filter === 'Black' ? 'text-white' : 'text-black')
          }
        >
          {keyVisual.sloganDetail}
        </span>
        <img src={keyVisual.bgImg} className="w-full h-full object-cover absolute" alt="키비주얼 배경 이미지" />
      </section>
    );
  } else {
    return (
      <section id="w-01" className="h-[450px] w-full flex relative">
        <div
          className={
            'w-full h-full z-10 ' + (keyVisual.filter === 'Black' ? 'opacity-50 bg-[#000]' : 'opacity-50 bg-[#fff]')
          }
        ></div>
        <span
          className={
            "absolute w-[700px] top-[100px] left-[100px] font-['Korail'] text-[36px] z-[11] font-[500] text-center " +
            (keyVisual.filter === 'Black' ? 'text-white' : 'text-black')
          }
        >
          {keyVisual.slogan}
        </span>
        <span
          className={
            "absolute w-[700px] top-[220px] left-[100px] font-['Korail'] text-[24px] z-[11] font-[500] text-center " +
            (keyVisual.filter === 'Black' ? 'text-white' : 'text-black')
          }
        >
          {keyVisual.sloganDetail}
        </span>
        {keyVisual.bgImg !== '' ? (
          <Image src={keyVisual.bgImg} className="w-full h-full object-cover absolute" alt="키비주얼 배경 이미지" />
        ) : null}
      </section>
    );
  }
}

export function MissionVision({ theme }: HeaderProps) {
  const { missionVision } = useStore();
  if (theme === 'A') {
    return (
      <section id="w-02" className="h-[300px] w-full flex relative font-[LINE]">
        {/* 미션 */}
        <div className="w-[50%] h-full bg-GrayScaleNeutral-100">
          <div className="h-[141px] w-[255px] m-[auto] mt-[70px] relative">
            <span className="font-[700] text-[22px]">Mission</span>
            <span className="font-[500] text-[10px] text-GrayScaleNeutral-700 ml-[5px]">미션</span>
            <Image
              src="/우주선.png"
              height={50}
              width={50}
              alt="미션을 나타내는 우주선 이미지"
              className="absolute top-[1px] right-[4px]"
            />
            <div className="mt-[20px] black h-[auto] w-full">
              <p className="font-[700] text-[13px]">{missionVision.mission}</p>
              <p className="font-[500] text-[12px] w-[auto] h-[70px] overflow-hidden mt-[3px]">
                {missionVision.missionDetail}
              </p>
            </div>
          </div>
        </div>
        {/* 비전 */}
        <div className="w-[50%] h-full bg-GrayScaleNeutral-150">
          <div className="h-[141px] w-[255px] m-[auto] mt-[70px] relative">
            <span className="font-[700] text-[22px]">Vission</span>
            <span className="font-[500] text-[10px] text-GrayScaleNeutral-700 ml-[5px]">비전</span>
            <Image
              src="/망원경.png"
              height={50}
              width={50}
              alt="미션을 나타내는 우주선 이미지"
              className="absolute top-[1px] right-[4px]"
            />
            <div className="mt-[20px] black h-[auto] w-full">
              <p className="font-[700] text-[13px]">{missionVision.vision}</p>
              <p className="font-[500] text-[12px] w-[auto] h-[70px] overflow-hidden mt-[3px]">
                {missionVision.visionDetail}
              </p>
            </div>
          </div>{' '}
        </div>
      </section>
    );
  } else {
    return (
      <section id="w-02" className="h-[400px] w-full relative">
        {/* 미션 */}
        <div className="w-full h-[200px] border border-white">
          <div className="h-[60%] w-[calc(100%-200px)] ml-[100px] mt-[20px] relative">
            <span className="font-[500] text-[16px] text-[#FFB800]">Mission</span>
            <div className="mt-[20px] flex h-[auto] w-full">
              <div className="font-[700] text-[13px] w-[50%] font-['Korail']">
                {missionVision.mission}
              </div>
              <div className="font-[500] text-[16px] w-[50%] overflow-hidden indent-[20px]">
                {missionVision.missionDetail}
              </div>
            </div>
          </div>
        </div>
        {/* 비전 */}
        <div className="w-full h-[200px] border border-white">
          <div className="h-[60%] w-[calc(100%-200px)] ml-[100px] mt-[20px] relative">
            <span className="font-[500] text-[16px] text-[#FFB800]">Vission</span>
            <div className="mt-[20px] flex h-[auto] w-full">
              <div className="font-[700] text-[13px] w-[50%] font-['Korail']">
                {missionVision.vision}
              </div>
              <div className="font-[500] text-[16px] w-[50%] overflow-hidden indent-[20px]">
                {missionVision.visionDetail}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export function Header({ theme }: HeaderProps) {
  const { headerfooter } = useStore();
  if (theme === 'A') {
    return (
      <section id="w-15" className="h-[41px] w-full flex flex-row-reverse relative">
        <img src="" className="w-[23px] h-[23px] absolute top-[9px] left-[11px]" />
        <span className="font-['LINE'] text-[12px] absolute top-[13px] left-[40px]">ZILLINKS</span>
        <div className="mt-[7px] mr-[25px] text-GrayScaleNeutral-550">
          {headerfooter.quickmenu.map((item, index) => {
            if (item.toggle) {
              return (
                <span key={index} className="font-['Roboto'] text-[10px] ml-[26px]">
                  {item.name}
                </span>
              );
            } else {
              return null;
            }
          })}
        </div>
      </section>
    );
  } else {
    return (
      <section id="w-15" className="h-[41px] w-full flex flex-row-reverse relative">
        <img src="" className="w-[23px] h-[23px] absolute top-[9px] left-[11px]" />
        <span className="font-[700] text-[12px] absolute top-[13px] left-[40px]">Upperb</span>
        <div className="mt-[7px] mr-[25px] text-GrayScaleNeutral-550">
          {headerfooter.quickmenu.map((item, index) => {
            if (item.toggle) {
              return (
                <span key={index} className="font-['Roboto'] text-[10px] ml-[26px]">
                  {item.name}
                </span>
              );
            } else {
              return null;
            }
          })}
        </div>
      </section>
    );
  }
}

export function Footer({ theme }: HeaderProps) {
  const { headerfooter } = useStore();
  if (theme === 'A') {
    return (
      <section id="w-16" className="h-[140px] w-full bg-GrayScaleNeutral-150 flex relative">
        <div className="w-[255px] ml-[99px] mt-[73px] bg-primary-500 mb-[25px]">phone</div>
        <div className="w-[177px] ml-[10px] mt-[87px] bg-primary-500 mb-[25px]">대표</div>
        <div className="w-[255px] ml-[10px] mt-[30px] bg-primary-500 mb-[25px]">버튼</div>
      </section>
    );
  } else {
    return (
      <section id="w-16" className="h-[140px] w-full bg-GrayScaleNeutral-150 flex flex-row-reverse relative"></section>
    );
  }
}

export function ProductService({ theme }: HeaderProps) {
 

  const { products,setProducts, imgurl, setImgurl, productservices } = useStore();
  useEffect(() => {
    const updatedProducts = products.map((product, index) => {
      if (index === products.length - 1) {
        return {
          ...product,
          image: imgurl
        };
      }
      return product;
    });


    setProducts(updatedProducts);
  },[imgurl])
  console.log(products);
  if (theme === 'A') {
    return (
      <section id="w-04" className="h-[402px] font-[LINE]">
        <div className="ml-[110px] flex">
          <span className="mr-[7px] font-[700] text-[20px]">Products & Services</span>
          <span className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            제품 소개
          </span>
        </div>

        <div className="w-[703.12px] h-[299.19px] m-[0_auto] mt-[42.19px] mr-[] flex">
          {products?.map((items) => {
            return (
              <div
                key={items.products_and_services_element_id}
                className="w-[226.88px] h-[298px] bg-[#fdfdfd] border border-solid border-[#ececec] rounded-[1.4px] m-[0_auto]"
              >
                <div className="w-[196.88px] h-[259.81px] ml-[18px] mt-[16px]">
                  <span className="font-bold text-[15px]/[100%]">{items.name}</span>
                  {items.image? <img src={items.image} alt="" className='w-[191px] h-[140px] mt-[16px]'/>:<img src='/productno.png' alt="" className='w-[191px] h-[140px] mt-[16px]'/>}
                  <p className="font-bold text-[10.54px]/[100%] mt-[16.88px]">{items.title}</p>
                  <p className="font-normal text-[9.84px]/[170%] mt-[8.44px]">{items.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {productservices ?  (
         <div className='flex w-[700px] ml-[98.44px] mt-[30.22px] items-center'>
         <p className='text-[22.5px]/[100%] font-[`LINE`] font-bold'>{productservices.description}</p>
         <Link href={productservices.link} className='ml-[auto]'>
          {productservices.text?  <button className='w-[126px] h-[41px] bg-[#4B48DF] text-[#fff]'>{productservices.text}</button>:<></>}
         </Link>
      </div>): <></>}
     
      </section>
    );
  } else {
    return (
      <section id="w-03" className="h-[200px] font-[LINE]">
        ProductService B
      </section>
    );
  }
}

export function TeamMember({ theme }: HeaderProps) {
  if (theme === 'A') {
    return (
      <section id="w-04" className="h-[795px] font-[LINE] border">
         <div className="ml-[100px] flex items-center">
          <span className="mr-[9px] font-[700] text-[23px]">Meat the Team</span>
          <span className="text-GrayScalePrimary-600 font-[400] text-[9px] w-[256px] mt-[8px] pl-[2px]">
            팀 소개
          </span>
        </div>

        <div className="w-[703.12px] h-[337px] m-[0_auto] mt-[42.19px] flex flex-wrap">
          
        {[1, 2, 3, 4, 5].map((_, i) => (
              <div     
                className="w-[169px] h-[337px] ml-[5px]"
              >
                <img src='/man.png' alt="" className='w-[169px] h-[198px]'/>
                <div className="w-[169px] h-[337px] mt-[11.4px]">
                  <span className="font-bold text-[11px]/[100%]">신윤서</span>
                  <p className="font-bold text-[10px]/[100%] text-[#797979]">플랫폼서비스팀 / Software Engineer</p>
                  <p className="font-normal text-[9.84px]/[150%] mt-[8.44px]">피곤할 때 좋은 음악 추천해주세요.. 랩은 제외하고..!</p>
                  <p className="font-normal text-[9.84px]/[100%] mt-[14px]">fejodnv@gmail.com</p>
                </div>
              </div>
         
         ))}
        </div>
      </section>
    );
  } else {
    return (
      <section id="w-04" className="font-[LINE] border h-[795px] ">
           <div className="ml-[100px]">
          <span className="mr-[9px] font-[700] text-[23px] text-[#FFB800]">Meat the Team</span>
          <p className="text-[#000] text-[30px] mt-[30px] pl-[2px]">
            팀원들을 소개합니다.
          </p>
        </div>

        <div className="w-[703.12px] h-[337px] m-[0_auto] mt-[25px] flex flex-wrap">
          
        {[1, 2, 3, 4, 5].map((_, i) => (
              <div     
                className="w-[169px] h-[300px] ml-[5px] mb-[15px] rounded-3xl bg-[#fff] shadow-[3.5px_9.4px_11.8px_0px__rgba(197,197,197,0.25)]"
              >
                <div className='w-[130px] h-[130px] m-[0_auto] mt-[12px]'>
                <img src='/man.png' alt="" className='w-[130px] h-[130px] rounded-[160px]'/>
                </div>
                <div className="w-[169px] h-[337px] mt-[11.4px]">
                  <p className="font-bold text-[11px]/[100%] text-center mb-3">신윤서</p>
                  <p className="font-bold text-[10px]/[100%] text-[#797979]">플랫폼서비스팀 / Software Engineer</p>
                  <p className="font-normal text-[9.84px]/[150%] mt-[8.44px]">피곤할 때 좋은 음악 추천해주세요.. 랩은 제외하고..!</p>
                  <p className="font-normal text-[9.84px]/[100%] mt-[14px]">fejodnv@gmail.com</p>
                </div>
              </div>
         
         ))}
        </div>
      </section>
    );
  }
}

export function ContactUs({ theme }: HeaderProps) {
  if (theme === 'A') {
    return (
      <section id="w-05" className="h-[200px]">
        ContactUs A
      </section>
    );
  } else {
    return (
      <section id="w-05" className="h-[200px]">
        ContactUs B
      </section>
    );
  }
}

export function Press({ theme }: HeaderProps) {
  if (theme === 'A') {
    return (
      <section id="w-06" className="h-[200px]">
        Press A
      </section>
    );
  } else {
    return (
      <section id="w-06" className="h-[200px]">
        Press B
      </section>
    );
  }
}

export function Download({ theme }: HeaderProps) {
  if (theme === 'A') {
    return (
      <section id="w-07" className="h-[200px]">
        Download A
      </section>
    );
  } else {
    return (
      <section id="w-07" className="h-[200px]">
        Download B
      </section>
    );
  }
}

export function History({ theme }: HeaderProps) {
  if (theme === 'A') {
    return (
      <section id="w-08" className="h-[200px]">
        History A
      </section>
    );
  } else {
    return (
      <section id="w-08" className="h-[200px]">
        History B
      </section>
    );
  }
}

export function TeamCulture({ theme }: HeaderProps) {
  if (theme === 'A') {
    return (
      <section id="w-09" className="h-[200px]">
        TeamCulture A
      </section>
    );
  } else {
    return (
      <section id="w-09" className="h-[200px]">
        TeamCulture B
      </section>
    );
  }
}

export function Result({ theme }: HeaderProps) {
  if (theme === 'A') {
    return (
      <section id="w-10" className="font-[LINE] h-[180px]">
        <div className="ml-[100px] flex items-center mt-[14px]">
          <span className="mr-[9px] font-[700] text-[23px]">Key Achievements</span>
          <span className="text-GrayScalePrimary-600 font-[400] text-[9px] w-[256px] mt-[8px] pl-[2px]">
          핵심 성과
          </span>
        </div>

        <div className="w-[704.12px] h-[114px] m-[0_auto] mt-[42.19px] flex flex-wrap">
          
        {[1, 2, 3,4].map((_, i) => (
              <div     
                className="w-[175px] h-[113px]"
              >
                <p className="font-bold text-[32px]/[100%] text-primary-500 text-center mt-[15px]">100%</p>
                  <p className="text-[11px]/[100%] text-[#000] mt-[13px] text-center">초기 투자금 유치</p>
                  <p className="text-[8.84px]/[100%] mt-[8.44px] text-[#939393] text-center">성과 지표 부가 설명</p>
              </div>
         
         ))}
        </div>
      </section>
    );
  } else {
    return (
      <section id="w-10" className="h-[200px]">
      <div className="ml-[100px] mt-[14px]">
          <span className="mr-[9px] font-[700] text-[23px] text-[#FFB800]">Key Achievements</span>
          <p className="text-[#000] text-[30px] mt-[20px] pl-[2px]">
            우리는 성장하고 있습니다.
          </p>
        </div>

        <div className="w-[704.12px] h-[114px] m-[0_auto] mt-[42.19px] flex flex-wrap space-x-5">
          
        {[1, 2, 3,4].map((_, i) => (
              <div     
                className="w-[160px] h-[113px] rounded-2xl bg-[#fff] shadow-[0px_1px_12px_0px__rgba(197,197,197,0.3)]"
              >
                <p className="font-bold text-[32px]/[100%] text-[#000] text-center mt-[15px]">7억원</p>
                  <p className="font-bold text-[18px]/[100%] text-[#000] mt-[13px] text-center">초기 투자금 유치</p>
                  <p className="text-[10px]/[120%] mt-[5px] text-[#000] text-center">2018년 5개 투자사로부터 초기 투자 자금 유치</p>
              </div>
         
         ))}
        </div>
      </section>
    );
  }
}

export function Partners({ theme }: HeaderProps) {
  if (theme === 'A') {
    return (
      <section id="w-11" className="h-[200px]">
        Partners A
      </section>
    );
  } else {
    return (
      <section id="w-11" className="h-[200px]">
        Partners B
      </section>
    );
  }
}

export function Review({ theme }: HeaderProps) {
  if (theme === 'A') {
    return (
      <section id="w-12" className="h-[200px]">
        Review A
      </section>
    );
  } else {
    return (
      <section id="w-12" className="h-[200px]">
        Review B
      </section>
    );
  }
}

export function Channel({ theme }: HeaderProps) {
  const { channel } = useStore();
  if (theme === 'A') {
    return (
      <section id="w-13" className="h-[200px] w-full relative mt-[20px]">
        <span className="font-[700] text-[22px] font-[LINE] ml-[100px]">SNS Channel</span>
        <span className="font-[500] text-[10px] text-GrayScaleNeutral-700 ml-[5px] mt-[30px]">채널</span>
        <div className="flex mt-[30px] w-[calc(100%-200px)] ml-[100px] h-[50px] justify-center">
          {channel.channelList.map((items, index) => {
            if (items.checked) {
              return (
                <div className="flex flex-row mr-[4px]">
                  <img src={items.img} className="w-[50px] h-[50px]" />
                  <span className="text-[10px] mt-[30px]">{items.value}</span>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </section>
    );
  } else {
    return (
      <section id="w-13" className="h-[200px] w-full relative mt bg-GrayScaleNeutral-100">
        <div className="font-[500] text-[16px] text-[#FFB800] ml-[100px] pt-[20px]">SNS Channel</div>
        <div className="flex mt-[30px] w-[calc(100%-200px)] ml-[100px] h-[50px] justify-center">
          {channel.channelList.map((items, index) => {
            if (items.checked) {
              return (
                <div className="flex flex-row mr-[4px] bg-white w-[70px] h-[70px] rounded-[14px] drop-shadow-xl mx-[20px] items-center justify-center">
                  <img src={items.img} className="w-[50px] h-[50px]" />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </section>
    );
  }
}

export function Patent({ theme }: HeaderProps) {
  if (theme === 'A') {
    return (
      <section id="w-14" className="h-[200px]">
        Patent A
      </section>
    );
  } else {
    return (
      <section id="w-14" className="h-[200px]">
        Patent B
      </section>
    );
  }
}
