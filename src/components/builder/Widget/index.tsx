import { HeaderProps } from '@/interfaces/widget';
import useStore from '@/store';
import exp from 'constants';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { headerName } from '@/data/headerName';
import { channelList } from '@/data/channel';

export function KeyVisual({ theme }: HeaderProps) {
  const { keyVisual } = useStore();

  if (theme === 'ThemeA') {
    return (
      <section id="w-01" className="h-[450px] w-full flex relative">
        <div
          className={
            'w-full h-full z-10 ' + (keyVisual.filter === 'BLACK' ? 'opacity-50 bg-[#000]' : 'opacity-50 bg-[#fff]')
          }
        ></div>
        <span
          className={
            "absolute w-[500px] top-[120px] left-[100px] font-['LINE'] text-[36px] z-[11] font-[700] " +
            (keyVisual.filter === 'BLACK' ? 'text-white' : 'text-black')
          }
        >
          {keyVisual.slogan}
        </span>
        <span
          className={
            "absolute w-[600px] top-[240px] left-[100px] font-['LINE'] font-[400] text-[10px] z-[11] " +
            (keyVisual.filter === 'BLACK' ? 'text-white' : 'text-black')
          }
        >
          {keyVisual.slogan_detail}
        </span>
        {keyVisual.background === '' ? null : (
          <img src={keyVisual.background} className="w-full h-full object-cover absolute" alt="키비주얼 배경 이미지" />
        )}{' '}
      </section>
    );
  } else {
    return (
      <section id="w-01" className="h-[450px] w-full flex relative">
        <div
          className={
            'w-full h-full z-10 ' + (keyVisual.filter === 'BLACK' ? 'opacity-50 bg-[#000]' : 'opacity-50 bg-[#fff]')
          }
        ></div>
        <span
          className={
            "absolute w-[700px] top-[100px] left-[100px] font-['Korail'] text-[36px] z-[11] font-[500] text-center " +
            (keyVisual.filter === 'BLACK' ? 'text-white' : 'text-black')
          }
        >
          {keyVisual.slogan}
        </span>
        <span
          className={
            "absolute w-[700px] top-[220px] left-[100px] font-['Korail'] text-[24px] z-[11] font-[500] text-center " +
            (keyVisual.filter === 'BLACK' ? 'text-white' : 'text-black')
          }
        >
          {keyVisual.slogan_detail}
        </span>
        {keyVisual.background === '' ? null : (
          <img src={keyVisual.background} className="w-full h-full object-cover absolute" alt="키비주얼 배경 이미지" />
        )}
      </section>
    );
  }
}

