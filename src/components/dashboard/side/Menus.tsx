import ActiveLink from './ActiveLink';

export default function Menus() {
  return (
    <section className="flex flex-col">
      <ActiveLink href={'/dashboard'} order={1} activeClassName="dashboard-active-menu" className="dashboard-menu">
        대시보드
      </ActiveLink>
      <ActiveLink
        href={'/contact/unconfirmed'}
        order={1}
        activeClassName="dashboard-active-menu"
        className="dashboard-menu"
      >
        연락 관리
      </ActiveLink>
      <ActiveLink href={'/downloads'} order={1} activeClassName="dashboard-active-menu" className="dashboard-menu">
        다운로드 관리
      </ActiveLink>
      <ActiveLink href={'/visitors'} order={1} activeClassName="dashboard-active-menu" className="dashboard-menu">
        방문자 기록
      </ActiveLink>
    </section>
  );
}
