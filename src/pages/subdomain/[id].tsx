import { postIntroPageUser } from '@/apis/subdomain';
import {
  Channel,
  ContactUs,
  Download,
  Footer,
  Header,
  KeyVisual,
  MissionVision,
  Press,
  ProductService,
  Result,
  TeamMember,
  History,
} from '@/components/subdomain/Widget';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useStore from '@/store';
import { is } from 'date-fns/locale';
import ErrorPage from '../404';
import Loading from '../Loading';

function Preview({ data, isLoading, isSuccess }: { data: any; isLoading: boolean; isSuccess: boolean }) {
  if (isLoading) return <Loading />;
  if (!isSuccess) return <ErrorPage />;
  const { widgets, theme, header_and_footer, company_info, site_info, intro_page_id } = data;
  return (
    <div>
      {
        <div className="w-full h-full">
          {/* 헤더 */}
          <Header
            theme={theme.type}
            data={company_info}
            header_and_footer_status_list={Object.values(header_and_footer)}
          />
          {/* 위젯 */}
          {widgets.map((widget: any, index: number) => {
            const widgetId = widget.widget_type;
            return (
              <div key={index}>
                {widgetId === 5 && widget.widget_status ? <KeyVisual theme={theme.type} data={widget} /> : null}
                {widgetId === 1 && widget.widget_status ? <MissionVision theme={theme.type} data={widget} /> : null}

                {widgetId === 2 && widget.widget_status ? <ProductService theme={theme.type} data={widget} /> : null}
                {widgetId === 6 && widget.widget_status ? <TeamMember theme={theme.type} data={widget} /> : null}
                {widgetId === 3 && widget.widget_status ? <ContactUs theme={theme.type} data={widget} /> : null}
                {widgetId === 11 && widget.widget_status ? <Press theme={theme.type} data={widget} /> : null}
                {widgetId === 12 && widget.widget_status ? (
                  <Download theme={theme.type} data={widget} intro_page_id={intro_page_id} />
                ) : null}
                {widgetId === 9 && widget.widget_status ? <History theme={theme.type} data={widget} /> : null}
                {/* {widgetId === 8 && widget.widget_status ? <TeamCulture theme={theme.type} /> : null} */}
                {widgetId === 7 && widget.widget_status ? <Result theme={theme.type} data={widget} /> : null}
                {/* {widgetId === 13 && widget.widget_status ? <Partners theme={theme.type} /> : null} */}
                {/* {widgetId === 4 && widget.widget_status ? <Review theme={theme.type} /> : null} */}
                {widgetId === 14 && widget.widget_status ? <Channel theme={theme.type} data={widget.sns_list} /> : null}
                {/* {widgetId === 10 && widget.widget_status ? <Patent theme={theme.type} /> : null} */}
              </div>
            );
          })}
          {/* 푸터 */}
          {header_and_footer.footer ? <Footer theme={theme.type} data={{ ...site_info, ...company_info }} /> : null}
        </div>
      }
    </div>
  );
}

function SubDomain() {
  const router = useRouter();
  if (router && router.query && router.query.id) {
    const {
      data: subDomainData,
      isLoading,
      isSuccess,
    } = useQuery(
      ['postIntroPageUser'],
      () =>
        postIntroPageUser({
          sub_domain: router.query.id as string,
        }).then((a) => {
          return a.data;
        }),
      {
        staleTime: 60000, // 60초 (1분)으로 설정된 캐시 유효 시간
        cacheTime: 10000,
        refetchOnWindowFocus: false, // 포커스가 다시 들어왔을 때 다시 불러올지 여부
        retry: false, // 에러 발생 시 재시도 여부
      },
    );
    return (
      <div className="w-[1280px] mx-auto">
        <Preview data={subDomainData} isLoading={isLoading} isSuccess={isSuccess} />
      </div>
    );
  }
}

export default SubDomain;
