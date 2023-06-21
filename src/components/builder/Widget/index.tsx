import { HeaderProps } from '@/interfaces/widget';
import useStore from '@/store';
import exp from 'constants';
import React from 'react';

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
        <img src={keyVisual.bgImg} className="w-full h-full object-cover absolute" alt="키비주얼 배경 이미지" />
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
  if (theme === 'A') {
    return (
      <section id="w-03" className="h-[200px]">
        ProductService A
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
