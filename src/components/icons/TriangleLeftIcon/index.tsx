import type { FunctionComponent } from "react";

interface IProps {
  color: string;
}

const TriangleLeftIcon: FunctionComponent<IProps> = ({ color }) => {
  return (
    <svg
      viewBox="0 0 542 324"
      width="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0L331 198L542 324H0V0Z" fill={color} />
    </svg>
  );
};

export default TriangleLeftIcon;