export function MissionVision({ theme }: HeaderProps) {
  const { missionVision } = useStore();
  if (theme === 'ThemeA') {
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
                {missionVision.mission_detail}
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
                {missionVision.vision_detail}
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
              <div className="font-[700] text-[13px] w-[50%] font-['Korail']">{missionVision.mission}</div>
              <div className="font-[500] text-[16px] w-[50%] overflow-hidden indent-[20px]">
                {missionVision.mission_detail}
              </div>
            </div>
          </div>
        </div>
        {/* 비전 */}
        <div className="w-full h-[200px] border border-white">
          <div className="h-[60%] w-[calc(100%-200px)] ml-[100px] mt-[20px] relative">
            <span className="font-[500] text-[16px] text-[#FFB800]">Vission</span>
            <div className="mt-[20px] flex h-[auto] w-full">
              <div className="font-[700] text-[13px] w-[50%] font-['Korail']">{missionVision.vision}</div>
              <div className="font-[500] text-[16px] w-[50%] overflow-hidden indent-[20px]">
                {missionVision.vision_detail}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export function Header({ theme }: HeaderProps) {
  const { header_and_footer_status_list, companyInfo } = useStore();
  if (theme === 'ThemeA') {
    return (
      <section id="w-15" className="h-[41px] w-full flex flex-row-reverse relative">
        {companyInfo.logo === '' ? null : (
          <img src={companyInfo.logo} className="w-[23px] h-[23px] absolute top-[9px] left-[11px]" />
        )}
        <span className="font-['LINE'] text-[12px] absolute top-[13px] left-[40px] font-[700]">ZILLINKS</span>
        <div className="mt-[7px] mr-[25px] text-GrayScaleNeutral-550">
          {header_and_footer_status_list.map((toggle, index) => {
            if (toggle) {
              return (
                <span key={index} className="font-['Roboto'] text-[10px] ml-[26px]">
                  {headerName[index]}
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
        {companyInfo.logo === '' ? null : (
          <img src={companyInfo.logo} className="w-[23px] h-[23px] absolute top-[9px] left-[11px]" />
        )}{' '}
        <span className="font-[700] text-[12px] absolute top-[13px] left-[40px]">Upperb</span>
        <div className="mt-[7px] mr-[25px] text-GrayScaleNeutral-550">
          {header_and_footer_status_list.map((toggle, index) => {
            if (toggle) {
              return (
                <span key={index} className="font-['Roboto'] text-[10px] ml-[26px]">
                  {headerName[index]}
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
  const { companyInfo } = useStore();
  if (theme === 'ThemeB') {
    return (
      <section id="w-16" className="h-[140px] w-full bg-GrayScaleNeutral-150 flex relative font-['LINE']">
        <div className="w-[230px] ml-[99px] mt-[70px] mb-[25px] text-GrayScaleNeutral-400">
          <div className="font-[500] text-[12px] mb-[1px] flex">
            <div className="w-[70px]">phone</div>
            <div className="font-[300]">{companyInfo.phone_number}</div>
          </div>
          <div className="font-[500] text-[12px] mb-[1px] flex">
            <div className="w-[70px]">FAX</div>
            <div className="font-[300]">{companyInfo.fax_number}</div>
          </div>
          <div className="font-[500] text-[12px] flex">
            <div className="w-[70px]">Address</div>
            <div className="font-[300]">{/* CHECKLIST - address 주소목록 가져오기 */}</div>
          </div>
        </div>
        <div className="w-[177px] ml-[10px] mt-[87px] text-GrayScaleNeutral-400 mb-[25px]">
          <div className="font-[500] text-[12px] mb-[1px] flex">
            <div className="w-[60px]">대표</div>
            <div className="font-[300]">{companyInfo.representative}</div>
          </div>
          <div className="font-[500] text-[12px] mb-[1px] flex">
            <div className="w-[60px]">Email</div>
            <div className="font-[300]">{companyInfo.contact_email}</div>
          </div>
        </div>
        <div className="w-[240px] ml-[30px] mt-[30px] text-GrayScaleNeutral-400 mb-[25px] flex flex-col">
          <div className="border w-[110px] pl-[13px] py-[5px] text-[14px] bg-white border-GrayScaleNeutral-400 text-GrayScaleNeutral-650 ml-[130px]">
            기업 상세 정보
          </div>
          {/* CHECKLIST - 해당 링크로 이동하는 이미지 버튼 추가 */}
          <div className="font-[300] text-[12px] flex ml-[163px]">주식회사 질링스</div>
          <div className="font-[300] text-[12px] flex">Copyright&#169;Zillinks.Co.Ltd. All Right Reserved</div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="w-16" className="h-[140px] w-full bg-GrayScaleNeutral-550 flex relative font-['Korail']">
        <div className="w-[230px] ml-[99px] mt-[70px] mb-[25px] text-white">
          <div className="font-[500] text-[12px] mb-[1px] flex">
            <div className="w-[70px]">phone</div>
            <div className="font-[300]">{companyInfo.phone_number}</div>
          </div>
          <div className="font-[500] text-[12px] mb-[1px] flex">
            <div className="w-[70px]">FAX</div>
            <div className="font-[300]">{companyInfo.fax_number}</div>
          </div>
          <div className="font-[500] text-[12px] flex">
            <div className="w-[70px]">Address</div>
            <div className="font-[300]">{/* CHECKLIST - address 주소목록 가져오기 */}</div>
          </div>
        </div>
        <div className="w-[177px] ml-[10px] mt-[87px] text-white mb-[25px]">
          <div className="font-[500] text-[12px] mb-[1px] flex">
            <div className="w-[60px]">대표</div>
            <div className="font-[300]">{companyInfo.representative}</div>
          </div>
          <div className="font-[500] text-[12px] mb-[1px] flex">
            <div className="w-[60px]">Email</div>
            <div className="font-[300]">{companyInfo.contact_email}</div>
          </div>
        </div>
        <div className="w-[250px] ml-[35px] mt-[30px] text-white mb-[25px] flex flex-col">
          <div className="border w-[110px] pl-[16px] py-[5px] text-[12px] rounded-[18px] border-GrayScaleNeutral-400 ml-[133px]">
            기업 상세 정보
          </div>
          {/* CHECKLIST - 해당 링크로 이동하는 이미지 버튼 추가 */}
          <div className="font-[300] text-[12px] flex ml-[156px]">주식회사 질링스</div>
          <div className="font-[300] text-[12px] flex">Copyright&#169;Zillinks.Co.Ltd. All Right Reserved</div>
        </div>
      </section>
    );
  }
}

export function ProductService({ theme }: HeaderProps) {
  const { products, setProducts, imgurl, setImgurl, productservices } = useStore();
  // useEffect(() => {
  //   const updatedProducts = products.map((product, index) => {
  //     if (index === products.length - 1) {
  //       return {
  //         ...product,
  //         image: imgurl,
  //       };
  //     }
  //     return product;
  //   });

  //   setProducts(updatedProducts);
  // }, [imgurl]);
  // console.log(products);
  if (theme === 'ThemeA') {
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
                  {items.image ? (
                    <img src={items.image} alt="" className="w-[191px] h-[140px] mt-[16px]" />
                  ) : (
                    <img src="/productno.png" alt="" className="w-[191px] h-[140px] mt-[16px]" />
                  )}
                  <p className="font-bold text-[10.54px]/[100%] mt-[16.88px]">{items.title}</p>
                  <p className="font-normal text-[9.84px]/[170%] mt-[8.44px]">{items.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {productservices ? (
          <div className="flex w-[700px] ml-[98.44px] mt-[30.22px] items-center">
            <p className="text-[22.5px]/[100%] font-[`LINE`] font-bold">{productservices.description}</p>
            <Link href={productservices.link} className="ml-[auto]">
              {productservices.text ? (
                <button className="w-[126px] h-[41px] bg-[#4B48DF] text-[#fff]">{productservices.text}</button>
              ) : (
                <></>
              )}
            </Link>
          </div>
        ) : (
          <></>
        )}
      </section>
    );
  } else {
    return (
      <section id="w-03" className="h-[400px] font-[LINE]">
          <div className="ml-[40px]">
          <span className="mr-[9px] font-[700] text-[23px] text-[#FFB800]">Products & Services</span>
        </div>
        <div className="w-[720px] h-[337px] m-[0_auto] mt-[40px] flex flex-wrap">
          {products?.map((items) => {
            return (
              <div
                key={items.products_and_services_element_id}
                className="w-[226.88px] h-[298px] bg-[#fdfdfd] border border-solid border-[#ececec] rounded-[36px] m-[0_auto]"
              >
                <div className="w-[196.88px] h-[259.81px] ml-[18px] mt-[16px]">
                  {items.image? <img src={items.image} alt="" className='w-[191px] h-[140px] mt-[16px]'/>:<img src='/productno.png' alt="" className='w-[191px] h-[140px] mt-[16px]'/>}
                  <span className="font-bold text-[20px]/[100%] mt-[16.88px] flex justify-center">{items.name}</span>
                  <p className="font-bold text-[10.54px]/[100%] mt-[16.88px]">{items.title}</p>
                  <p className="font-normal text-[9.84px]/[170%] mt-[8.44px] flex justify-center">{items.description}</p>
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
  }
}

export function TeamMember({ theme }: HeaderProps) {
  const { teammembers, setTeamMember, teamimgurl, setTeamImgurl  } = useStore();
  // useEffect(() => {
  //   const updatedProducts = teammembers.map((teammember, index) => {
  //     if (index === teammembers.length - 1) {
  //       return {
  //         ...teammember,
  //         profile: teamimgurl,
  //       };
  //     }
  //     return teammember;
  //   });

  //   setTeamMember(updatedProducts);
  // }, [teamimgurl]);
  console.log(teammembers);
  if (theme === 'ThemeA') {
    return (
      <section id="w-04" className="h-[750px] font-[LINE]">
        <div className="ml-[100px] flex items-center">
          <span className="mr-[9px] font-[700] text-[23px]">Meat the Team</span>
          <span className="text-GrayScalePrimary-600 font-[400] text-[9px] w-[256px] mt-[8px] pl-[2px]">팀 소개</span>
        </div>

        <div className="w-[703.12px] h-[337px] m-[0_auto] mt-[42.19px] flex flex-wrap">
          {teammembers?.map((team) => {
            return (
            <div key={team.team_member_element_id} className="w-[169px] h-[337px] ml-[5px]">
              {team.profile? <img src={team.profile} alt="" className="w-[169px] h-[198px]" /> : <img src="/프로필.png" alt="" className="w-[169px] h-[198px]" />}
              <div className="w-[169px] h-[337px] mt-[11.4px]">
                <span className="font-bold text-[11px]/[100%]">{team.name}</span>
                <p className="font-bold text-[10px]/[100%] text-[#797979]">{team.group}/{team.position}</p>
                <p className="font-normal text-[9.84px]/[150%] mt-[8.44px]">
                  {team.tagline}
                </p>
                <p className="font-normal text-[9.84px]/[100%] mt-[14px]">{team.email}</p>
              </div>
            </div>
            )
          })}
        </div>
      </section>
    );
  } else {
    return (
      <section id="w-04" className="font-[LINE] h-[795px] ">
        <div className="ml-[40px]">
          <span className="mr-[9px] font-[700] text-[23px] text-[#FFB800]">Meat the Team</span>
          <p className="text-[#000] text-[30px] mt-[30px] pl-[2px]">팀원들을 소개합니다.</p>
        </div>

        <div className="w-[820px] h-[337px] m-[0_auto] mt-[25px] flex flex-wrap">
        {teammembers.map((team) => (
            <div key={team.team_member_element_id} className="w-[193px] h-[300px] ml-[10px] mb-[15px] rounded-3xl bg-[#fff] shadow-[3.5px_9.4px_11.8px_0px__rgba(197,197,197,0.25)]">
              <div className="w-[130px] h-[130px] m-[0_auto] mt-[12px]">
              {team.profile? <img src={team.profile} alt="" className="w-[130px] h-[130px] rounded-[160px]" />: <img src="/프로필.png" alt="" className="w-[130px] h-[130px] rounded-[160px]" />}    
              </div>
              <div className="w-[190px] h-[337px] mt-[11.4px]">
                <p className="font-bold text-[11px]/[100%] text-center mb-3">{team.name}</p>
                <p className="w-[130px] font-bold text-[10px]/[100%] text-[#797979] text-center m-[0_auto]">
                {team.group}/{team.position}
                </p>
                <p className="w-[100px] font-normal text-[9.84px]/[150%] mt-[8.44px] text-center m-[0_auto]">
                {team.tagline}
                </p>
                <p className="font-normal text-[9.84px]/[100%] mt-[14px] text-center">{team.email}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export function ContactUs({ theme }: HeaderProps) {
  if (theme === 'ThemeA') {
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
  const { news, setNews, newsimgurl, setNewsImgurl  } = useStore();
  
  if (theme === 'ThemeA') {
    return (
      <section id="w-06" className="h-[350px] font-[LINE]">
        <div className="ml-[100px] flex items-center">
          <span className="mr-[9px] font-[700] text-[23px]">News Room</span>
          <span className="text-GrayScalePrimary-600 font-[400] text-[9px] w-[256px] mt-[8px] pl-[2px]">보도 자료</span>
        </div>
        <div className="w-[709px] mt-[43px] m-[0_auto]">
          {news.map((item) => {
            return (
            <div key={item.news_element_id} className="w-[709px] border-t-[1.4px] border-b-[1.4px] border-[#DFDFDF] flex">
              <div className="w-[55px] h-[55px] ml-[34px] mt-[20px] flex flex-col items-center justify-center">
                <p className="text-[34px] font-bold text-[#4B48DF] text-center">3</p>
                <div className="mt-[-12px]">
                  <span className="text-[10px] font-bold text-[#868686] pr-[5px]">Jul</span>
                  <span className="text-[10px] font-bold text-[#868686]">{item.date}</span>
                </div>
              </div>
              <div className="w-[384px] ml-[39px] mt-[20px]">
                <p className="text-[14px]/[110%] font-bold">{item.title}</p>
                <p className="text-[11px]/[170%] text-[#868686] mt-[10px]">
                  {item.description}
                </p>
              </div>
              <div className="w-[141px] h-[74px] ml-[39px] mt-[11.5px] mb-[14px]">
              {item.image? <img src={item.image} alt="" />: <img src="/기사사진.png" alt="" />}    
                
              </div>
            </div>
            )
        })}
        </div>
      </section>
    );
  } else {
    return (
      <section id="w-06" className="h-[450px] font-[LINE]">
        <div className="ml-[40px]">
          <span className="mr-[9px] font-[700] text-[23px] text-[#FFB800]">News Room</span>
          <p className="text-[#000] text-[35px] mt-[30px] pl-[2px]">새로운 소식</p>
        </div>
        <div className="w-[820px] h-[337px] m-[0_auto] mt-[25px]">
        {news.map((item) => (
            <div key={item.news_element_id} className="w-[820px] flex mb-[20px]">
              <div>
              {item.image? <img src={item.image} className="w-[180px] h-[70px] rounded-[24px]" alt="" />: <img src="/기사사진.png" className="w-[180px] h-[70px] rounded-[24px]" alt="" />}         
              </div>
              <div className="w-[820px] ml-[40px]">
                <p className="text-[20px]/[110%] font-bold">{item.title}</p>
                <p className="text-[8px] text-[#939393]">{item.date}</p>
                <p className="text-[13px] text-[#464646]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export function Download({ theme }: HeaderProps) {
  if (theme === 'ThemeA') {
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
  // const newarray = [
  //   { title: '2023', text: '05-08', font: '미디어스타트업 지원사업 선정' },
  //   { title: '2022', text: '05-08', font: '미디어스타트업 지원사업 선정' },
  //   { title: '반가워', text: '05-08', font: '미디어스타트업 지원사업 선정' },
  // ];

  const { historys, setHistorys, historyimgurl, setHistoryImgurl  } = useStore();
  // useEffect(() => {
  //   const updatedProducts = historys.map((item, index) => {
  //     if (index === historys.length - 1) {
  //       return {
  //         ...item,
  //         image: historyimgurl,
  //       };
  //     }
  //     return item;
  //   });

  //   setHistorys(updatedProducts);
  // }, [historyimgurl]);
  if (theme === 'ThemeA') {
    return (
      <section id="w-08" className="h-[700px] font-[LINE] pt-20">
        <div className="ml-[100px] flex items-center">
          <span className="mr-[9px] font-[700] text-[23px]">History</span>
          <span className="text-GrayScalePrimary-600 font-[400] text-[9px] w-[256px] mt-[8px] pl-[2px]">연혁</span>
        </div>

        <div className="mt-[15px] flex flex-col md:grid grid-cols-9 mx-auto p-2 text-GrayScalePrimary-800">
          {historys.map((item,i) => (
            <React.Fragment key={item.history_element_id}>
              {i % 2 === 0 ? (
                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-[1px] bg-primary-400 pointer-events-none"></div>
                    </div>
                    <div className="w-5 h-5 ml-[2px] absolute top-1/2 -mt-3 rounded-full bg-white border-4 border-primary-400"></div>
                  </div>
                  <div className="col-start-6 col-end-10 p-4 my-4 mr-auto mt-[60px]">
                    <p className="font-bold text-[17px]/[100%]">{item.date}</p>
                    <p className="font-bold text-[9px]/[100%] mt-[13px]">{item.title}</p>
                    <p className="font-bold text-[10px]/[170%] mt-[5px] text-[#464646]">{item.description}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row-reverse md:contents">
                  <div className="col-start-1 col-end-5 ml-auto mt-[60px]">
                    <h3 className="mb-1 flex justify-end font-bold text-[17px]/[100%]">{item.date}</h3>
                    <p className="leading-tight text-justify flex justify-end font-bold text-[9px]/[100%] mt-[13px]">
                    {item.title}
                    </p>
                    <p className="leading-tight text-justify font-bold text-[9px]/[100%] mt-[5px]">{item.description}</p>
                  </div>
                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-[1px] bg-primary-400 pointer-events-none"></div>
                    </div>
                    <div className="w-5 h-5 ml-[2px] absolute top-1/2 -mt-3 rounded-full bg-white border-4 border-primary-400"></div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
          <button className="w-[113px] h-[33px] border border-solid border-[#4B48DF] ml-[386px]">MORE (3/N)</button>
        </div>
      </section>
    );
  } else {
    return (
      <section id="w-08" className="h-[700px] font-[LINE]">
        <div className="ml-[40px]">
          <span className="mr-[9px] font-[700] text-[23px] text-[#FFB800]">History</span>
          <p className="text-[#000] text-[34px] mt-[23px] pl-[2px]">질링스가 걸어온 길</p>

          <div className="w-[820px] h-[481px] rounded-[25px] shadow-[0px_0.7px_8.5px_0px__rgba(197,197,197,0.30)] mt-[27px]">
            <ul className="w-[720px] h-[400px] m-[0px_auto] pt-[40px]">
            {historys.map((item,i) => (
                <li className="relative flex items-baseline gap-6 pb-8">
                  <div className="before:absolute before:left-[5.5px] before:h-full before:w-[2.5px] before:bg-review">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="12"
                      className="bi bi-circle-fill fill-review"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </div>
                  <div className="flex justify-center items-center">
                    <div>
                      <p className="text-[22px] font-bold text-[#464646]">{item.date}</p>
                      <p className="text-sm mt-[11px] text-[14px] font-bold text-[#464646]">{item.title}</p>
                      <p className="text-[11px] text-[#464646]">
                      {item.description}
                      </p>
                    </div>
                    <img src="/history.png" className="mt-[10px]" alt="" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export function TeamCulture({ theme }: HeaderProps) {
  if (theme === 'ThemeA') {
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
  if (theme === 'ThemeA') {
    return (
      <section id="w-10" className="font-[LINE] h-[180px]">
        <div className="ml-[100px] flex items-center mt-[14px]">
          <span className="mr-[9px] font-[700] text-[23px]">Key Achievements</span>
          <span className="text-GrayScalePrimary-600 font-[400] text-[9px] w-[256px] mt-[8px] pl-[2px]">핵심 성과</span>
        </div>

        <div className="w-[704.12px] h-[114px] m-[0_auto] mt-[42.19px] flex flex-wrap">
          {[1, 2, 3, 4].map((_, i) => (
            <div className="w-[175px] h-[113px]">
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
      <section id="w-10" className="h-[300px]">
        <div className="ml-[40px] mt-[40px]">
          <span className="mr-[9px] font-[700] text-[23px] text-[#FFB800]">Key Achievements</span>
          <p className="text-[#000] text-[30px] mt-[20px] pl-[2px]">우리는 성장하고 있습니다.</p>
        </div>
        <div className="w-[810.12px] h-[114px] m-[0_auto] mt-[42.19px] flex flex-wrap space-x-5">
          {[1, 2, 3, 4].map((_, i) => (
            <div className="w-[185px] h-[113px] rounded-2xl bg-[#fff] shadow-[0px_1px_12px_0px__rgba(197,197,197,0.3)]">
              <p className="font-bold text-[32px]/[100%] text-[#000] text-center mt-[15px]">7억원</p>
              <p className="font-bold text-[18px]/[100%] text-[#000] mt-[13px] text-center">초기 투자금 유치</p>
              <p className="text-[10px]/[120%] mt-[5px] text-[#000] text-center">
                2018년 5개 투자사로부터 초기 투자 자금 유치
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export function Partners({ theme }: HeaderProps) {
  if (theme === 'ThemeA') {
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
  if (theme === 'ThemeA') {
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
  const channelValues = Object.values(channel);

  if (theme === 'ThemeA') {
    return (
      <section id="w-13" className="h-[200px] w-full relative mt-[20px]">
        <span className="font-[700] text-[22px] font-[LINE] ml-[100px]">SNS Channel</span>
        <span className="font-[500] text-[10px] text-GrayScaleNeutral-700 ml-[5px] mt-[30px]">채널</span>
        <div className="flex mt-[30px] w-[calc(100%-200px)] ml-[100px] h-[50px] justify-center">
          {channelList.map((items, index) => {
            if (channelValues[index * 2]) {
              return (
                <div className="flex flex-row mr-[4px]" key={index}>
                  <img src={items.img} className="w-[50px] h-[50px]" />
                  <span className="text-[10px] mt-[30px]">{channelValues[index * 2 + 1]}</span>
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
          {channelList.map((items, index) => {
            if (channelValues[index * 2]) {
              return (
                <div
                  className="flex flex-row mr-[4px] bg-white w-[70px] h-[70px] rounded-[14px] drop-shadow-xl mx-[20px] items-center justify-center"
                  key={index}
                >
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
  if (theme === 'ThemeA') {
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
