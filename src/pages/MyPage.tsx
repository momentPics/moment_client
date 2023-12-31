import styled from 'styled-components';
import Profile from '../components/mypage/Profile/Profile';
import UserMenu from '../components/mypage/UserMenu/UserMenu';

const MyPage = () => {
  return (
    <Layout>
      <Profile />
      <UserMenu />
    </Layout>
  );
};

export default MyPage;

const Layout = styled.section`
  padding: 0 24px;

  box-sizing: border-box;
`;
