import type { ComponentPropsWithRef } from 'react';

const BackIcon = (props: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6215 6.27262C16.1262 5.75273 16.1262 4.90981 15.6215 4.38992C15.1168 3.87003 14.2985 3.87003 13.7938 4.38992L5.37852 13.0587C4.87383 13.5785 4.87383 14.4215 5.37852 14.9413L13.7938 23.6101C14.2985 24.13 15.1168 24.13 15.6215 23.6101C16.1262 23.0902 16.1262 22.2473 15.6215 21.7274L9.28493 15.2H23C23.6627 15.2 24.2 14.6627 24.2 14C24.2 13.3373 23.6627 12.8 23 12.8H9.28492L15.6215 6.27262Z"
        fill="#1A1A1A"
      />
    </svg>
  );
};

export default BackIcon;
