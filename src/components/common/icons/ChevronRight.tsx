export type ChevronProps = {
  disabled?: boolean;
};

const ChevronRight = ({ disabled }: ChevronProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_2135_12617" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2135_12617)">
        <path
          d="M9.40008 17.3054L8.69238 16.5977L13.2924 11.9977L8.69238 7.3977L9.40008 6.69L14.7078 11.9977L9.40008 17.3054Z"
          fill={`${disabled ? '#B3B2C0' : '#6E6D86'}`}
        />
      </g>
    </svg>
  );
};
export default ChevronRight;
