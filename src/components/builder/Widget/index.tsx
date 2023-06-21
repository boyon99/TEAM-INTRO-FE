import { HeaderProps } from '@/interfaces/widget';
import useStore from '@/store';
import exp from 'constants';
import React from 'react';

export function KeyVisual({ theme }: HeaderProps) {
  if (theme === 'A') {
    return (
      <section id="w-01" className="h-[200px] border">
        KeyVisual A
      </section>
    );
  } else {
    return (
      <section id="w-01" className="h-[200px] border">
        KeyVisual B
      </section>
    );
  }
}

export function MissionVision({ theme }: HeaderProps) {
  if (theme === 'A') {
    return (
      <section id="w-02" className="h-[200px] border">
        MissionVision A
      </section>
    );
  } else {
    return (
      <section id="w-02" className="h-[200px] border">
        MissionVision B
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
  const { buttondes, setButtondes, products } = useStore();
  console.log(products)
  if (theme === 'A') {
    return (
      <section id="w-04" className="h-[402px]">
        <div className='ml-[110px]'>
          <span className='font-bold text-[20px]/[100%] mr-[7px]'>Products & Services</span>
          <span className='text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]'>제품 소개</span>
        </div>
     
        <div className='w-[703.12px] h-[299.19px] m-[0_auto] mt-[42.19px] mr-[] flex'>
        {products?.map((items) => {
          return (
            <div key={items.id} className='w-[226.88px] h-[298px] bg-[#fdfdfd] border border-solid border-[#ececec] rounded-[1.4px] m-[0_auto]'>
            <div className='w-[196.88px] h-[259.81px] ml-[18px] mt-[16px]'>
            <span className='font-bold text-[15px]/[100%]'>{items.name}</span>
             <img src="/productno.png" alt="" className='w-[191px] h-[140px] mt-[16px]'/>
             <p className='font-bold text-[10.54px]/[100%] mt-[16.88px]'>{items.title}</p>
             <p className='font-normal text-[9.84px]/[170%] mt-[8.44px]'>{items.description}</p>
            </div>
          
           </div>
          )
        })}
        </div>
       

        {/* ProductService A <span>{buttondes.buttonname}</span> */}
      </section>
    );
  } else {
    return (
      <section id="w-03" className="h-[200px]">
        ProductService B
      </section>
    );
  }
}

export function TeamMember({ theme }: HeaderProps) {
  if (theme === 'A') {
    return (
      <section id="w-04" className="h-[200px]">
        TeamMember A
      </section>
    );
  } else {
    return (
      <section id="w-04" className="h-[200px]">
        TeamMember B
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
      <section id="w-10" className="h-[200px]">
        Result A
      </section>
    );
  } else {
    return (
      <section id="w-10" className="h-[200px]">
        Result B
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
  if (theme === 'A') {
    return (
      <section id="w-13" className="h-[200px]">
        Channel A
      </section>
    );
  } else {
    return (
      <section id="w-13" className="h-[200px]">
        Channel B
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
