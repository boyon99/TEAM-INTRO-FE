import { teamadd, teamdelete } from '@/apis/auth';
import Layout from '@/components/builder/Layout';
import { BeforeButtonSmall, PrimaryButton } from '@/components/common/button';
import { BuilderInput, BuilderTextarea } from '@/components/common/input';
import { ProductTitle, TeamTitle } from '@/components/common/product';
import { Toggle, ToggleWidget } from '@/components/common/toggle';
import { TeamDelete } from '@/interfaces/auth';
import useStore from '@/store';
import { getCookie } from '@/utils/cookies';
import { validateImageSize } from '@/utils/fileCheck';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function TeamMemberView() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { teamadd, setTeamAdd, teammembers, setTeamMember, widgets, setToggle } = useStore();
  const [toggle, setTogglebase] = useState(true);
  const findWigetToggle = widgets.find((widget) => widget.widget_id === 6);
  // 추가하기 버튼 클릭시 빈상자(빈배열)가 생김
  const TeamAddonClick = () => {
    setTeamAdd(!teamadd);
    setTeamMember([
      ...teammembers,
      {
        team_member_element_id: teammembers.length + 1,
        order: teammembers.length + 1,
        name: '',
        group: '',
        position: '',
        tagline: '',
        email: '',
        profile: '',
      },
    ]);
  };
 
  //  배열 리스트 삭제/위치 이동시 체크박스 그대로 유지
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

 

  // 팀 멤버 삭제 요청api
  const { mutate: deletemutate } = useMutation(teamdelete, {
    onSuccess: (data) => {
      
    },
    onError: (err: AxiosError) => {
      const Eresponse = err.response?.data;
      const { data }: any = Eresponse;
    },
  });
  const handleCheckboxChange = (productId: any) => {
    if (selectedItems.includes(productId)) {
      setSelectedItems(selectedItems.filter((id: any) => id !== productId));
    } else {
      setSelectedItems([...selectedItems, productId]);
    }
  };
  // 삭제 요청과의 별개로 저장되어있던 미리보기 ui 삭제
  const deleteSelectedItems = () => {
    const updatedProducts = teammembers.filter((product) => !selectedItems.includes(product.team_member_element_id));
    const filteredArray: TeamDelete = {
      delete_list: selectedItems.filter((item) => item !== undefined) as number[],
    };
    
    deletemutate(filteredArray);
    setTeamMember(updatedProducts);
    setSelectedItems([]);
  };

  return (
    <div className="ml-[28px]">
      <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 팀 멤버" />
      <div className="font-[700] text-[24px] mt-[16px] flex items-center">
        <img src="/팀 멤버.png" alt="product" className="w-[26px] h-[26px]" />
        <span className="ml-[8px]">팀 멤버</span>
      </div>
      <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
        팀 멤버들의 아이덴티티, 역량과 발전 가능성과 성과 등을 회사에서 맡은 역할과 연결해 표현해주세요.
      </div>
      <div className="mt-[48px]">
        <span className="font-bold text-sm/[100%] text-[#57566a]">사용여부</span>
        <div className="mt-[12px]">
          <ToggleWidget
            toggle={findWigetToggle?.toggle as boolean}
            setWidgetToggle={setToggle}
            widgetId={6}
            toggleText={{ true: '사용', false: '사용 안함' }}
          />
        </div>
      </div>
      {findWigetToggle?.toggle ? (
        <>
          <div className="mt-[48px]">
            <span className="font-bold text-lg/[110%] text-[#57566a]">팀 멤버 편집</span>
          </div>
          <TeamTitle
            onClick={TeamAddonClick}
            deleteSelectedItems={deleteSelectedItems}
            handleCheckboxChange={handleCheckboxChange}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </>
      ) : (
        <></>
      )}

      {/* 저장하기 */}
      <PrimaryButton
        form="view"
        type="primary"
        text="저장하기"
        onClick={() => {}}
        classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
      />
    </div>
  );
}

