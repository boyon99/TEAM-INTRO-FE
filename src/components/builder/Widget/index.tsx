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
      <section id="w-15" className="h-[41px] w-full bg-primary-10 flex flex-row-reverse relative">
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
      <section id="w-15" className="h-[41px] w-full bg-primary-10 flex flex-row-reverse relative">
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
  if (theme === 'A') {
    return (
      <section id="w-16" className="h-[200px]">
        Footer A
      </section>
    );
  } else {
    return (
      <section id="w-16" className="h-[200px]">
        Footer B
      </section>
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
