export default function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{label}</p>
        <p>{`${payload[0].name} : ${payload[0].value}`}</p>
        {payload[1] && <p>{`${payload[1].name} : ${payload[1].value}`}</p>}
      </div>
    );
  }

  return null;
}
