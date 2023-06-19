import ActiveLink from './ActiveLink';

export default function Menus() {
  return (
    <section className='flex flex-col'>
      <ActiveLink
        href={'/dashboard'}
        children={'대시보드'}
        activeClassName='dashboard-active-menu'
        className='dashboard-menu'
      />
      <ActiveLink
        href={'/contacts'}
        children={'연락 관리'}
        activeClassName='dashboard-active-menu'
        className='dashboard-menu'
      />
      <ActiveLink
        href={'/downloads'}
        children={'다운로드 관리'}
        activeClassName='dashboard-active-menu'
        className='dashboard-menu'
      />
      <ActiveLink
        href={'/visitors'}
        children={'방문자 기록'}
        activeClassName='dashboard-active-menu'
        className='dashboard-menu'
      />
    </section>
  );
}
