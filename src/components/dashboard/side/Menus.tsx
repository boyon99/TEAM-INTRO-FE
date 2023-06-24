import ActiveLink from '../ActiveLink';

export default function Menus() {
  return (
    <section className="flex flex-col">
      <ActiveLink href={'/dashboard/main'} order={2} activeClassName="dashboard-active-menu" className="dashboard-menu">
        대시보드
      </ActiveLink>
      <ActiveLink
        href={'/dashboard/contact/unconfirmed'}
        order={2}
        activeClassName="dashboard-active-menu"
        className="dashboard-menu"
      >
        연락 관리
      </ActiveLink>
      <ActiveLink
        href={'/dashboard/downloads'}
        order={2}
        activeClassName="dashboard-active-menu"
        className="dashboard-menu"
      >
        다운로드 관리
      </ActiveLink>
      <ActiveLink
        href={'/dashboard/visitors'}
        order={2}
        activeClassName="dashboard-active-menu"
        className="dashboard-menu"
      >
        방문자 기록
      </ActiveLink>
    </section>
  );
}