function TeamMemberAdd() {
  interface EnterForm {
    name: string;
    group: string;
    position: string;
    profile: FileList;
    tagline: string;
    email: string;
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EnterForm>();
  const { teammembers, setTeamMember, teamimgurl, setTeamImgurl, setTeamAdd } = useStore();
  const [teammemberview, setTeamMemberView] = useState('');

  useEffect(() => {
    const updatedProducts = teammembers.map((teammember, index) => {
      if (index === teammembers.length - 1) {
        return {
          ...teammember,
          profile: teammemberview,
        };
      }
      return teammember;
    });

    setTeamMember(updatedProducts);
  }, [teammemberview]);

  // 팀 멤버 추가하기 api 요청
  const {
    mutate: teammutate,
    isLoading: userLoading,
    error: usererror,
  } = useMutation(teamadd, {
    onSuccess: (data) => {
      
      setTeamAdd(false); // 저장하기가 성공하면 뒤로가기
    },
    onError: (err: AxiosError) => {
      const Eresponse = err.response?.data;
      const { data }: any = Eresponse;
      
    },
  });

  // 이미지를 포함하여 요청을 보낼 경우 이미지 경로를 미리 받아와서 요청 보내기
  const token = getCookie('access_token');
  const onValid = async (data: any) => {
    const image = watch('profile');
   
    const form = new FormData();
    form.append('image', data.profile[0]);
    form.append('name', `${image}`);
    form.append('type', 'string');
    try {
      const response = await axios.post('/api/s/user/uploadImage', form, {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      const avatar = response.data.data.upload_path;
      
      const user = {
        name: data.name,
        group: data.group,
        position: data.position,
        profile: avatar,
        tagline: data.tagline,
        email: data.email,
        sns_status: true,
      };

      teammutate(user);
    } catch (error) {
      console.log(error);
    }
  };

  // 이미지의 삭제 버튼 클릭시 미리보기 이미지 삭제
  const deleteonClick = () => {
    setTeamMemberView('');
    setTeamImgurl('');
  };

  return (
    <div className="ml-[28px]">
      <BeforeButtonSmall pageName="빌더 &#8739; 위젯 &#8739; 팀 멤버" />
      <div className="font-[700] text-[24px] mt-[16px] flex items-center">
        <img src="/팀 멤버.png" alt="product" className="w-[26px] h-[26px]" />
        <span className="ml-[8px]">팀 멤버</span>
      </div>
      <div className="w-[260px] font-[500] text-[16px] mt-[16px] text-GrayScalePrimary-700">
        팀 멤버들의 아이덴티티, 역량과 발전 가능성과 성과 등을 회사에서 맡은 역할과 연결해 표현해주세요.
      </div>
      <form id="team" onSubmit={handleSubmit(onValid)}>
        <div className="mt-[48px]">
          <span className="mt-[20px] text-GrayScalePrimary-700 font-bold text-[18px]/110%">팀 멤버 추가하기</span>
          <div className="mt-[24px] font-[700] text-[14px] text-GrayScalePrimary-700">프로필 이미지</div>
          <div
            className={
              'w-[264px] h-[138px] rounded-[6px] border-[2px] border-GrayScalePrimary-300 mt-[8px] indent-[10px] flex flex-col'
            }
          >
            {/* 이미지 업로드 시 업로드한 이미지 미리보기 */}
            {teammemberview === '' ? null : (
              <div className="relative overflow-hidden">
                <div>
                  <img
                    src={teammemberview}
                    className="m-[auto] object-contain max-w-[264px] max-h-[138px]"
                    alt="logo-img"
                  />
                </div>
                <button className="w-[32px] h-[32px] absolute right-[8px] top-[7px]" onClick={deleteonClick}>
                  <img src="/delete.png" />
                </button>
              </div>
            )}

            {/* 이미지 업로드 버튼 */}
            {/* 이미지가 존재하지 않는 경우, 이미지 업로드 버튼이 보이고, 이미지가 존재하는 경우 사라짐 */}
            {teammemberview === '' ? (
              <>
                <div className="w-[60px] h-[60px] rounded-[10px] bg-primary-100 mx-[auto] mt-[14px]">
                  <input
                    className="hidden"
                    type="file"
                    id="file-input"
                    {...register('profile', {
                      onChange: (e) => {
                        validateImageSize({ e, setTeamMemberView, setTeamImgurl });
                      },
                    })}
                  />
                  <label className="file-input__label" htmlFor="file-input">
                    <img src="/union.png" className="w-[20px] h-[20px] m-[auto] mt-[20px]" />
                  </label>
                </div>
                <span className="font-[500] text-[14px] text-GrayScalePrimary-700 mt-[8px] ml-[55px]">
                  이미지를 추가해주세요.
                </span>
                <span className="font-[500] text-[14px] text-GrayScalePrimary-400 ml-[80px]">최대 100mb</span>
              </>
            ) : null}
          </div>

          <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">
            238x280, png 권장, 최대 100mb
          </div>
          <div className="mt-[34px]">
            <BuilderInput
              register={register('name')}
              title="성명"
              type="text"
              placeholder="예: 성이름"
              id="pageTitle"
              onChange={(e) => {
                const updatedTeam = teammembers.map((teammember, index) => {
                  if (index === teammembers.length - 1) {
                    return {
                      ...teammember,
                      name: e.target.value,
                    };
                  }
                  return teammember;
                });

                setTeamMember(updatedTeam);
              }}
            />
            <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">최대20자</div>

            <BuilderInput
              register={register('group')}
              title="소속"
              type="text"
              placeholder="예: 소속/팀"
              id="pageTitle"
              onChange={(e) => {
                const updatedTeam = teammembers.map((teammember, index) => {
                  if (index === teammembers.length - 1) {
                    return {
                      ...teammember,
                      group: e.target.value,
                    };
                  }
                  return teammember;
                });

                setTeamMember(updatedTeam);
              }}
            />
            <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">최대20자</div>

            <BuilderInput
              register={register('position')}
              title="직책"
              type="text"
              placeholder="예: Web Developer"
              id="pageTitle"
              onChange={(e) => {
                const updatedTeam = teammembers.map((teammember, index) => {
                  if (index === teammembers.length - 1) {
                    return {
                      ...teammember,
                      position: e.target.value,
                    };
                  }
                  return teammember;
                });

                setTeamMember(updatedTeam);
              }}
            />
            <div className="text-GrayScalePrimary-600 font-[400] text-[12px] w-[256px] mt-[8px] pl-[2px]">최대20자</div>

            <BuilderTextarea
              register={register('tagline')}
              title="한줄 소개"
              type="text"
              placeholder="예: 스타트업 전문 패스트빌더입니다."
              id="businessNumber"
              onChange={(e) => {
                const updatedTeam = teammembers.map((teammember, index) => {
                  if (index === teammembers.length - 1) {
                    return {
                      ...teammember,
                      tagline: e.target.value,
                    };
                  }
                  return teammember;
                });

                setTeamMember(updatedTeam);
              }}
            />
            <BuilderInput
              register={register('email')}
              title="이메일"
              type="text"
              placeholder="예: contact@zillinks.com"
              id="pageTitle"
              onChange={(e) => {
                const updatedTeam = teammembers.map((teammember, index) => {
                  if (index === teammembers.length - 1) {
                    return {
                      ...teammember,
                      email: e.target.value,
                    };
                  }
                  return teammember;
                });

                setTeamMember(updatedTeam);
              }}
            />
          </div>
        </div>
      </form>

      {/* 저장하기 */}
      <PrimaryButton
        type="primary"
        text="저장하기"
        form="team"
        onClicka={() => {}}
        classname="w-[264px] h-[42px] mt-[48px] text-[18px] font-[700]"
      />
    </div>
  );
}

export default function TeamMember() {
  const { teamadd } = useStore();
  return <div>{teamadd ? <Layout>{<TeamMemberAdd />}</Layout> : <Layout>{<TeamMemberView />}</Layout>}</div>;
}
