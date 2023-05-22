import type { FunctionComponent } from "react";

interface IProps {
  color: string;
}

const TriangleRightIcon: FunctionComponent<IProps> = ({ color }) => {
  return (
    <svg
      viewBox="0 0 542 324"
      fill="none"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M274 158L542 0V324H0L274 158Z" fill={color} />
    </svg>
  );
};

export default TriangleRightIcon;
