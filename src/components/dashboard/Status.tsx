import ActiveLink from './ActiveLink';
import CompanyPreview from './CompanyPreview';

export default function Status() {
  return (
    <div className='w-[248px] h-[200px] border border-GrayScalePrimary-200 rounded-xl'>
      <CompanyPreview />
      <ActiveLink
        href={'/dashboard'}
        children={'대시보드'}
        activeClassName='text-black'
        className='text-GrayScalePrimary-400'
      />
      <ActiveLink
        href={'/contacts'}
        children={'연락 관리'}
        activeClassName='text-black'
        className='text-GrayScalePrimary-400'
      />
      <ActiveLink
        href={'/downloads'}
        children={'다운로드 관리'}
        activeClassName='text-black'
        className='text-GrayScalePrimary-400'
      />
      <ActiveLink
        href={'/visitors'}
        children={'방문자 기록'}
        activeClassName='text-black'
        className='text-GrayScalePrimary-400'
      />
    </div>
  );
}
