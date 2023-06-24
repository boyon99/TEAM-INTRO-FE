export default function DownloadCount() {
  return (
    <div className="w-32 space-y-5">
      <div className="text-center">
        <span className="border-[0.8px] border-GrayScalePrimary-800 rounded-[20px] px-2 py-[5px] text-[11px] text-GrayScalePrimary-800">
          오늘
        </span>
      </div>
      <div>
        <section className="flex items-center justify-between">
          <article className="text-xs text-GrayScalePrimary-800">회사소개서</article>
          <article>
            <span className="text-error-400 text-[40px] font-bold">10</span>
            <span className="text-sm text-GrayScalePrimary-800">회</span>
          </article>
        </section>
        <section className="flex items-center justify-between">
          <span className="text-xs text-GrayScalePrimary-800">미디어킷</span>
          <article>
            <span className="text-primary-400 text-[40px] font-bold">10</span>
            <span className="text-sm text-GrayScalePrimary-800">회</span>
          </article>
        </section>
      </div>
    </div>
  );
}
