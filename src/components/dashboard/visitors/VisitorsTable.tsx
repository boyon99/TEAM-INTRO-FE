type Visitor = {
  device: string;
  keyword: string;
  date: string;
};

export default function VisitorsTable({ data }: { data: Visitor[] }) {
  return (
    <table className="mx-auto mt-4">
      <thead className="block w-[800px] border-b border-GrayScalePrimary-200">
        <tr className="flex justify-evenly">
          <th className="visitors-table-header">접속 기기</th>
          <th className="visitors-table-header">공유 번호</th>
          <th className="visitors-table-header">조회 날짜</th>
        </tr>
      </thead>

      <tbody className="block w-[800px]">
        {data.map((visitor, idx) => (
          <tr
            key={idx}
            className="border-b-[0.5px] border-b-GrayScalePrimary-150 w-full flex justify-evenly last:border-b-0"
          >
            <td className="visitors-table-data">{visitor.device}</td>
            <td className="visitors-table-data">{visitor.keyword}</td>
            <td className="visitors-table-data">{visitor.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
