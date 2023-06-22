import { HeaderProps } from '@/interfaces/widget';
import useStore from '@/store';
import exp from 'constants';
import React, { useEffect } from 'react';

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
  if (theme === 'A') {
    return (
      <section id="w-15" className="h-[200px]">
        Header A
      </section>
    );
  } else {
    return (
      <section id="w-15" className="h-[200px]">
        Header B
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
 
  const { products,setProducts, imgurl, setImgurl } = useStore();
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
            <div key={items.products_and_services_element_id} className='w-[226.88px] h-[298px] bg-[#fdfdfd] border border-solid border-[#ececec] rounded-[1.4px] m-[0_auto]'>
            <div className='w-[196.88px] h-[259.81px] ml-[18px] mt-[16px]'>
            <span className='font-bold text-[15px]/[100%]'>{items.name}</span>
            {items.image? <img src={items.image} alt="" className='w-[191px] h-[140px] mt-[16px]'/>:<img src='/productno.png' alt="" className='w-[191px] h-[140px] mt-[16px]'/>}
             
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
