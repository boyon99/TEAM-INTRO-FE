export default function DownloadTable({ data }: { data: any }) {
  return (
    <div className="flex px-[60px] justify-between">
      <table className="w-[350px] flex flex-col">
        <thead className="border-b border-b-GrayScalePrimary-200 mb-1">
          <tr className="space-x-14">
            <th className="h-12 leading-[48px] w-20 inline-block ml-24 text-[15px] text-GrayScaleNeutral-1000">분류</th>
            <th className="h-12 leading-[48px] w-20 inline-block text-[15px] text-GrayScaleNeutral-1000">날짜</th>
          </tr>
        </thead>

        <tbody>
          {data.slice(0, 2).map((el: any, idx: number) => (
            <tr key={idx}>
              <td className="h-10 leading-10 w-24 text-center inline-block text-sm text-GrayScalePrimary-800">
                {idx + 1}
              </td>
              <td className="mr-14 h-10 text-center truncate leading-10 w-20 inline-block text-sm text-GrayScalePrimary-800">
                {el.category}
              </td>
              <td className="h-10 text-center truncate leading-10 w-20 inline-block text-sm text-GrayScalePrimary-800">
                {el.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="w-[350px] flex flex-col">
        <thead className="border-b border-b-GrayScalePrimary-200 mb-1">
          <tr className="space-x-14">
            <th className="h-12 leading-[48px] w-20 inline-block ml-24 text-[15px] text-GrayScaleNeutral-1000">분류</th>
            <th className="h-12 leading-[48px] w-20 inline-block text-[15px] text-GrayScaleNeutral-1000">날짜</th>
          </tr>
        </thead>

        <tbody>
          {data.slice(2, 4).map((el: any, idx: number) => (
            <tr key={idx}>
              <td className="h-10 leading-10 w-24 text-center inline-block text-sm text-GrayScalePrimary-800">
                {idx + 3}
              </td>
              <td className="mr-14 h-10 text-center truncate leading-10 w-20 inline-block text-sm text-GrayScalePrimary-800">
                {el.category}
              </td>
              <td className="h-10 text-center truncate leading-10 w-20 inline-block text-sm text-GrayScalePrimary-800">
                {el.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
