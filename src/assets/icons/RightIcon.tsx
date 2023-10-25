import type { ComponentPropsWithRef } from 'react';

type Props = ComponentPropsWithRef<'svg'> & {
  $type: keyof typeof RIGHT_TYPE;
};

const RIGHT_TYPE = {
  message: {
    width: 6,
    height: 10,
    fill: '#CECECE',
  },
  userInfo: {
    width: 8,
    height: 14,
    fill: '#000000',
  },
} as const;

const RightIcon = ({ $type }: Props) => {
  const { width, height, fill } = RIGHT_TYPE[$type];

  return (
    <svg width={width} height={height} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.69246 7.62996L1.75496 13.5675C1.58765 13.7348 1.36072 13.8288 1.1241 13.8288C0.887485 13.8288 0.660558 13.7348 0.493244 13.5675C0.32593 13.4001 0.231934 13.1732 0.231934 12.9366C0.231934 12.7 0.32593 12.4731 0.493244 12.3057L5.80063 6.99985L0.494729 1.69246C0.411883 1.60962 0.346166 1.51127 0.30133 1.40302C0.256494 1.29478 0.233418 1.17877 0.233418 1.0616C0.233418 0.944442 0.256494 0.828428 0.30133 0.720185C0.346166 0.611942 0.411883 0.51359 0.494729 0.430744C0.577574 0.347899 0.675926 0.282182 0.784169 0.237346C0.892412 0.19251 1.00843 0.169434 1.12559 0.169434C1.24275 0.169434 1.35876 0.19251 1.46701 0.237346C1.57525 0.282182 1.6736 0.347899 1.75645 0.430744L7.69395 6.36824C7.77688 6.45108 7.84264 6.54948 7.88747 6.65779C7.93229 6.7661 7.9553 6.88219 7.95516 6.99941C7.95502 7.11663 7.93174 7.23267 7.88666 7.34087C7.84159 7.44908 7.77559 7.54732 7.69246 7.62996Z"
        fill={fill}
      />
    </svg>
  );
};

export default RightIcon;
