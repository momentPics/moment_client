import { DefaultTheme } from 'styled-components';

/**
 * css 폰트 변수들입니다.
 * 
 * @example
 * const BodyText = styled.p`
 *   font-family:${({theme})=>theme.typography.body1.fontFamily};
 *   font-style:${({theme})=>theme.typography.body1.fontWeight}
 *   font-size:${({theme})=>theme.typography.body1.fontSize};
 *   line-height:${({theme})=>theme.typography.body1.lineHeight};
 * `;
 * 
 * 
 * css 컬러 변수들입니다.
 * 
 * @example
 *  const MenuTitle = styled.span` 
      color: ${(props) => props.theme.colors.point} 
 * `;
 *
 * point: '#92B5D9'
 * subPoint: '#00A3FF'
 * pointPurple: '#66648B'
 * subPurple: '#4B10AC'
 * red: '#F45959'
 * blue: '#1164CD'
 * kakao: '#FEE500'
 * white: '#ffffff'
 * lightGray: '#F5F5F5'
 * lightGray2: '#ECECEC'
 * lightGray3: '#D7D7D7'
 * lightGray4: '#CECECE'
 * lightGray5: '#B4B4B4'
 * gray1: '#949494'
 * gray2: '#787878'
 * gray3: '#5C5C5C'
 * gray4: '#434343'
 * darkGray: '#2F2F2F'
 * darkGray2: '#1B1B1B'
 * black: '#000000'
 * 
 */

export const themeDefault: DefaultTheme = {
  fonts: {
    medium: 'NexonGothicMedium',
    light: 'NexonGothicLight',
    bold: 'NexonGothicBold',
  },
  fontWeight: {
    regular: 400,
    bold: 700,
  },
  typography: {
    body1: {
      fontFamily: 'NexonGothicMedium',
      fontSize: '12px',
      lineHeight: '18px',
    },
    body2: {
      fontFamily: 'NexonGothicMedium',
      fontSize: '14px',
      lineHeight: '22px',
    },
    body3: {
      fontFamily: 'NexonGothicMedium',
      fontSize: '16px',
      lineHeight: '24px',
    },
    subHead: {
      fontFamily: 'NexonGothicBold',
      fontSize: '12px',
      lineHeight: '18px',
    },
    subHead2: {
      fontFamily: 'NexonGothicBold',
      fontSize: '14px',
      lineHeight: '20px',
    },
    subHead3: {
      fontFamily: 'NexonGothicBold',
      fontSize: '16px',
      lineHeight: '22px',
    },
    subHead4: {
      fontFamily: 'NexonGothicBold',
      fontSize: '18px',
      lineHeight: '26px',
    },
    headline: {
      fontFamily: 'NexonGothicBold',
      fontSize: '20px',
      lineHeight: '30px',
    },
    display: {
      fontFamily: 'NexonGothicBold',
      fontSize: '24px',
      lineHeight: '34px',
    },
    display2: {
      fontFamily: 'NexonGothicBold',
      fontSize: '32px',
      lineHeight: '42px',
    },
    display3: {
      fontFamily: 'NexonGothicBold',
      fontSize: '36px',
      lineHeight: '46px',
    },
    display4: {
      fontFamily: 'NexonGothicBold',
      fontSize: '40px',
      lineHeight: '52px',
    },
  },
  colors: {
    // Brand Colors
    point: '#92B5D9',
    subPoint: '#00A3FF',
    pointPurple: '#66648B',
    subPurple: '#4B10AC',
    red: '#F45959',
    blue: '#1164CD',
    kakao: '#FEE500',

    // Grayscale Colors
    white: '#ffffff',
    lightGray: '#F5F5F5',
    lightGray2: '#ECECEC',
    lightGray3: '#D7D7D7',
    lightGray4: '#CECECE',
    lightGray5: '#B4B4B4',
    gray1: '#949494',
    gray2: '#787878',
    gray3: '#5C5C5C',
    gray4: '#434343',
    darkGray: '#2F2F2F',
    darkGray2: '#1B1B1B',
    black: '#000000',
  },
};
