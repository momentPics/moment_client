import type { ComponentPropsWithRef } from 'react';

type Props = ComponentPropsWithRef<'svg'> & {
  active: boolean;
};

const DeleteIcon = ({ active, ...props }: Props) => {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.25 3.07692H13.5V2.30769C13.5 1.69565 13.2629 1.10868 12.841 0.675907C12.419 0.243131 11.8467 0 11.25 0H6.75C6.15326 0 5.58097 0.243131 5.15901 0.675907C4.73705 1.10868 4.5 1.69565 4.5 2.30769V3.07692H0.75C0.551088 3.07692 0.360322 3.15797 0.21967 3.30223C0.0790178 3.44648 0 3.64214 0 3.84615C0 4.05017 0.0790178 4.24582 0.21967 4.39008C0.360322 4.53434 0.551088 4.61538 0.75 4.61538H1.5V18.4615C1.5 18.8696 1.65804 19.2609 1.93934 19.5494C2.22064 19.8379 2.60218 20 3 20H15C15.3978 20 15.7794 19.8379 16.0607 19.5494C16.342 19.2609 16.5 18.8696 16.5 18.4615V4.61538H17.25C17.4489 4.61538 17.6397 4.53434 17.7803 4.39008C17.921 4.24582 18 4.05017 18 3.84615C18 3.64214 17.921 3.44648 17.7803 3.30223C17.6397 3.15797 17.4489 3.07692 17.25 3.07692ZM6 2.30769C6 2.10368 6.07902 1.90802 6.21967 1.76376C6.36032 1.61951 6.55109 1.53846 6.75 1.53846H11.25C11.4489 1.53846 11.6397 1.61951 11.7803 1.76376C11.921 1.90802 12 2.10368 12 2.30769V3.07692H6V2.30769ZM15 18.4615H3V4.61538H15V18.4615ZM7.5 8.46154V14.6154C7.5 14.8194 7.42098 15.0151 7.28033 15.1593C7.13968 15.3036 6.94891 15.3846 6.75 15.3846C6.55109 15.3846 6.36032 15.3036 6.21967 15.1593C6.07902 15.0151 6 14.8194 6 14.6154V8.46154C6 8.25753 6.07902 8.06187 6.21967 7.91761C6.36032 7.77335 6.55109 7.69231 6.75 7.69231C6.94891 7.69231 7.13968 7.77335 7.28033 7.91761C7.42098 8.06187 7.5 8.25753 7.5 8.46154ZM12 8.46154V14.6154C12 14.8194 11.921 15.0151 11.7803 15.1593C11.6397 15.3036 11.4489 15.3846 11.25 15.3846C11.0511 15.3846 10.8603 15.3036 10.7197 15.1593C10.579 15.0151 10.5 14.8194 10.5 14.6154V8.46154C10.5 8.25753 10.579 8.06187 10.7197 7.91761C10.8603 7.77335 11.0511 7.69231 11.25 7.69231C11.4489 7.69231 11.6397 7.77335 11.7803 7.91761C11.921 8.06187 12 8.25753 12 8.46154Z"
        fill={active ? '#F45959' : '#000000'}
      />
    </svg>
  );
};

export default DeleteIcon;
